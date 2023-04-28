import styled from "styled-components";
import CommonButton from "../Components/Buttons/CommonButton";
import { useState } from "react";

const ContactSection = styled.section`

  font-family: Arial, Helvetica, sans-serif;
  width: 100vw;
  height: calc(100vh - 100px);
  background-color: rgba(22, 21, 21, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap-reverse;
  gap: 100px;
  color: white;
  overflow-y: auto;
  padding: 50px;

  &::-webkit-scrollbar{
    width: 10px;
  }

  &::-webkit-scrollbar-track{

    background: #747474;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb{

    background: #eeeeee;
    border-radius: 5px;
  }

  div, form, div > section{

    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
  }

  div{

    h1{

      font-size: 48px;
      margin-bottom: 20px;

      i{
        color: tomato;
      }
    }

    section{

      flex-direction: row;
      font-size: 24px;
      margin-top: 20px;

      a{

        all: unset;
      }

      i{

        cursor: pointer;
        transition: transform 0.3s ease;
        &:hover{

          transform: translateY(-5px);
        }
      }
    }

  }

  form{

    p{
      align-self: start;
    }
    
    input, textarea{

      padding: 10px;
      min-width: 300px;
      max-width: 400px;
    }
  }
`

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

    const API_URL = 'http://localhost:3000/mensagens';

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
    
    <ContactSection>

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

    </ContactSection>
  )
}

export default Contato;