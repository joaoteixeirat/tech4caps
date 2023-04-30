import React, { useEffect, useState } from "react";

import VitrineContainer from "./VitrineContainer";
import Carregando from "../../Components/Carregando/Carregando";
import Card from "../../Components/Card/Card";

class Vitrine extends React.Component {
    
  constructor(props){

    super(props);
    this.state = { produtos : [], carregando : true };
  };

  componentDidMount(){

    fetch('http://localhost:3000/produtos')
    .then(res => res.json())
    .then(data => this.setState({ produtos: data, carregando: false }))
  };

  render(){

    const { produtos, carregando } = this.state;

    return (
      <VitrineContainer>
        { 
          carregando ? <Carregando /> :
          produtos.map(
            ({id, imagem, titulo, preco},index) => (
              <Card
                key={imagem}
                id={id}
                imageURL={imagem}
                title={titulo}
                price={preco}
                delayToAppear={(index + 1) * 120}
              />
            )
          )
        }
      </VitrineContainer>
    );
  };
};

export default Vitrine;