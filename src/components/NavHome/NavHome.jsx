import React from 'react';

import {
  NavHomeStyled,
  NavButton,
} from './NavHome.style';

const NavHome = () => (
  <NavHomeStyled name="NavHome">
    <NavButton to="/maison">
      O Maison
    </NavButton>
    <NavButton>
      A Nanopele
    </NavButton>
    <NavButton>
      Contato
    </NavButton>
  </NavHomeStyled>
);

export default NavHome;
