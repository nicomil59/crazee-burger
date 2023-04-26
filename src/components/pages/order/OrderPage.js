import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import Main from "./Main";

const OrderPage = () => {
  const { username } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar username={username} />
        <Main />
      </div>
    </OrderPageStyled>
  );
};

export default OrderPage;

const OrderPageStyled = styled.div`
  background: orange;
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
  }
`;
