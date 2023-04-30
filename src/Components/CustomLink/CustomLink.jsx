import StyledLink from "./StyledLink";

const CustomLink = ({title, to}) => {

  return(
    <StyledLink to={to}>
      {title}
    </StyledLink>
  )
}

export default CustomLink;