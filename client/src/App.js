
import React, { useState ,useEffect } from "react";
import './App.css';
import Axios from "axios";
import Card from "./components/cards/card";

export default function App() {
const [values, setValues] = useState();
const [listCard, setListCard] = useState([]);
  console.log(listCard);

  const handleRegisterPost = () => {
    Axios.post("http://localhost:3001/register", {
      nome: values.nome,
      titulo: values.titulo,
      descricao: values.descricao,
    }).then(() => {
      Axios.post("http://localhost:3001/search", {
        nome: values.nome,
        titulo: values.titulo,
        descricao: values.descricao,
      }).then((response) => {
        setListCard([
          ...listCard,
          {
            id: response.data[0].id,
            nome: values.nome,
            titulo: values.titulo,
            descricao: values.descricao,
          },
        ]);
      });
    });
  };
  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setListCard(response.data);
    });
  }, []);
const handleaddValues = (value) => {
  setValues((prevValues) => ({
    ...prevValues,
    [value.target.name]: value.target.value,
  }));
};

  return (
    <div className="app-container">
      <div className="register-container">
      <h1 className="register-title">Meu blog de notas</h1>
      <input
          type="text"
          name="name"
          placeholder="Nome"
          className="register-input"
          onChange={handleaddValues}
        />
        <input
          type="text"
          placeholder="titulo"
          name="titulo"
          className="register-input"
          onChange={handleaddValues}
        />
        <input
          type="text"
          placeholder="Descricao"
          name="descricao"
          className="register-input"
          onChange={handleaddValues}
        />

        <button onClick={handleRegisterPost} className="register-button">
          Cadastrar
        </button>
      </div>
      {listCard.map((val) => (
        <Card
          listCard={listCard}
          setListCard={setListCard}
          key={val.id}
          id={val.id}
          name={val.name}
          titulo={val.titulo}
          descricao={val.descricao}
        />
      ))}
    </div>
  );


}
