import styled, { keyframes } from "styled-components";

const toAppear = keyframes`

  0%{
    transform: scale(0);
  }
`

const StyledCard = styled.div`

  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 20px;
  gap: 10px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 0.5s;
  animation: ${toAppear} 0.3s;
  animation-duration: ${props => props.$delay}ms;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;


  &:hover{
    transform: scale(1.02);
  };

  img{
    
    width: 100%;
  }

  section{

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 10px;
    font-size: 0.9rem;
    color: white;

    span{

      font-size: 24px;
      color: rgb(0, 159, 0);
      font-weight: bold;
    }
  }
`

const Card = ({ imageURL, description, price, delayToAppear }) => {

  return (

    <StyledCard $delay={delayToAppear}>
      
      <img src={imageURL} />

      <section>
        <p>{description}</p>
        <span>R$ {price}</span>
      </section>

    </StyledCard>
  )
}

export default Card;