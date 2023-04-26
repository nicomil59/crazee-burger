import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = ({ username }) => {
  return (
    <NavbarStyled>
      Navbar
      <h1>Bonjour {username}</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </NavbarStyled>
  );
};

export default Navbar;

const NavbarStyled = styled.nav`
  background-color: blue;
  height: 10vh;
`;
