import styled from "styled-components";
import Card from "../Components/Card";
import VitrineSection from "../Components/VitrineSection";

function Vitrine() {

  const products = [
    {
      url: 'https://img.lojasrenner.com.br/item/670277658/large/3.jpg',
      description: 'Boné Aba Curva Em Algodão Com Cordão E Patch De Coqueiro Branco',
      price: '39.90'
    },
    {
      url: 'https://img.lojasrenner.com.br/item/675671371/large/3.jpg',
      description: 'Bone Em Algodão Com Bordado Coqueiro Bege',
      price: '79.90'
    },
    {
      url: 'https://img.lojasrenner.com.br/item/792046161/large/3.jpg',
      description: 'Boné Aba Reta Felpudo Com Five Panel E Etiqueta Frontal Preto',
      price: '79.90'
    },
    {
      url: 'https://img.lojasrenner.com.br/item/601842844/large/3.jpg',
      description: 'Boné Aba Curva Em Suedine 6 Panel Rosa Claro',
      price: '59.90'
    },
    {
      url: 'https://img.lojasrenner.com.br/item/670266721/large/3.jpg',
      description: 'Boné Aba Curva Em Algodão Com Estampa De Ursinhos Bege',
      price: '59.90'
    },
    {
      url: 'https://img.lojasrenner.com.br/item/673250291/large/3.jpg',
      description: 'Boné Aba Curva Em Algodão Com Bordado Summer Vacation Off White',
      price: '69.90'
    },
    {
      url: 'https://img.lojasrenner.com.br/item/625200521/large/1.jpg',
      description: 'Boné Com Aba Curva E Estampa Refletiva Em Lettering Do Not Give Up Preto',
      price: '59.90'
    },
    {
      url: 'https://img.lojasrenner.com.br/item/817849560/large/3.jpg',
      description: 'Boné Aba Curva Em Sarja Com 06 Panel E Bordado NY Bege',
      price: '69.90'
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