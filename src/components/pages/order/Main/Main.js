import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";

const Main = () => {
  return <MainStyled>
    {/* <div className="basket">Basket</div> */}
    <div className="menu-and-admin">
      <Menu />
      <div className="admin">Admin</div>
    </div>
  </MainStyled>;
};

export default Main;

const MainStyled = styled.div`
  border: 3px solid green;
  
  background-color: ${theme.colors.background_white};
  /* flex: 1; // or you can also use this : height: calc(95vh - 10vh); */
  height: calc(95vh - 10vh);

  border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  /* grid-template-columns: 25% 1fr; */
  grid-template-columns: 1fr;

  /* overflow-y: auto; */  

  /* .basket {
    background: pink;
  } */

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};

    .admin {
      background: red;
      height: 250px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }

`;
