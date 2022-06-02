import React from "react";
import "./card.css";
import FormDialog from "../dialog/dialogForm";
export default function Card(props) {
    const [open, setOpen] = React.useState(false);
  
    return (
      <>
        <FormDialog
          open={open}
          setOpen={setOpen}
          nome={props.nome}
          descricao={props.descricao}
          titulo={props.titulo}
          listCard={props.listCard}
          setListCard={props.setListCard}
          id={props.id}
        />
        <div className="card-container" onClick={() => setOpen(true)}>
          <h1 className="card-title">{props.nome}</h1>
          <p className="card-id">{props.id}</p>
          <p className="card-cartegory">{props.descricao}</p>
          <h3 className="card-titulo">R${props.titulo}</h3>
        </div>
      </>
    );
  }