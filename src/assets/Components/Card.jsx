import styled, { keyframes } from "styled-components";
import { Link } from 'react-router-dom';

const toAppear = keyframes`

  0%{
    transform: scale(0);
  }
`

const StyledCard = styled(Link)`

  text-decoration: none;
  width: 250px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 20px;
  gap: 10px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 0.5s;
  animation: ${toAppear} 0.3s;
  animation-duration: ${props => props.$delay}ms;
  font-family: Arial, Helvetica, sans-serif;
  background-color: white;

  &:hover{
    transform: translateY(-5px);
  };

  img{
    
    width: 100%;
  }

  section{

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    gap: 10px;
    font-size: 0.9rem;
    color: #333;
    padding: 0 20px;
    height: 100%;

    span{

      font-size: 16px;
      color: #191919;
      font-weight: 600;
    }
  }
`

const Card = ({ id, imageURL, title, price, delayToAppear }) => {

  return (

    <StyledCard $delay={delayToAppear} to={`/detalhes/${id}`}>
      
      <img src={imageURL} />

      <section>
        <p>{title}</p>
        <span>R$ {price}</span>
      </section>

    </StyledCard>
  )
}

export default Card;