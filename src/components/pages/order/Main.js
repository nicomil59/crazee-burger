import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

const Main = () => {
  return <MainStyled>
    <div className="basket">Basket</div>
    <div className="menu">Menu</div>
  </MainStyled>;
};

export default Main;

const MainStyled = styled.div`
  background-color: ${theme.colors.background_white};
  flex: 1; // or you can also use this : height: calc(95vh - 10vh);
  border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  grid-template-columns: 25% 1fr;

  .basket {
    background: pink;
  }
  
  .menu {
    background: purple;
  }
`;
