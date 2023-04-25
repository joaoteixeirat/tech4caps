import styled from "styled-components";

const BuyButtonStyled = styled.button`

  all: unset;
  background-color: green;
  padding: 10px 50px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover{

    background-color: #008000b5;
  }
`

const BuyButton = (props) => {

  return(
    <BuyButtonStyled>
      Comprar
    </BuyButtonStyled>
  )
}

export default BuyButton;