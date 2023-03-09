import React, { useState } from 'react'

const LoginForm = () => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Bonjour ${inputValue}`);
      setInputValue("");
    };
  
    const handleChange = (e) => {
      setInputValue(e.target.value);
    };
  
    return (
    <form onSubmit={handleSubmit}>
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
    </form>
  )
}

export default LoginForm