import styled from "styled-components";

const Product = ({ title, imageSource, price }) => {
  return (
    <ProductStyled>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="info-text">
        <div className="title">{title}</div>
        <div className="description">
          <div className="price">{price}</div>
          <button className="add-button">Ajouter</button>
        </div>
      </div>
    </ProductStyled>
  );
};

export default Product;

const ProductStyled = styled.div`
  width: 240px;
  height: 330px;
  background: lightblue;

  .image {
    border: 1px solid fuchsia;
    width: 100px;
    height: auto;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .description {
    border: 1px solid fuchsia;
  }
`;
