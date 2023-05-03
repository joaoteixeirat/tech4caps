import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledButton = styled.button`

  all: unset;
  width: 200px;
  height: 50px;
  font-size: 24px;
  position: relative;
  bottom: 10%;
  border-bottom: 1px solid white;
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

  span{

    color: white;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    left: 0;
    bottom: 0;
    display: grid;
    place-items: center;
    transition: color 0.4s ease;
    font-family: 'Courier New', Courier, monospace;
    &:hover{
      color: black;
    }
  }
`

const VitrineButton = ({ to }) => {

  return (

    <StyledButton>
      <Link to={to}>
        <span>vitrine →</span>
      </Link>
    </StyledButton>
  );
};

export default VitrineButton;