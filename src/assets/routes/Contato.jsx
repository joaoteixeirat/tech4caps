import styled from "styled-components";
import CommonButton from "../Components/Buttons/CommonButton";

const ContactSection = styled.section`

  font-family: Arial, Helvetica, sans-serif;
  width: 100vw;
  height: calc(100vh - 100px);
  background-color: rgba(22, 21, 21, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  color: white;

  form{
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 15px;

    input, textarea{

      padding: 10px;
      min-width: 400px;
      max-width: 400px;
    }
  }
`

function Contato() {
  
  return (
    
    <ContactSection>

      <form>

        <input type="text" id="nome" placeholder="seu nome" />
        <input type="email" id="email" placeholder="example@email.com" />
        <textarea id="mensagem" rows={4} cols={30} placeholder="sua mensagem"/>

        <CommonButton text={'enviar'} />

      </form>

    </ContactSection>
  )
}

export default Contato;