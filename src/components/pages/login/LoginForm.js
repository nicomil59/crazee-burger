import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginForm = () => {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      setInputValue("");
      navigate(`order/${inputValue}`);
    };
  
    const handleChange = (e) => {
      setInputValue(e.target.value);
    };
  
    return (
    <LoginFormStyled onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Entrez votre prénom..."
        required
      />
      <button>Accédez à votre espace</button>
    </LoginFormStyled>
  )
}

export default LoginForm

const LoginFormStyled = styled.form`
  background: olive;
`;