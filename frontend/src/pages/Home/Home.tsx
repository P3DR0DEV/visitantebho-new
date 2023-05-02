import "./Home.css";
import { useNavigate } from "react-router-dom";
import { ResponseApi } from "@/types";
import { TokenContext } from "@/context/TokenContext";
import { Card } from "@/components";
import { useState, useEffect, useContext } from "react";

export function Home() {
  const [datas, setDatas] = useState<ResponseApi[]>([]);
  const { token } = useContext(TokenContext);
  const navigate = useNavigate();

  useEffect(() => {
    !token ? navigate("/") : "";
    function fetchData() {
      fetch("http://192.168.18.131:3000/home", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setDatas([...data]);
        })
        .catch((e) => console.log(e));
    }
    fetchData();
  }, []);

  console.log(datas);
  return (
    <div className="homeContainer">
      <div className="flex-title-div">
        <h2>Ultimos Usuários Logados</h2>
        <h3>Controle de Logins no Usuário visitante</h3>
      </div>
      {datas.length ? (
        datas.map((data) => {
          return <Card user={data} key={data._id} />;
        })
      ) : (
        <h1 className="empty-data">Ainda não possuem registros</h1>
      )}
    </div>
  );
}
