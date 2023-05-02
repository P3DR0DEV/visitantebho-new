interface CardProps {
  user: ResponseApi;
}
import { ResponseApi } from "@/types";
import "./Card.css";

export function Card({ user }: CardProps) {
  const { STAMP, HOST, NOME, CPF } = user;
  const data = STAMP.split(" ");
  return (
    <div className="info-container">
      <div className="info-container-content">
        <h3>Nome</h3>
        <h4 className="info-container-content-nome">{NOME}</h4>
      </div>
      <div className="info-container-content">
        <h3>CPF</h3>
        <h4>{CPF}</h4>
      </div>
      <div className="info-container-content">
        <h3>Hostname</h3>
        <h4>{HOST}</h4>
      </div>
      <div className="info-container-content">
        <h3>Data</h3>
        <h4>{data[0]}</h4>
      </div>
      <div className="info-container-content">
        <h3>Hora</h3>
        <h4>{data[2]}</h4>
      </div>
    </div>
  );
}
