import StyledCard from "./StyledCard";

const Card = ({ id, imageURL, title, price, delayToAppear }) => {

  return (
    <StyledCard 
      $delay={delayToAppear} 
      to={`/vitrine/detalhes/${id}`}>

      <img src={imageURL} />

      <section>
        <p>{title}</p>
        <span>R$ {price}</span>
      </section>

    </StyledCard>
  )
}

export default Card;