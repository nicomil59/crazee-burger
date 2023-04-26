import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = ({ username }) => {
  return (
    <NavbarStyled>
      <div className="left-side">LEFT</div>
      <div className="right-side">
        RIGHT
        <h1>Bonjour {username}</h1>
        <Link to="/">
          <button>Déconnexion</button>
        </Link>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;

const NavbarStyled = styled.nav`
  background-color: blue;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */

  .left-side {
    background: yellow;
  }

  .right-side {
    background: olive;
  }
`;
