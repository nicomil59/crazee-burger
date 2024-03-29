import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { tabsConfig, getTabSelected } from "./tabsConfig";

const AdminPanel = () => {
  const { currentTabSelected } = useContext(OrderContext);

  const tabs = tabsConfig;
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return <AdminPanelStyled>{tabSelected.label}</AdminPanelStyled>;
};

export default AdminPanel;

const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
