import styled from "styled-components";

const ButtonStyled = styled.div.attrs({role : 'button'})`

  width: 200px;
  height: 50px;
  font-size: 24px;
  position: relative;
  bottom: 10%;
  border-bottom: 1px solid white;
  color: white;
  cursor: pointer;

  &::after{
    content: '';
    width: inherit;
    height: 0%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: white;
    transition: height 0.4s ease;
  }

  &:hover::after{
    height: 100%;
  }
`

const Span = styled.span`

  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  left: 0;
  display: grid;
  place-items: center;
  transition: color 0.4s ease;
  
  &:hover{
    color: black;
  }
`

const Button = ({text}) => {

  return(

    <ButtonStyled>
      <Span>
        {text}
      </Span>
    </ButtonStyled>
  );
};

export default Button;