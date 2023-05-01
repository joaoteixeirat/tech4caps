import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import DetalhesContainer from "./DetalhesContainer";
import IconButton from "../../Components/Buttons/IconButton";
import CommonButton from "../../Components/Buttons/CommonButton";
import QuantitySelect from "../../Components/QuantitySelect/QuantitySelect";

function Detalhes() {
  
  const { id } = useParams();

  const [ produto, setProduto ] = useState({});

  const { imagem, titulo, color, cor, preco, estoque, descricao } = produto;

  useEffect(() => {

    fetch(`https://644f06e0b61a9f0c4d1b1e80.mockapi.io/produtos/${id}`)
    .then(res => res.json())
    .then(data => setProduto(data))

  },[]);

  return (
    
    produto.imagem && 
    <DetalhesContainer>
      <div className="product-container">
        <div className="decription-of-product">
          <p>{descricao.texto}</p>
          <ul>
            { descricao.detalhes.map((detalhe) => <li key={detalhe}>{detalhe}</li>) }
          </ul>
        </div>

        <span><i class="fa-solid fa-chevron-right"></i></span>
        <img src={imagem} height={'80%'}/>
      </div>

      <div className="info-container">
        <h1>{titulo}</h1>
        <p>R$ {preco}</p>
        
        <div className="color-container">
          <p>Cor: {cor} </p>
          <span className="color" style={{backgroundColor: color}}></span>
        </div>

        <div className="quantity-container">
          <p>Qtd:</p>
          <QuantitySelect min={1} max={estoque} />
        </div>

        <div className="buttons-container">
          <CommonButton text={'Comprar'}/>
          <IconButton variant={'heart'} $detail/>
        </div>
      </div>
    </DetalhesContainer>
  )
}

export default Detalhes;