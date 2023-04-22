import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonStyled = styled.div.attrs({ role: 'button' })`

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

const StyledLink = styled(Link)`

  text-decoration: none;
  color: white;
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

const VitrineButton = ({ text, onClick }) => {

  return (

    <ButtonStyled onClick={onClick}>
      <StyledLink to={'/vitrine'}>
        {text}
      </StyledLink>
    </ButtonStyled>
  );
};

export default VitrineButton;