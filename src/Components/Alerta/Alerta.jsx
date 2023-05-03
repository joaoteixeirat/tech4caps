import StyledAlerta from "./StyledAlerta";

const Alerta = ({visivel, variante}) => {

  const mensagemDeSucesso = "Sua mensagem foi enviada com sucesso!";
  const mensagemDeErro = "Os campos não podem estar vazios.";

  return(
    <StyledAlerta variante={variante} visivel={visivel}>
      {
        variante == 'sucesso' 
        ? <i className="fa-solid fa-check"></i> 
        : <i className="fa-solid fa-triangle-exclamation"></i>
      }
      <p>{ variante == 'sucesso' ? mensagemDeSucesso : mensagemDeErro }</p>
    </StyledAlerta>
  )
}

export default Alerta;