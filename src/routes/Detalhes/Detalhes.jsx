import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import DetalhesContainer from "./DetalhesContainer";
import BotaoDeCoracao from "../../Components/Botoes/BotaoDeCoracao";
import BotaoPadrao from "../../Components/Botoes/BotaoPadrao";
import SeletorDeQuantidade from "../../Components/SeletorDeQuantidade/SeletorDeQuantidade";

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
      <div className="container-produto">
        <div className="descricao-produto">
          <p>{descricao.texto}</p>
          <ul>
            { descricao.detalhes.map((detalhe) => <li key={detalhe}>{detalhe}</li>) }
          </ul>
        </div>

        <span><i className="fa-solid fa-chevron-right"></i></span>
        <img src={imagem} height={'80%'}/>
      </div>

      <div className="info-container">
        <h1>{titulo}</h1>
        <p>R$ {preco}</p>
        
        <div className="color-container">
          <p>Cor: {cor} </p>
          <span className="color" style={{backgroundColor: color}}></span>
        </div>

        <div className="container-quantidade">
          <p>Qtd:</p>
          <SeletorDeQuantidade min={1} max={estoque} />
        </div>

        <div className="container-botoes">
          <BotaoPadrao texto={'Comprar'}/>
          <BotaoDeCoracao />
        </div>
      </div>
    </DetalhesContainer>
  )
}

export default Detalhes;