import styled from "styled-components";
import IconButton from "../Components/Buttons/IconButton";
import CommonButton from "../Components/Buttons/CommonButton";

const DetailsSection = styled.section`

  width: 100vw;
  height: calc(100vh - 100px);
  background-color: rgba(22, 21, 21, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
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

    .expand-details{

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

    &:hover > .expand-details{

      left: 100%;
    }

  }

  .product-container > img{

    height: 80%;
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
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 30px;
    justify-self: start;

    .color{

      width: 40px;
      height: 40px;
      background-color: beige;
      border-radius: 50%;
      border: 2px solid darkgray;
    }

    .buttons-container{

      display: flex;
      align-items: center;
      gap: 20px;
    }
  }
`

function Detalhes() {
  
  return (
    
    <DetailsSection>

      <div className="product-container">
        <div className="decription-of-product">
          <p>
            O boné aba curva com cordão e patch emborrachado de coqueiro, é o acessório certo para complementar seus visuais informais e descolados. O modelo além de oferece proteção ao rosto, garante um estilo jovial e esportivo
          </p>

          <ul>
            <li>Boné masculino</li>
            <li>Aba curva</li>
            <li>06 panel</li>
            <li>Patch emborrachado de coqueiro</li>
            <li>Detalhe cordão trançado</li>
            <li>Fechamento com velcro</li>
            <li>Material Sustentável</li>
            <li>Tecido: Algodã</li>
          </ul>
        </div>
        <div className="expand-details">
          <i class="fa-solid fa-chevron-right"></i>
        </div>
        <img src='https://img.lojasrenner.com.br/item/670277658/large/3.jpg'/>
      </div>

      <div className="info-container">
        <h1>
          Boné Aba Curva Em Algodão Com Cordão E Patch De Coqueiro Branco
        </h1>
        <p>
          <strong>R$ 79,90</strong>
        </p>
        <p>
          Cor: Bege
        </p>
        <div className="color"></div>

        <div className="buttons-container">
          <CommonButton text={'Comprar'}/>
          <IconButton variant={'heart'} $detail/>
        </div>
      </div>

    </DetailsSection>
  )
}

export default Detalhes;