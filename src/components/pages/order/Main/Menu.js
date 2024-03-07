import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Card from "../../../reusable-ui/Card";
import { formatPrice } from "../../../../utils/maths";
import OrderContext from "../../../../context/OrderContext";

const Menu = () => {
  // const [menu, setMenu] = useState(fakeMenu.MEDIUM);

  const {menu} = useContext(OrderContext);

  return (
    <MenuStyled>
      {menu.map(({title, imageSource, price, id}) => {
        return (
          <Card
            title={title}
            imageSource={imageSource}
            leftDescription={formatPrice(price)}
            key={id}
          />
          // <Card {...product} key={product.id} />
        );
      })}
    </MenuStyled>
  );
};

export default Menu;

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  /* grid-template-columns: repeat(4, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.strong};
  overflow-y: scroll;
`;
