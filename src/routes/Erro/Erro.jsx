import { css } from "@emotion/css";

const Erro = () =>{

  const estilo = css`

    width: 100vw;
    height: calc(100vh - 100px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;

    img{

      width: 50%;
      max-width: 680px;
    }

    h1{
      font-family: Arial, Helvetica, sans-serif;
      color: white;
    }
  `

  return( 
    
    <div className={estilo}>
      <img src="/404.png"/> 
      <h1>no cap here bro...</h1>
    </div>
  )
}

export default Erro;