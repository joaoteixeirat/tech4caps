import styled from "styled-components";

const StyledLink = styled.a`

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

const Link = ({title, href}) => {

  return(

    <StyledLink href={href}>
      {title}
    </StyledLink>
  )
}

export default Link;