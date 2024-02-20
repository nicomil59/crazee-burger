import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { theme } from "../../../../../theme";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import OrderContext from "../../../../../context/OrderContext";
import { useContext } from "react";
import { tabsConfig } from "./tabsConfig";

const AdminTabs = () => {
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(OrderContext);

  const selectTab = (tabSelected) => {
    setIsCollapsed(false); // ouvre panel
    setCurrentTabSelected(tabSelected); // actualise onglet sélectionné
  };

  const tabs = tabsConfig;

  return (
    <AdminTabsStyled>
      <Tab
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      {tabs.map((tab) => (
        <Tab
          key={tab.index}
          label={tab.label}
          Icon={tab.Icon}
          onClick={() => selectTab(tab.index)}
          className={currentTabSelected === tab.index ? "is-active" : ""}
        />
      ))}
    </AdminTabsStyled>
  );
};

export default AdminTabs;

const AdminTabsStyled = styled.div`
  display: flex;

  .is-active {
    background: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }

  button {
    margin-left: 1px;
  }
`;
