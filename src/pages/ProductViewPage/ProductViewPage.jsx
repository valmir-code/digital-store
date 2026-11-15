import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout.jsx';
import Gallery from '../../components/Gallery/Gallery.jsx';
import BuyBox from '../../components/BuyBox/BuyBox.jsx';
import ProductOptions from '../../components/ProductOptions/ProductOptions.jsx';
import Section from '../../components/Section/Section.jsx';
import ProductListing from '../../components/ProductListing/ProductListing.jsx';
import { productsData } from '../../data/products.js';
import './ProductViewPage.css';

export default function ProductViewPage() {
  const { id } = useParams();

  // pega o produto pelo id ou o primeiro da lista
  let produto = productsData.find((item) => item.id === Number(id));
  if (!produto) {
    produto = productsData[0];
  }

  // tamanhos e cores para escolher
  const tamanhos = ['39', '40', '41', '42', '43'];
  const cores = ['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7'];

  // 4 produtos recomendados
  const recomendados = productsData.slice(0, 4);

  return (
    <Layout>
      <div className="product-view-page container">
        {/* caminho de onde esta */}
        <div className="product-breadcrumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/products">Produtos</Link>
          <span>/</span>
          <Link to="/products">Tênis</Link>
          <span>/</span>
          <span>{produto.name}</span>
        </div>

        {/* fotos e detalhes da compra */}
        <div className="product-view-main">
          <div className="product-view-gallery-area">
            <Gallery
              images={produto.images}
              showThumbs
              width="700"
              height="570"
              radius="4px"
            />
          </div>

          <div className="product-view-buybox-area">
            <BuyBox
              name={produto.name}
              reference={produto.reference}
              stars={produto.stars}
              rating={produto.rating}
              price={produto.price}
              priceDiscount={produto.priceDiscount}
              description={produto.description}
            >
              <h5 className="option-group-title">Tamanho</h5>
              <ProductOptions
                options={tamanhos}
                shape="square"
                radius="4px"
                type="text"
              />

              <h5 className="option-group-title">Cor</h5>
              <ProductOptions
                options={cores}
                shape="circle"
                type="color"
              />
            </BuyBox>
          </div>
        </div>

        {/* produtos recomendados no final */}
        <Section
          title="Produtos recomendados"
          titleAlign="left"
          link={{ text: 'Ver todos', href: '/products' }}
        >
          <ProductListing products={recomendados} columns={4} />
        </Section>
      </div>
    </Layout>
  );
}
