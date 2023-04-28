import styled from "styled-components";

const SobreSection = styled.section`

  font-family: Arial, Helvetica, sans-serif;
  width: 100vw;
  height: calc(100vh - 100px);
  background-color: rgba(22, 21, 21, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
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

  .profile{

    min-width: 350px;
    aspect-ratio: 1;
    background-image: url('/profilePhoto.jpg');
    background-position: center;
    background-size: cover;
    border-radius: 50%;
  }

  .description{

    width: 60%;
    max-width: 800px;
    min-width: 350px;
    line-height: 25px;
  }

  .learned-techs{

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    img{
      width: 50px;
    }
  }

`

function Sobre() {
  


  return (
    
    <SobreSection>
      <div className="profile"></div>

      <div className="description">
        <p>
          Essa é a Tech4caps, a loja de bonés mais irada da América Latina, criada por mim usando tudo o que aprendi durante essa jornada de seis meses no Projeto Galileo. 
          Meu objetivo era deixar o site o mais moderno e elegante possível, e para isso, utilizei a biblioteca React, que facilitou muito o processo. 
          Para a estilização, foi utilizado o Styled Components, e para as rotas da página, o React Router Dom, ambas bibliotecas complementares do React. 
          Este foi o projeto final de um curso que posso dizer com tranquilidade que mudou minha vida e minha visão sobre tecnologia. 
          Queria deixar um agradecimento especial ao meu professor, o querido Tio Zepa, e dizer que futuramente irei presenteá-lo com uma caixa de paçocas comprada com meu salário de programador. 
          Agradeço também à Tech4me e ao Itaú, que tornaram esse curso possível, mudando o futuro de vários jovens e suas famílias, tornando o mundo um lugar melhor, um passo de cada vez.
        </p>
      </div>

      <div className="learned-techs">
        <img src="/css3-icon.svg" />
        <img src="/html5-icon.png" />
        <img src="/javascript-icon.svg" />
        <img src="/react-icon.svg" />
        <img src="/react-router-icon.svg" />
        <img src="/styled-components-icon.svg" />
      </div>

    </SobreSection>
  )
}

export default Sobre;