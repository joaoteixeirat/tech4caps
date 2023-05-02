import { Link } from 'react-router-dom';

import StyledHeader from './StyledHeader';
import Navbar from '../Navbar/Navbar';

const Header = () => {

  return (
    <StyledHeader>

      <Navbar />

      <h1>
        <Link to={'/'}>
          tech4caps
        </Link>
      </h1>

    </StyledHeader>
  );
};

export default Header;