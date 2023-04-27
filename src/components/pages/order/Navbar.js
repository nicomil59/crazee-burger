import React from "react";
import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import Logo from "../../reusable-ui/Logo";
import { theme } from "../../../theme";

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
  background: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0 0;
  /* align-items: center; */
`;
