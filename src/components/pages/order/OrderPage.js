import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const OrderPage = () => {
  const { username } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <div className="navbar">
          Navbar
          <h1>Bonjour {username}</h1>
          <Link to="/">
            <button>Déconnexion</button>
          </Link>
        </div>
        <div className="main">Main</div>
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

    .navbar {
      background-color: blue;
      height: 10vh;
    }

    .main {
      background-color: green;
      flex: 1; // or you can also use this : height: calc(95vh - 10vh);
    }
  }
`;
