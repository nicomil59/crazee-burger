import styled from "styled-components";

const Input = ({ value, onChange, Icon, ...extraProps }) => {
  return (
    <InputStyled>
      {Icon && Icon}
      <input type="text" value={value} onChange={onChange} {...extraProps} />
    </InputStyled>
  );
};

export default Input;

const InputStyled = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

  .icon {
    font-size: 15px;
    margin-right: 8px;
    color: #93a2b1;
  }

  input {
    border: none;
    font-size: 15px;
    color: #17161a;
  }

  &::placeholder {
    background: #000;
    color: lightgrey;
  }
`;
