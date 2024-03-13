import { createContext } from "react";

export default createContext({
    isModeAdmin: false,
    setIsModeAdmin: () => {},

    isCollapsed: false,
    setIsCollapsed: () => {},

    currentTabSelected: "",
    setCurrentTabSelected: () => {},    

    menu: [],
    handleAdd: () => {},
    handleDelete: () => {},
});