import styled from "styled-components";
import { theme } from "../../theme";

const TextInput = ({ value, onChange, Icon, className, ...extraProps }) => {
  return (
    <InputStyled className={className}>
      <div className="icon">{Icon && Icon}</div>
      <input type="text" value={value} onChange={onChange} {...extraProps} />
    </InputStyled>
  );
};

export default TextInput;

const InputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  /* margin: 18px 0; */

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.SM};
    margin: 0 8px 0 10px; 
    color: ${theme.colors.greySemiDark};
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 100%;

    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
  }
`;
