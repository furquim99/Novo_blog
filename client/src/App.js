import "./App.css";
import { useState } from "react";
import Axios from "axios";
//import { Form } from "react-bootstrap";
//import { Button } from "react-bootstrap"; css avançado no udemy anotaçao
//import AppLogin from "../src/login/AppLogin"

//import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);
  const [newWage, setNewWage] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          name: name,
          age: age,
          country: country,
          position: position,
          wage: wage,
        },
      ]);
    });
  };

  const updateEmployeeWage = (id) => {
    Axios.put("http://localhost:3001/update", { wage: newWage, id: id }).then(
      (response) => {
        setEmployeeList(
          employeeList.map((val) => {
            return val.id === id
              ? {
                  id: val.id,
                  name: val.name,
                  country: val.country,
                  age: val.age,
                  position: val.position,
                  wage: newWage,
                }
              : val;
          })
        );
      }
    );
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  return (
    <div className="App container">
      <h1>Blog Descriçoes Profissionais</h1>
      {/*<Router>
      <Route path="/login" render={(props) => <AppLogin/>} />
      </Router>*/}
      {/*  <a href="/login">Login</a>
        <a href="/register">Criar conta</a>*/}
      <div className="information">
        <form action="">
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Coloque seu nome"
              onChange={(event) => {
                setName(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age">Idade:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Coloque sua idade"
              onChange={(event) => {
                setAge(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="country">País:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Coloque seu país de origem"
              onChange={(event) => {
                setCountry(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Position">Profissão:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Coloque sua profissão"
              onChange={(event) => {
                setPosition(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Wage">Descrição:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Escreva aqui"
              onChange={(event) => {
                setWage(event.target.value)
              }}
            />
          </div>
          <button onClick={addEmployee} class="btn btn-success">
            Adicionar Post
          </button>
        </form>
      </div>
      <hr />
      <div className="employees">
        <button class="btn btn-primary" onClick={getEmployees}>
          Mostrar Posts
        </button>
        <br />
        <br />
        {employeeList.map((val, key) => {
          return (
            <div className="employee card">
              <div className="card-body text-left">
                <p className="card-text">Nome: {val.name}</p>
                <p className="card-text">Idade: {val.age}</p>
                <p className="card-text">País: {val.country}</p>
                <p className="card-text">Profissão: {val.position}</p>
                <p className="card-text">Descrição: {val.wage}</p>
                <div className="d-flex">
                  <input
                    className="form-control"
                    style={{ width: "300px" }}
                    type="text"
                    placeholder=""
                    onChange={(event) => {
                      setNewWage(event.target.value)
                    }}
                  />
                  <button className="btn btn-warning" onClick={() => {updateEmployeeWage(val.id)}}>Editar</button>

                  <button className="btn btn-danger" onClick={() => {deleteEmployee(val.id)}}>Deletar </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
