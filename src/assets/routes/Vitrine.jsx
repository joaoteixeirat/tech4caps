import styled from "styled-components";
import Card from "../Components/Card";
import VitrineSection from "../Components/VitrineSection";

function Vitrine() {

  const products = [
    {
      url: 'https://img.lojasrenner.com.br/item/670277658/large/3.jpg',
      description: 'babababababababab asgldglasdga ajhgd askghjdlkasd',
      price: '29.00'
    },
    {
      url: 'https://img.lojasrenner.com.br/item/675671371/large/3.jpg',
      description: 'babababababababab asgldglasdga ajhgd askghjdlkasd',
      price: '29.00'
    },
    {
      url: 'https://img.lojasrenner.com.br/item/792046161/large/3.jpg',
      description: 'babababababababab asgldglasdga ajhgd askghjdlkasd',
      price: '29.00'
    },
    {
      url: 'https://img.lojasrenner.com.br/item/601842844/large/3.jpg',
      description: 'babababababababab asgldglasdga ajhgd askghjdlkasd',
      price: '29.00'
    },
    {
      url: 'https://img.lojasrenner.com.br/item/670266721/large/3.jpg',
      description: 'babababababababab asgldglasdga ajhgd askghjdlkasd',
      price: '29.00'
    },
    {
      url: 'https://img.lojasrenner.com.br/item/673250291/large/3.jpg',
      description: 'babababababababab asgldglasdga ajhgd askghjdlkasd',
      price: '29.00'
    },
    {
      url: 'https://img.lojasrenner.com.br/item/625200521/large/1.jpg',
      description: 'babababababababab asgldglasdga ajhgd askghjdlkasd',
      price: '29.00'
    },
    {
      url: 'https://img.lojasrenner.com.br/item/817849560/large/3.jpg',
      description: 'babababababababab asgldglasdga ajhgd askghjdlkasd',
      price: '29.00'
    }
  ]

  const CardsContainer = styled.div`
  
    width: 100%;
    max-width: 1180px;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    padding: 0 40px 40px 40px;
    overflow-y: auto;
    
    &::-webkit-scrollbar{
      width: 10px;
    }

    &::-webkit-scrollbar-track{

      background: #747474;
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb{

      background: #eeeeee;
      border-radius: 5px;
    }
  `

  return (
  
    <VitrineSection>

      <CardsContainer>
        {
          products.map((product,index) => (

            <Card
              key={product.url}
              imageURL={product.url}
              description={product.description}
              price={product.price}
              delayToAppear={(index + 1) * 120}
            />
          ))
        }
      </CardsContainer>
    </VitrineSection>
  )
}

export default Vitrine;