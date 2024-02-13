import styled from "styled-components";
import { theme } from "../../../../../theme";

const AdminPanel = () => {
  return (
    <AdminPanelStyled></AdminPanelStyled>
  )
}

export default AdminPanel;

const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;