import React from "react";
import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";

const Navbar = ({ username }) => {
  return (
    <NavbarStyled>
      <div className="left-side">LEFT</div>
      <NavbarRightSide username={username} />
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
`;
