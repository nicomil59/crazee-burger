import React from "react";
import styled from "styled-components";

const Main = () => {
  return <MainStyled>Main</MainStyled>;
};

export default Main;

const MainStyled = styled.div`
  background-color: green;
  flex: 1; // or you can also use this : height: calc(95vh - 10vh);
`;
