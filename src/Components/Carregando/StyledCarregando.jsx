import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const girar = keyframes`
  0%{
    transform: rotate(360deg);
  }
`

const StyledCarregando = styled.div`

  width: 100px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  .quadrado{

    width: inherit;
    height: inherit;
    position: absolute;
    animation: ${girar} 2s infinite;
  }

  .bola{

    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
  }

  .um{

    animation-delay: 0s;
  }
  .dois{

    animation-delay: 0.2s;
  }
  .tres{

    animation-delay: 0.4s;
  }
  .quatro{

    animation-delay: 0.6s;
  }
  .cinco{

    animation-delay: 0.8s;
  }
  .seis{

    animation-delay: 1s;
  }
`;

export default StyledCarregando;