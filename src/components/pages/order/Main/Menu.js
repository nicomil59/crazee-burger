import React, { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme";
import Product from "./Product";

const Menu = () => {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled>
      {menu.map((product) => {
        return (
          // <Product
          //   title={product.title}
          //   imageSource={product.imageSource}
          //   price={product.price}
          //   key={product.id}
          // />
          <Product {...product} key={product.id} />
        );
      })}
    </MenuStyled>
  );
};

export default Menu;

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`;
