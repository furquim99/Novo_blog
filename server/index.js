const express = require("express");
const helmet = require ('helmet');
const compression = require ('compression');
const app = express();
const mysql = require("mysql");
const cors = require("cors");
require('./startup/prod')(app);


const db = mysql.createConnection({
    
    host: "localhost:3307", //127.0.0.1
    user: "root",
    password: "1999",
    database: "new_blog",

  });

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get("/", (req, res) => {
    res.send("hello world");
    
    /*let SQL = " INSERT INTO post (nome, titulo, descricao) VALUES ( 'Fabio', 'segundo post', 'meu segundo post')";

    db.query(SQL, (err, result) => {
      console.log(err);
    })*/
 })

app.post("/register", (req, res) => {
  console.log("cheguei aqui");
    const { nome } = req.body;
    const { titulo } = req.body;
    const { descricao } = req.body;
    console.log(nome);
    let mysql = "INSERT INTO post ( nome, titulo, descricao) VALUES (?, ?, ?)";
    db.query(mysql, [nome, titulo, descricao], (err, result) => {
      if(err){
        console.log(err);
      }else{
        res.send(result);
      }
      
    });
  });
app.post("/search", (req, res) => {
    const { nome } = req.body;
    const { titulo } = req.body;
    const { descricao } = req.body;
  
    let mysql =
      "SELECT * from post WHERE nome = ? AND titulo = ? AND descricao = ?";
    db.query(mysql, [nome, titulo, descricao], (err, result) => {
      if (err) res.send(err);
      res.send(result);
    });
  });
app.get("/getCards", (req, res) => {
    let mysql = "SELECT * FROM post";
    db.query(mysql, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  app.put("/edit", (req, res) => {
    const { id } = req.body;
    const { nome } = req.body;
    const { titulo } = req.body;
    const { descricao } = req.body;
    let mysql = "UPDATE post SET nome = ?, titulo = ?, descricao = ? WHERE id = ?";
    db.query(mysql, [nome, titulo, descricao, id], (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });
  
  app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    let mysql = "DELETE FROM post WHERE id = ?";
    db.query(mysql, id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.listen(3001, () => {
    console.log("rodando na porta 3001");
  });