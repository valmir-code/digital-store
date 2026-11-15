import React, { useState } from 'react';
import './ProductOptions.css';

export default function ProductOptions({
  options = [],
  radius = '4px',
  shape = 'square',
  type = 'text',
}) {
  // guarda qual opcao ta selecionada
  const [selecionado, setSelecionado] = useState(0);

  return (
    <div className="product-options">
      {options.map((item, index) => {
        // opcao de cor redonda
        if (shape === 'circle') {
          return (
            <button
              key={index}
              type="button"
              className={selecionado === index ? 'product-option-circle selected' : 'product-option-circle'}
              style={{ backgroundColor: item }}
              onClick={() => setSelecionado(index)}
            />
          );
        }

        // opcao quadrada de tamanho
        return (
          <button
            key={index}
            type="button"
            className={selecionado === index ? 'product-option-square selected' : 'product-option-square'}
            style={{ borderRadius: radius }}
            onClick={() => setSelecionado(index)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
