import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";

const AddForm = () => {
  const { handleAdd } = useContext(OrderContext);

  const newProduct = {
    id: new Date().getTime(),
    title: "new product",
    imageSource: "https://petkeen.com/wp-content/uploads/2021/05/grey-cat.jpeg",
    price: 2.5,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(newProduct);
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">ImagePreview</div>
      <div className="input-fields">
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Image Url" />
        <input type="text" placeholder="Prix" />
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
