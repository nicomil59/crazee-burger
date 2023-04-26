import React from "react";
import styled from "styled-components";
import Profile from "./Profile";

const NavbarRightSide = ({ username }) => {
  return (
    <NavbarRightSideStyled>
      {/* <div className="admin-button">Admin Button</div> */}
      <Profile username={username} />
    </NavbarRightSideStyled>
  );
};

export default NavbarRightSide;

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;

  /* .admin-button {
    background-color: lightblue;
  } */

  
`;
