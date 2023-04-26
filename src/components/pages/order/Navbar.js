import React from "react";
import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import Logo from "../../reusable-ui/Logo";

const Navbar = ({ username }) => {
  return (
    <NavbarStyled>
      <Logo />
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
  padding: 0 20px;
  /* align-items: center; */
`;
