import Reserve from '../models/Reserve';
import User from '../models/User';
import House from '../models/House';

class ReserveController {
  async index(req, res) {
    const { user_id } = req.headers;

    const reserves = await Reserve.find({ user: user_id }).populate('house').populate('user');

    return res.json(reserves);
  }

  async store(req, res) {
    const { user_id } = req.headers;
    const { house_id } = req.params;
    const { date } = req.body;

    const house = await House.findById(house_id);
    if (!house) {
      return res.status(400).json({ error: 'Essa casa não existe.' });
    }

    if (house.status !== true) {
      return res.status(400).json({ error: 'Solicitação indisponível.' });
    }

    const user = await User.findById(user_id);
    if (String(user._id) === String(house.user)) {
      return res.status(401).json({ error: 'Reserva não permitida.' });
    }

    const reserve = await Reserve.create({
      user: user_id,
      house: house_id,
      date,
    });

    const populatedReserve = await Reserve.findById(reserve._id).populate('house').populate('user');

    return res.json(populatedReserve);
  }

  async destroy(req, res) {
    const { reserve_id } = req.body;
  
    try {
      const reserve = await Reserve.findById(reserve_id);
  
      if (!reserve) {
        return res.status(400).json({ error: 'ID de reserva inválido. Por favor, informe um ID válido.' });
      }
  
      await Reserve.findByIdAndDelete(reserve_id);
  
      const deletedReserve = await Reserve.findById(reserve_id);
      if (!deletedReserve) {
        return res.status(200).json({ message: 'Reserva deletada com sucesso.' });
      } else {
        return res.status(500).json({ error: 'Ocorreu um erro ao excluir a reserva.' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Ocorreu um erro ao excluir a reserva.' });
    }
  }
}

export default new ReserveController();
