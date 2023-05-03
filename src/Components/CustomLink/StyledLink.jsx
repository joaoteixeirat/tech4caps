import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`

  text-decoration: none;
  color: white;
  cursor: pointer;
  z-index: 1;
  font-size: 18px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: end;

  &::after{

    content: '';
    width: 0%;
    height: 1px;
    background: #ffffff;
    position: absolute;
    transition: width 0.3s ease;
  }

  &:hover::after{

    width: 100%;
  }
`

export default StyledLink;