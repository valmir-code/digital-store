import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

export default function ProductCard(props) {
  // se tiver desconto mostra o preco riscado
  const temDesconto = props.priceDiscount !== undefined && props.priceDiscount !== null;

  return (
    <Link to={'/product/' + props.id} className="product-card">
      <div className="product-card-image-box">
        {props.discountPercent && (
          <span className="product-card-badge">{props.discountPercent}% OFF</span>
        )}
        <img
          src={props.image}
          alt={props.name}
          className="product-card-image"
        />
      </div>

      <div className="product-card-info">
        <span className="product-card-category">{props.category || 'Tênis'}</span>
        <h3 className="product-card-name">{props.name}</h3>
        
        <div className="product-card-prices">
          {temDesconto ? (
            <>
              <span className="product-card-price-old">${props.price}</span>
              <span className="product-card-price">${props.priceDiscount}</span>
            </>
          ) : (
            <span className="product-card-price">${props.price}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
