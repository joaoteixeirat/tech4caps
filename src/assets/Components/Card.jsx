import styled from "styled-components";

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
  transition: all 0.5s;
  cursor: pointer;

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

const Card = ({ imageURL, description, price }) => {

  return (

    <StyledCard>
      
      <img src={imageURL} />

      <section>
        <p>{description}</p>
        <span>R$ {price}</span>
      </section>

    </StyledCard>
  )
}

export default Card;