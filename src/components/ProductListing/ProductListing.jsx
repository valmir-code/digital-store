import React from 'react';
import ProductCard from '../ProductCard/ProductCard.jsx';
import './ProductListing.css';

export default function ProductListing(props) {
  const lista = props.products || [];

  return (
    <div className="product-listing">
      {lista.map(function(produto, index) {
        return (
          <ProductCard
            key={index}
            id={produto.id}
            name={produto.name}
            image={produto.image}
            price={produto.price}
            priceDiscount={produto.priceDiscount}
            category={produto.category}
            discountPercent={produto.discountPercent}
          />
        );
      })}
    </div>
  );
}
