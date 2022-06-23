# crud-react-node-mysql
# Novo_blog

Projeto da disciplina Desenvolvimento de Sistemas WEB - 1º Sem 2022 Desenvolvimento de um blog CRUD com mysql de banco de dados

para incialização do blog, é necessarios os comandos 
git clone https://github.com/furquim99/Novo_blog
cd client
npm install 
npm audit fix 
npm start

cd server
nodemon index

Para a inicialização do banco basta o comando

create database employeeSystem;

use employeeSystem;

CREATE TABLE employees(
	id int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name varchar(100) NOT NULL,
    age int(10) NOT NULL,
    country varchar(100) NOT NULL,
    position varchar(100) NOT NULL,
    wage varchar(500) NOT NULL
) ENGINE=InnoDB default charset=utf8;

select * from employees;



