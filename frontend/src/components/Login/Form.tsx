import { useState, useContext, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../context/TokenContext";
import "./Form.css";

export function Form() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();
  const { setToken } = useContext(TokenContext);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    login(user, pass);
  }

  const login = (user: string, pass: string) => {
    fetch("http://192.168.18.131:3000/api/activeDirectory/login", {
      method: "POST",
      body: JSON.stringify({
        user,
        pass,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setToken(data.token);
        data.token ? navigate("/home") : navigate("/notAllowed");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="login-form">
      <div className="login-form-logo">
        <img src="/images/logo.png" alt="Claretiano Logo" />
        <h3>Controle Login Visitante </h3>
      </div>
      <form className="form-group" onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="user-box">
            <input
              type="text"
              name="user"
              id="user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className=""
              required
            />
            <label htmlFor="user">Matricula</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="pass"
              id="pass"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
              className=""
              required
            />
            <label htmlFor="pass">Senha</label>
          </div>
          <a
            href="https://portal.redeclaretiano.edu.br/br/login"
            className="recuperar-senha"
            target={"_blank"}
          >
            Esqueceu a sua senha?
          </a>
        </div>
        <button type="submit" className="button-submit">
          Log In
        </button>
      </form>
    </div>
  );
}
