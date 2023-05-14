README TRADUCTION: 
English
Português - Linha 77.

Project Description: This is a basic project with functionalities to create and manage houses, users, and reservations. It also includes features for session management, ID generation, file storage, and file retrieval. These functionalities are implemented using HTTP requests, and the data is passed and retrieved through a MongoDB database. The chosen package manager is Yarn. We use the Mongoose and Yup libraries, along with the Express framework, to assist in the project development.

To install the project in a development or production environment, please follow the step-by-step instructions below:

Make sure you have Node.js and the Yarn package manager installed on your system. You can download and install Node.js from https://nodejs.org and Yarn from https://yarnpkg.com.

Clone the project repository to your local environment.

Open a terminal and navigate to the root directory of the project.

Run the command yarn install to install all project dependencies. Make sure you have the following dependencies listed in the package.json file:

cors@2.8.5
express@4.18.2
mongodb@5.4.0
mongoose@7.1.0
multer@1.4.5-lts.1
nodemon@2.0.22
sucrase@3.32.0
yup@1.1.1

Ensure that you have a running instance of the MongoDB database. If not, install and configure MongoDB according to the instructions on the official website.

Go to the "src" folder and open the "app.js" file. You can modify the MongoDB URL there according to your username, password, and project.

Configure the necessary environment variables, such as database credentials or API keys. Make sure you have a .env file in the root directory of the project containing these configurations. If it doesn't exist, create a .env file and add the required variables.

Make sure to follow all the steps correctly and adjust the settings according to your specific environment's needs.

How to Use: Now you can start your server by running the command yarn run dev or npm run dev if you prefer. The server will be available at http://localhost:3333, but you can change the port in the server.js file. Once done, you can use the project with URLs as described above and those declared in the "routes.js" file, both in the browser and in other programs like Insomnia, Postman, etc.

Here are some routes for testing:

POST http://localhost:3333/sessions
Function: Start a user session

POST http://localhost:3333/houses
Function: Create a new house

GET http://localhost:3333/houses
Function: List all houses

PUT http://localhost:3333/houses/:house_id
Function: Update a specific house
Parameter: :house_id is the unique identifier of the house to be updated

DELETE http://localhost:3333/houses

GET http://localhost:3333/dashboard
Function: Display the houses associated with a specific user in the dashboard
Header: user_id (User ID)
Response: Returns a JSON containing the houses associated with the specified user.

POST http://localhost:3333/houses/:house_id/reserve
Function: Create a reservation for a specific house
Parameter: :house_id is the unique identifier of the house where the reservation will be made

GET http://localhost:3333/reserves
Function: List all reservations

DELETE http://localhost:3333/reserves/cancel
Function: Cancel a specific reservation





---------------------------------------------------------------------------------------------------------------

---------------------------------------------------------------------------------------------------------------


Descrição do projeto: Um projeto básico com funcionalidades para criar e gerenciar casas, usuários e reservas, além do fato de ter funcionalidades para iniciar sessões, gerar ID, armazenar e enviar arquivos. Essas funcionalidades se dão por meio de requisições HTTP, e as informações são passadas e adquiridas através do banco de dados MongoDB. O gerenciador de pacotes escolhido foi o Yarn. Utilizamos as bibliotecas Mongoose e Yup, além do framework Express, para auxiliar no desenvolvimento do projeto.


---------------------------------------------------------------------------------------------------------------

---------------------------------------------------------------------------------------------------------------


Para instalar o projeto em um ambiente de desenvolvimento ou produção, 
siga as instruções passo a passo abaixo:

Certifique-se de ter o Node.js e o gerenciador de pacotes Yarn instalados em seu sistema. Você pode baixar e instalar o Node.js em https://nodejs.org e o Yarn em https://yarnpkg.com.

Clone o repositório do projeto para o seu ambiente local.

Abra um terminal e navegue até o diretório raiz do projeto.

Execute o comando yarn install para instalar todas as dependências do projeto. Certifique-se de ter as seguintes dependências listadas no arquivo package.json:

cors@2.8.5
express@4.18.2
mongodb@5.4.0
mongoose@7.1.0
multer@1.4.5-lts.1
nodemon@2.0.22
sucrase@3.32.0
yup@1.1.1
Verifique se você possui uma instância do banco de dados MongoDB em execução. Caso contrário, instale e configure o MongoDB de acordo com as instruções do site oficial.

Vá atá a pasta "src" e abra o file "app.js", ali você pode alterar a url do MongoDB de acordo com o seu
usuário, senha e projeto.

Configure as variáveis de ambiente necessárias, como as credenciais do banco de dados ou as chaves de API. Verifique se você possui um arquivo .env no diretório raiz do projeto contendo essas configurações. Se não existir, crie um arquivo .env e adicione as variáveis necessárias.

Certifique-se de seguir todas as etapas corretamente e ajustar as configurações de acordo com as necessidades específicas do seu ambiente.


---------------------------------------------------------------------------------------------------------------

---------------------------------------------------------------------------------------------------------------

Como usar: Agora você pode iniciar seu servidor executando o comando yarn run dev ou se preferir npm run dev. 
O servidor estará disponível em http://localhost:3333  , porém você pode alterar a porta no File server.js.
Feito isso poderá usar o projeto com Urls como a que foi descrita acima e aquelas declaradas no file "routes.js" tanto no navegador, quanto em outros programas como Insomnia, Postman etc...


Segue rotas para teste: 

POST http://localhost:3333/sessions
Função: Iniciar uma sessão de usuário

POST http://localhost:3333/houses
Função: Criar uma nova casa

GET http://localhost:3333/houses
Função: Listar todas as casas

PUT http://localhost:3333/houses/:house_id
Função: Atualizar uma casa específica
Parâmetro: :house_id é o identificador único da casa a ser atualizada

DELETE http://localhost:3333/houses


GET http://localhost:3333/dashboard
Função: Exibir as casas associadas a um usuário específico no painel de controle
Cabeçalho: user_id (ID do usuário)
Resposta: Retorna um JSON contendo as casas associadas ao usuário especificado.


POST http://localhost:3333/houses/:house_id/reserve
Função: Criar uma reserva para uma casa específica
Parâmetro: :house_id é o identificador único da casa em que a reserva será feita

GET http://localhost:3333/reserves
Função: Listar todas as reservas

DELETE http://localhost:3333/reserves/cancel
Função: Cancelar uma reserva específica

