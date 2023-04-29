import styled from "styled-components";
import IconButton from "../Components/Buttons/IconButton";
import CommonButton from "../Components/Buttons/CommonButton";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import QuantitySelect from "../Components/quantitySelect";

const DetailsSection = styled.section`

  width: 100vw;
  height: calc(100vh - 100px);
  background-color: rgba(22, 21, 21, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  color: white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  .product-container{
    
    height: inherit;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;

    &:hover > .decription-of-product{

      left: 0;
    }

    span{

      background: rgba( 0, 0, 0, 0.35 );
      position: absolute;
      width: 20px;
      height: 100px;
      border-radius: 0 10px 10px 0;
      display: grid;
      place-items: center;
      backdrop-filter: blur( 8.5px );
      -webkit-backdrop-filter: blur( 8.5px );
      transition: left 0.5s ease;
      left: 0;
    }

    &:hover > span{

      left: 100%;
    }

  }

  .decription-of-product{
    
    width: 100%;
    background: rgba( 255, 255, 255, 0.35 );
    position: absolute;
    height: 80%;
    padding: 30px 50px;
    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    left: -100%;
    transition: left 0.5s ease;
    backdrop-filter: blur( 8.5px );
    -webkit-backdrop-filter: blur( 8.5px );
    color: black;
  }

  .info-container{

    width: 30%;
    max-width: 410px;
    min-width: 220px;
    padding-bottom: 50px;
    display: flex;
    justify-self: start;
    align-items: start;
    flex-direction: column;
    gap: 30px;

    p{
      font-weight: bold;
    }

    .color{

      width: 30px;
      height: 30px;
      background-color: beige;
      border-radius: 50%;
      border: 2px solid darkgray;
    }

    .buttons-container, .color-container, .quantity-container{

      display: flex;
      align-items: center;
      gap: 20px;
    }
  }
`

function Detalhes() {
  
  const { id } = useParams();

  const [ produto, setProduto ] = useState({});

  useEffect(() => {

    fetch(`http://localhost:3000/produtos/${id}`)
    .then(res => res.json())
    .then(data => setProduto(data))

  },[])

  const { imagem, titulo, preco, descricao } = produto;

  return (
    
    produto.imagem && 
    <DetailsSection>

      <div className="product-container">
        <div className="decription-of-product">
          <p>{descricao.texto}</p>
          <ul>
            {
              descricao.detalhes.map((detalhe) => <li key={detalhe}>{detalhe}</li>)
            }
          </ul>
        </div>
        <span><i class="fa-solid fa-chevron-right"></i></span>
        <img src={imagem} height={'80%'}/>
      </div>

      <div className="info-container">
        <h1>{titulo}</h1>
        <p>R$ {preco}</p>
        
        <div className="color-container">
          <p>Cor: Bege </p>
          <span className="color"></span>
        </div>

        <div className="quantity-container">
          <p>Qtd:</p>
          <QuantitySelect min={1} max={5} />
        </div>

        <div className="buttons-container">
          <CommonButton text={'Comprar'}/>
          <IconButton variant={'heart'} $detail/>
        </div>
      </div>

    </DetailsSection>
  )
}

export default Detalhes;