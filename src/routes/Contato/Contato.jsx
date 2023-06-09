import { useState, useEffect } from "react";

import ContatoContainer from "./ContatoContainer";
import BotaoPadrao from "../../Components/Botoes/BotaoPadrao";
import Alerta from "../../Components/Alerta/Alerta";

function Contato() {
  
  const [ nome, setNome ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ mensagem, setMensagem ] = useState('');
  const [ mostrarAlerta, setMostrarAlerta ] = useState(false);
  const [ varianteDoAlerta, setVarianteDoAlerta ] = useState('sucesso');

  const handleStates = (handleState) => ({target}) => handleState(target.value);

  useEffect(() => {

    if (!mostrarAlerta) return;

    const timeout = setTimeout(() => {

      setMostrarAlerta(false);
      
    },2000);

    return () => { clearTimeout(timeout) };

  },[mostrarAlerta])

  const handleSubmit = (event) => {

    event.preventDefault();

    if(!nome || !email || !mensagem) {

      setVarianteDoAlerta('erro');
      setMostrarAlerta(true);
      return;
    }

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
    .then(() => {

      setVarianteDoAlerta('sucesso');
      setMostrarAlerta(true);
    });
  }

  return (
    
    <ContatoContainer>

      <Alerta 
        visivel={mostrarAlerta} 
        variante={varianteDoAlerta}
      />

      <div className="info-endereco">
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

        <BotaoPadrao texto={'enviar'} />

      </form>
    </ContatoContainer>
  )
}

export default Contato;