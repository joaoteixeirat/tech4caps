import { useEffect, useState } from "react";
import AdminContainer from "./AdminContainer";

const Admin = () => {

  const [ mensagens, setMensagens ] = useState([]);

  useEffect(() => {

    fetch('https://644f06e0b61a9f0c4d1b1e80.mockapi.io/mensagens')
    .then(res => res.json())
    .then(data => setMensagens(data))
  });

  return(

    <AdminContainer>
      {
        !mensagens.length ? <h2>Ainda não há mensagens...</h2> : 
        <>
          <h2>Caixa de Entrada</h2>
          {
            mensagens.map(({ id, nome, email, mensagem, createdAt }) => (
              <div key={id}>
                <p className="info-msg">Nome: <span>{nome}</span></p>
                <p className="info-msg">Email: <span>{email}</span></p>
                <p className="info-msg">Mensagem: <span>{mensagem}</span></p>
              </div>
            ))
          }
        </>
      }
    </AdminContainer>
  );
};

export default Admin;