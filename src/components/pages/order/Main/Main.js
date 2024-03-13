import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu/Menu";
import Admin from "./Admin/Admin";
import OrderContext from "../../../../context/OrderContext";

const Main = () => {
  
  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext);
  
  return <MainStyled>
    {/* <div className="basket">Basket</div> */}
    <div className="menu-and-admin">
      <Menu />
      {isModeAdmin && <Admin />}
    </div>
  </MainStyled>;
};

export default Main;

const MainStyled = styled.div`
  background-color: ${theme.colors.background_white};
  /* flex: 1; // or you can also use this : height: calc(95vh - 10vh); */
  height: calc(95vh - 10vh);

  border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.strong};

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
  }

`;
