# Novo_blog

Projeto da disciplina Desenvolvimento de Sistemas WEB - 1º Sem 2022 Desenvolvimento de um blog CRUD com mysql de banco de dados

para incialização do blog, é necessarios os comandos 
git clone https://github.com/furquim99/Novo-blog 
npm install 
npm audit fix 
npm start

Para a inicialização do banco basta o comando

create database new_blog;

use new_blog;

CREATE TABLE if not exists  post( 
                    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL, 
                    nome VARCHAR(60) NOT NULL, 
                    titulo TEXT NOT NULL, 
                    descricao VARCHAR(200) NOT NULL,
                    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
                    
select * from post;

