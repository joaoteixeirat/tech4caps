import styled from "@emotion/styled";

const StyledBotao = styled.button`

  all: unset;
  width: 30px;
  aspect-ratio: 1;
  display: grid;
  place-content: center;
  font-size: 20px;
  cursor: pointer;
  z-index: 1;
  transition: color 0.4s ease;

  &:hover{

    color:  rgb(215, 25, 32) ;
  }
`

const BotaoDeCoracao = () => {

  return (
    <StyledBotao>
      <i className="fa-solid fa-heart"></i>
    </StyledBotao>
  );
}

export default BotaoDeCoracao;