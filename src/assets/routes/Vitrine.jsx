import styled from "styled-components";
import Card from "../Components/Card";
import { useEffect, useState } from "react";

const CardsContainer = styled.div`

  width: 100vw;
  height: calc(100vh - 100px);
  background-color: rgba(22, 21, 21, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  padding: 40px;
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

function Vitrine() {
    
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {

    fetch('http://localhost:3000/produtos')
    .then(res => res.json())
    .then(data => setProdutos(data))

  },[])

  return (
  
    <CardsContainer>
      { produtos.length ?
        produtos.map(({id, imagem, titulo, preco},index) => (

          <Card
            key={imagem}
            id={id}
            imageURL={imagem}
            title={titulo}
            price={preco}
            delayToAppear={(index + 1) * 120}
          />
        ))
        :
        <h1>Carregando...</h1>
      }
    </CardsContainer>
  )
}

export default Vitrine;