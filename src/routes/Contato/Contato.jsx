import { useState } from "react";

import ContatoContainer from "./ContatoContainer";
import CommonButton from "../../Components/Buttons/CommonButton";

function Contato() {
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleStates = (handleState) => ({target}) => handleState(target.value);

  const handleSubmit = (event) => {

    event.preventDefault();

    const data = JSON.stringify({
      nome: nome,
      email: email,
      mensagem: mensagem
    });

    const API_URL = 'https://644f06e0b61a9f0c4d1b1e80.mockapi.io/mensagens';

    const config = {
      method: "POST",
      headers: { "Content-Type" : "application/json" },
      body: data
    };

    fetch(API_URL,config)
    .then(res => res.status)
    .then(status => alert(status))
  }

  return (
    
    <ContatoContainer>
      <div>
        <h1>Localização <i className="fa-solid fa-map-location-dot"></i></h1>
        <p>Nosso endereço:</p>
        <p>R. Yeda, 595 - Tijuca, Teresópolis - RJ, 25975-560</p>
        <p>Telefone: (21) 97661-7097</p>

        <section>
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
        </section>
      </div>

      <form onSubmit={handleSubmit}>

        <p>Formulário de contato</p>

        <input 
          type="text" 
          id="nome" 
          placeholder="seu nome" 
          value={nome} 
          onChange={handleStates(setNome)} 
        />

        <input 
          type="email" 
          id="email" 
          placeholder="example@email.com" 
          value={email} 
          onChange={handleStates(setEmail)} 
        />

        <textarea 
          id="mensagem" 
          rows={4} cols={30} 
          placeholder="sua mensagem" 
          value={mensagem} 
          onChange={handleStates(setMensagem)} 
        />

        <CommonButton text={'enviar'} />

      </form>
    </ContatoContainer>
  )
}

export default Contato;