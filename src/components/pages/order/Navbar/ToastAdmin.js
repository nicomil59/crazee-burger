import { ToastContainer } from "react-toastify";
import { theme } from "../../../../theme";
import styled from "styled-components";

import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

const ToastAdmin = () => {
  return (
    <ToastAdminStyled>
      <ToastContainer className="toaster" bodyClassName="body-toast" />
    </ToastAdminStyled>
  );
};

export default ToastAdmin;

const ToastAdminStyled = styled.div`
  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
