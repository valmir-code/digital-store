import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout.jsx';
import Gallery from '../../components/Gallery/Gallery.jsx';
import Section from '../../components/Section/Section.jsx';
import ProductListing from '../../components/ProductListing/ProductListing.jsx';
import { homeSlideImages, productsData } from '../../data/products.js';

// Ícones de coleções
import iconTshirt from '../../assets/icon-tshirt.svg';
import iconPants from '../../assets/icon-pants.svg';
import iconCap from '../../assets/icon-cap.svg';
import iconHeadphone from '../../assets/icon-headphone.svg';
import iconSneaker from '../../assets/icon-sneaker.svg';

import './HomePage.css';

// Lista de categorias/ícones em destaque
const collectionCategories = [
  { name: 'Camisetas', icon: iconTshirt, link: '/products?category=camisetas' },
  { name: 'Calças', icon: iconPants, link: '/products?category=calcas' },
  { name: 'Bonés', icon: iconCap, link: '/products?category=bones' },
  { name: 'Headphones', icon: iconHeadphone, link: '/products?category=headphones' },
  { name: 'Tênis', icon: iconSneaker, link: '/products?category=tenis' },
];

export default function HomePage() {
  return (
    <Layout>
      {/* 5.1 - Slide de Imagens Principal */}
      <Gallery
        width={1440}
        height={681}
        images={homeSlideImages}
      />

      {/* 5.2 - Coleções em destaque (3 cards horizontais) */}
      <Section title="Coleções em destaque" titleAlign="left">
        <div className="featured-collections-grid">
          <Link to="/products" className="featured-collection-card">
            <img src="/collection-1.png" alt="Novo drop Supreme" />
            <div className="featured-collection-overlay">
              <span className="featured-collection-discount">30% OFF</span>
              <h3 className="featured-collection-title">Novo drop Supreme</h3>
              <span className="featured-collection-btn">Comprar</span>
            </div>
          </Link>

          <Link to="/products" className="featured-collection-card">
            <img src="/collection-2.png" alt="Coleção Adidas" />
            <div className="featured-collection-overlay">
              <span className="featured-collection-discount">30% OFF</span>
              <h3 className="featured-collection-title">Coleção Adidas</h3>
              <span className="featured-collection-btn">Comprar</span>
            </div>
          </Link>

          <Link to="/products" className="featured-collection-card">
            <img src="/collection-3.png" alt="Novo Beats Bass" />
            <div className="featured-collection-overlay">
              <span className="featured-collection-discount">30% OFF</span>
              <h3 className="featured-collection-title">Novo Beats Bass</h3>
              <span className="featured-collection-btn">Comprar</span>
            </div>
          </Link>
        </div>
      </Section>

      {/* 5.2.1 - Coleções em destaque (Ícones de categorias) */}
      <Section title="Coleções em destaque" titleAlign="center">
        <div className="featured-icons-list">
          {collectionCategories.map((item, index) => (
            <Link key={index} to={item.link} className="featured-icon-item">
              <div className="featured-icon-circle">
                <img src={item.icon} alt={item.name} />
              </div>
              <span className="featured-icon-name">{item.name}</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* 5.3 - Produtos em alta (8 produtos) */}
      <Section
        title="Produtos em alta"
        titleAlign="left"
        link={{ text: 'Ver todos', href: '/products' }}
      >
        <ProductListing products={productsData.slice(0, 8)} />
      </Section>

      {/* 5.4 - Oferta Especial */}
      <section className="special-offer-wrapper">
        <div className="container">
          <div className="special-offer-content">
            <div className="special-offer-image-box">
              <div className="special-offer-circle-bg" />
              <img
                src="/product-thumb-2.jpeg"
                alt="Air Jordan edição especial"
                className="special-offer-image"
              />
            </div>
            <div className="special-offer-info">
              <span className="special-offer-badge">Oferta especial</span>
              <h2 className="special-offer-title">Air Jordan edição de colecionador</h2>
              <Link to="/product/2" className="special-offer-btn">
                Ver Oferta
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
