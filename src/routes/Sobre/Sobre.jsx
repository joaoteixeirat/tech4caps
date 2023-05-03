import SobreContainer from "./SobreContainer";

function Sobre() {

  return (
    
    <SobreContainer>
      <div className="foto-de-perfil"></div>
      <div className="descricao">
        <p>
          Essa é a Tech4caps, a loja de bonés mais irada da América Latina, criada por mim usando tudo o que aprendi durante essa jornada de seis meses no Projeto Galileo. 
          Meu objetivo era deixar o site o mais moderno e elegante possível, e para isso, utilizei a biblioteca React, que facilitou muito o processo. 
          Para a estilização, foi utilizado o Styled Components, e para as rotas da página, o React Router Dom, ambas bibliotecas complementares do React. 
          Este foi o projeto final de um curso que posso dizer com tranquilidade que mudou minha vida e minha visão sobre tecnologia. 
          Queria deixar um agradecimento especial ao meu professor, o querido Tio Zepa, que nos acompanhou durante todo esse período. 
          Agradeço também à Tech4me e ao Itaú, que tornaram esse curso possível, mudando o futuro de vários jovens e suas famílias, tornando o mundo um lugar melhor, um passo de cada vez.
        </p>
      </div>

      <div className="tecnologias-aprendidas">
        <img src="/icons/html5.png" />
        <img src="/icons/css3.svg" />
        <img src="/icons/javascript.svg" />
        <img src="/icons/react.svg" />
        <img src="/icons/react-router.svg" />
        <img src="/icons/styled-components.svg" />
      </div>
    </SobreContainer>
  )
}

export default Sobre;