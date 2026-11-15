import React, { useState } from 'react';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import './Gallery.css';

export default function Gallery(props) {
  // estado para controlar qual imagem esta aparecendo
  const [imagemAtual, setImagemAtual] = useState(0);

  const images = props.images || [];

  function passarFoto() {
    if (imagemAtual < images.length - 1) {
      setImagemAtual(imagemAtual + 1);
    }
  }

  function voltarFoto() {
    if (imagemAtual > 0) {
      setImagemAtual(imagemAtual - 1);
    }
  }

  if (images.length === 0) {
    return null;
  }

  return (
    <div
      className="gallery"
      style={{ maxWidth: props.width ? props.width + 'px' : '100%' }}
    >
      <div
        className="gallery-main"
        style={{
          height: props.height ? props.height + 'px' : 'auto',
          borderRadius: props.radius || '0px',
        }}
      >
        <button
          type="button"
          className="gallery-arrow gallery-arrow-left"
          onClick={voltarFoto}
          disabled={imagemAtual === 0}
        >
          <img src={arrowLeft} alt="Voltar" />
        </button>

        <img
          src={images[imagemAtual].src}
          alt="Foto do produto"
          className="gallery-slide-image"
          style={{ borderRadius: props.radius || '0px' }}
        />

        <button
          type="button"
          className="gallery-arrow gallery-arrow-right"
          onClick={passarFoto}
          disabled={imagemAtual === images.length - 1}
        >
          <img src={arrowRight} alt="Avancar" />
        </button>

        {/* bolinhas indicadoras */}
        <div className="gallery-indicators">
          {images.map((item, index) => (
            <button
              key={index}
              type="button"
              className={index === imagemAtual ? 'gallery-dot active' : 'gallery-dot'}
              onClick={() => setImagemAtual(index)}
            />
          ))}
        </div>
      </div>

      {/* miniaturas se tiver showThumbs */}
      {props.showThumbs && (
        <div className="gallery-thumbs">
          {images.map((img, index) => (
            <button
              key={index}
              type="button"
              className={index === imagemAtual ? 'gallery-thumb-btn active' : 'gallery-thumb-btn'}
              style={{ borderRadius: props.radius || '0px' }}
              onClick={() => setImagemAtual(index)}
            >
              <img src={img.src} alt="Miniatura" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
