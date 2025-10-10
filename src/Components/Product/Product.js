import React from "react";
import product from "../../product";
const Product = () => {
  return (
    <div>
      {product.name}
      <h2>{product.price}</h2>
    </div>
  );
};

export default Product;
