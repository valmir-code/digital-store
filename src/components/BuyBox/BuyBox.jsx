import React from 'react';
import './BuyBox.css';
import starIcon from '../../assets/star-icon.svg';

export default function BuyBox(props) {
  const temDesconto = props.priceDiscount !== undefined && props.priceDiscount !== null;

  return (
    <div className="buy-box">
      <h1 className="buy-box-name">{props.name}</h1>
      <p className="buy-box-reference">{props.reference}</p>

      {/* estrelas de avaliacao */}
      <div className="buy-box-rating-wrapper">
        <div className="buy-box-stars-badge">
          <span>{props.stars}</span>
          <img src={starIcon} alt="Estrela" width="14" height="14" />
        </div>
        <span className="buy-box-rating-count">({props.rating} avaliações)</span>
      </div>

      {/* precos */}
      <div className="buy-box-price-container">
        {temDesconto ? (
          <>
            <span className="buy-box-price-discount">${props.priceDiscount}</span>
            <span className="buy-box-price-original">${props.price}</span>
          </>
        ) : (
          <span className="buy-box-price-discount">${props.price}</span>
        )}
      </div>

      <div className="buy-box-description-box">
        <h4 className="buy-box-section-title">Descrição do produto</h4>
        <p className="buy-box-description">{props.description}</p>
      </div>

      {/* tamanhos e cores passados como filhos */}
      {props.children}

      <button type="button" className="buy-box-buy-btn">
        COMPRAR
      </button>
    </div>
  );
}
