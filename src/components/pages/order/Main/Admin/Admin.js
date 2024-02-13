import styled from "styled-components";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";
import { useState } from "react";

const Admin = () => {
  
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  return (
    <AdminStyled>
      <AdminTabs isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  );
};

export default Admin;

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
