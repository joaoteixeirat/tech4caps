import React from "react";

import VitrineContainer from "./VitrineContainer";
import Carregando from "../../Components/Carregando/Carregando";
import Card from "../../Components/Card/Card";

class Vitrine extends React.Component {
    
  constructor(props){

    super(props);
    this.state = { produtos : [], carregando : true };
  };

  componentDidMount(){

    fetch('https://644f06e0b61a9f0c4d1b1e80.mockapi.io/produtos')
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
                urlDaImagem={imagem}
                titulo={titulo}
                preco={preco}
                delayDeAparicao={(index + 1) * 120}
              />
            )
          )
        }
      </VitrineContainer>
    );
  };
};

export default Vitrine;