import React, { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";

const Menu = () => {
  const [menu, setMenu] = useState(fakeMenu2);

  return <MenuStyled>
    {menu.map(product => <div className="product" key={product.id}>{product.title}</div>)}
  </MenuStyled>;
};

export default Menu;

const MenuStyled = styled.div`
  background: purple;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;

  .product {
    width: 240px;
    height: 330px;
    background: lightblue;
  }
`;
