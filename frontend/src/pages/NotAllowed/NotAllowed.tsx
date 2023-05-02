import { BsFillEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./NotAllowed.css";

export function NotAllowed() {
  return (
    <div className="notAllowed-container">
      <img
        src="/images/logo.png"
        alt="Claretiano Logo"
        className="notAllowed-img"
      />
      <h1 className="notAllowed-title">
        Não autorizado!
        <BsFillEyeSlashFill />
      </h1>
      <p className="notAllowed-p">
        Parece que você não está autorizado para ver essa pagina, cheque as
        credenciais digitadas ou entre em contato com o administrador.
      </p>
      <Link to={"/"} className="btn-return">
        Retornar a pagina inicial
      </Link>
    </div>
  );
}
