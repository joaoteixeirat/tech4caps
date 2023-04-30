import { useEffect, useState } from "react";

import VitrineContainer from "./VitrineContainer";
import Card from "../../Components/Card/Card";

function Vitrine() {
    
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {

    fetch('http://localhost:3000/produtos')
    .then(res => res.json())
    .then(data => setProdutos(data))

  },[])

  return (
  
    <VitrineContainer>
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
    </VitrineContainer>
  )
}

export default Vitrine;