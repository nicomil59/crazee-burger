import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";

const OrderPage = () => {
  //state
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);

  const handleAdd = newProduct => {
    
    //1. copie du tableau
    const menuCopy = [...menu];

    //2. manip de la copie du tableau
    const menuUpdated = [newProduct, ...menuCopy];

    //3. maj du state
    setMenu(menuUpdated);
  }

  const handleDelete = productId => {
    
    //1. copie du tableau
    const menuCopy = [...menu];

    //2. manip de la copie du tableau
    const menuUpdated = menuCopy.filter(product => product.id !== productId);

    //3. maj du state
    setMenu(menuUpdated);
  }

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAdd,
    handleDelete
  };

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
};

export default OrderPage;

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    width: 1400px;
    height: 95vh;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
