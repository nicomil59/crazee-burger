import React, { useState } from "react";
import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { toast } from "react-toastify";
import ToastAdmin from "./ToastAdmin";

const NavbarRightSide = ({ username }) => {
  
  const [isModeAdmin, setIsModeAdmin] = useState(false);  
  
  const displayToastNotification = () => {

    if(!isModeAdmin) {
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    setIsModeAdmin(!isModeAdmin);

  };

  return (
    <NavbarRightSideStyled>
      <ToggleButton
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        onToggle={displayToastNotification}
      />
      <Profile username={username} />
      <ToastAdmin />
    </NavbarRightSideStyled>
  );
};

export default NavbarRightSide;

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
`;
