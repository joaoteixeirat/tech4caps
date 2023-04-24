import styled from "styled-components";
import Card from "../Components/Card";
import VitrineSection from "../Components/VitrineSection";

function Vitrine() {

  const products = [
    {
      imagem: 'https://img.lojasrenner.com.br/item/670277658/large/3.jpg',
      titulo: 'Boné Aba Curva Em Algodão Com Cordão E Patch De Coqueiro Branco',
      preco: '39.90',
      descricao: {
        texto: 'O boné aba curva com cordão e patch emborrachado de coqueiro, é o acessório certo para complementar seus visuais informais e descolados. O modelo além de oferece proteção ao rosto, garante um estilo jovial e esportivo.',
        detalhes: [
          'Boné masculino',
          'Aba curva',
          '06 panel',
          'Patch emborrachado de coqueiro',
          'Detalhe cordão trançado',
          'Fechamento com velcro',
          'Material Sustentável',
          'Tecido: Algodão'
        ]
      }
    },
    {
      imagem: 'https://img.lojasrenner.com.br/item/675671371/large/3.jpg',
      titulo: 'Bone Em Algodão Com Bordado Coqueiro Bege',
      preco: '79.90',
      descricao: {
        texto: 'Boné masculino, com regulagem e estampa frontal. Prático e versátil é o acessório ideal para compor looks com muita personalidade e conforto. Use no dia a dia ou em momentos mais descontraídos.',
        detalhes: [
          'Boné masculino',
          'Aba curva',
          'Estampa frontal de coqueiro',
          'Lettering traseiro "Tropi Cowboy"',
          'Fechamento com regulagem',
          'Material Sustentável',
          'Tecido: Algodão'
        ]
      }
    },
    {
      imagem: 'https://img.lojasrenner.com.br/item/792046161/large/3.jpg',
      titulo: 'Boné Aba Reta Felpudo Com Five Panel E Etiqueta Frontal Preto',
      preco: '79.90',
      descricao: {
        texto: 'Boné masculino, com aba reta, felpudo, five panel, etiqueta emborrachada e fecho snapback.',
        detalhes: [
          'Boné masculino',
          'Aba reta',
          'Five panel',
          'Felpudo',
          'Etiqueta frontal emborrachada',
          'Fecho snapback',
          'Tecido: Poliéster'
        ]
      }
    },
    {
      imagem: 'https://img.lojasrenner.com.br/item/601842844/large/3.jpg',
      titulo: 'Boné Aba Curva Em Suedine 6 Panel Rosa Claro',
      preco: '59.90',
      descricao: {
        texto: 'Boné aba curva, 6 panel. Leve, prático e cheio de estilo este é aquele acessório curinga capaz de dar impacto  em todos as suas combinações.',
        detalhes: [
          'Boné masculino',
          'Aba curva',
          '6 panel',
          'Sem estampa',
          'Marca: Viko',
          'Tecido: Suedine',
          'Composição: 100% Poliéster'
        ]
      }
    },
    {
      imagem: 'https://img.lojasrenner.com.br/item/670266721/large/3.jpg',
      titulo: 'Boné Aba Curva Em Algodão Com Estampa De Ursinhos Bege',
      preco: '59.90',
      descricao: {
        texto: 'O boné aba curva com estampa de ursinhos, oferece ao visual um estilo descontraído e casual. O acessório agrega um toque urbano e jovial, perfeito para complementar seus looks para usar em diversos momentos.',
        detalhes: [
          'Boné masculino',
          'Aba curva',
          '06 panel',
          'Estampa de ursinhos',
          'Snapback',
          'Material Sustentável',
          'Tecido: Algodão'
        ]
      }
    },
    {
      imagem: 'https://img.lojasrenner.com.br/item/673250291/large/3.jpg',
      titulo: 'Boné Aba Curva Em Algodão Com Bordado Summer Vacation Off White',
      preco: '69.90',
      descricao: {
        texto: 'Boné aba curva em algodão, com bordado frontal "summer vacation" e ajuste na parte traseira.',
        detalhes: [
          'Boné feminino',
          'Modelo aba curva',
          'Com bordado frontal',
          'Processo Sustentável',
          'Material: Algodão'
        ]
      }
    },
    {
      imagem: 'https://img.lojasrenner.com.br/item/625200521/large/1.jpg',
      titulo: 'Boné Com Aba Curva E Estampa Refletiva Em Lettering Do Not Give Up Preto',
      preco: '59.90',
      descricao: {
        texto: 'Boné com aba curva e estampa na lateral escrita "Do Not Give Up". Que tal aliar proteção e conforto com muito estilo e um toque todo especial de personalidade? O modelo é perfeito para dias de sol. Use na praia, piscina ou em qualquer outro passeio ao ar livre e arrase no look.',
        detalhes: [
          'Boné feminino',
          'Com aba curva',
          'Detalhe contrastante na aba',
          'Estampa refletiva',
          'Lettering "Do Not Give Up"',
          'Detalhe em tela na parte de cima',
          'Marca: Accessories',
          'Material: Poliéster',
          'Composição: 100% Poliéster'
        ]
      }
    },
    {
      imagem: 'https://img.lojasrenner.com.br/item/817849560/large/3.jpg',
      titulo: 'Boné Aba Curva Em Sarja Com 06 Panel E Bordado NY Bege',
      preco: '69.90',
      descricao: {
        texto: 'Boné masculino, com aba curva, 06 panel, bordado NY e fechamento strapback.',
        detalhes: [
          'Boné masculino',
          'Aba curva',
          '06 panel',
          'Bordado NY',
          'Fechamento strapback',
          'Tecido: Sarja'
        ]
      }
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
              key={product.imagem}
              imageURL={product.imagem}
              title={product.titulo}
              price={product.preco}
              delayToAppear={(index + 1) * 120}
            />
          ))
        }
      </CardsContainer>
    </VitrineSection>
  )
}

export default Vitrine;