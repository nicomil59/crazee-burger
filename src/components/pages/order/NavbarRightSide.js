import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarRightSide = ({ username }) => {
  return (
    <NavbarRightSideStyled>
      RIGHT
      <h1>Bonjour {username}</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </NavbarRightSideStyled>
  );
};

export default NavbarRightSide;

const NavbarRightSideStyled = styled.div`
  background: olive;
`;
