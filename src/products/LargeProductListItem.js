export const LargeProductListItem = ({ product }) => {
  const { name, price, description, rating } = product;
  return (
    <>
      <h3>Name: {name}</h3>
      <p>Price: {price} years</p>
      <h3>Description: {description}</h3>
      <h3>Ratins: {rating}</h3>
    </>
  );
};
