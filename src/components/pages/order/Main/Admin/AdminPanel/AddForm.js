import React, { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";

const AddForm = () => {
  // State

  const { handleAdd } = useContext(OrderContext);

  const [title, setTitle] = useState("");
  const [imageSource, setImageSource] = useState("");
  const [price, setPrice] = useState(0);

  // Comportements

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: new Date().getTime(),
      title: title,
      imageSource: imageSource,
      price: price
    };

    handleAdd(newProduct);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImageSourceChange = (e) => {
    setImageSource(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  // Affichage

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">Aucune image</div>
      <div className="input-fields">
        <input
          onChange={handleTitleChange}
          value={title}
          type="text"
          placeholder="Nom"
        />
        <input
          onChange={handleImageSourceChange}
          value={imageSource}
          type="text"
          placeholder="Image Url"
        />
        <input
          onChange={handlePriceChange}
          value={price ? price : ""}
          type="text"
          placeholder="Prix"
        />
      </div>
      <button className="submit-button">Submit button</button>
    </AddFormStyled>
  );
};

export default AddForm;

const AddFormStyled = styled.form`
  border: 2px solid black;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;

  .image-preview {
    background: red;
    grid-area: 1 / 1 / 4 / 2;
  }
  .input-fields {
    background: blue;
    grid-area: 1 / 2 / 4 / 3;
    display: grid;
  }
  .submit-button {
    background: green;
    grid-area: 4 / 2 / 5 / 3;
    width: 50%;
  }
`;
