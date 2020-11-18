import styled from 'styled-components';
import { Element } from 'react-scroll';
import { Link } from 'react-router-dom';

export const NavHomeStyled = styled(Element)`
  width: 65%;
  height: 150px;
  margin: 50px auto;
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const NavButton = styled(Link)`
  font-weight: 300;
  color: rgb(214, 214, 214);
  text-decoration: none;
  font-size: 35px;
  opacity: .6;
  transition: all .2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;
