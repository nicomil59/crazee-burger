const EmptyMenuAdmin = ({ onReset }) => {
  return (
    <div>
      <span>Pas de produit</span>
      <button onClick={onReset}>Regénérer menu</button>
    </div>
  );
};

export default EmptyMenuAdmin;
