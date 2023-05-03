import StyledCard from "./StyledCard";

const Card = ({ id, urlDaImagem, titulo, preco, delayDeAparicao }) => {

  return (
    <StyledCard $delay={delayDeAparicao} to={`/vitrine/detalhes/${id}`}>

      <img src={urlDaImagem} />

      <section>
        <p>{titulo}</p>
        <span>R$ {preco}</span>
      </section>

    </StyledCard>
  )
}

export default Card;