import React from "react";

import { useProducts } from "hooks";

import Product from "./product";
import withStyle from "./style";

export const renderItems = (product) => (
  <Product key={product.id} {...product} />
);

export const Products = ({ className }) => {
  const { items } = useProducts();

  return (
    <div className={className}>
      <h1>Products</h1>
      {items.map(renderItems)}
    </div>
  );
};

export default withStyle(Products);
