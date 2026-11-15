import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout.jsx';
import ProductListing from '../../components/ProductListing/ProductListing.jsx';
import FilterGroup from '../../components/FilterGroup/FilterGroup.jsx';
import { productsData } from '../../data/products.js';
import './ProductListingPage.css';

// Opções de filtros conforme Figma e documentação
const brandFilters = [
  { text: 'Adiddas', value: 'adidas' },
  { text: 'Calenciaga', value: 'calenciaga' },
  { text: 'K-Swiss', value: 'k-swiss' },
  { text: 'Nike', value: 'nike' },
  { text: 'Puma', value: 'puma' },
];

const categoryFilters = [
  { text: 'Esporte e lazer', value: 'esporte' },
  { text: 'Casual', value: 'casual' },
  { text: 'Utilitário', value: 'utilitario' },
  { text: 'Corrida', value: 'corrida' },
];

const genderFilters = [
  { text: 'Masculino', value: 'masculino' },
  { text: 'Feminino', value: 'feminino' },
  { text: 'Unissex', value: 'unissex' },
];

const conditionFilters = [
  { text: 'Novo', value: 'novo' },
  { text: 'Usado', value: 'usado' },
];

export default function ProductListingPage() {
  // Estado apenas visual para o seletor de ordenação
  const [sortOrder, setSortOrder] = useState('relevant');

  return (
    <Layout>
      <div className="product-listing-page container">
        {/* Barra superior de resultados e ordenação */}
        <div className="listing-top-bar">
          <p className="listing-results-count">
            <strong>Resultados para "Tênis"</strong> - {productsData.length} produtos
          </p>

          <div className="listing-sort-box">
            <label htmlFor="sort-select" className="listing-sort-label">
              Ordenar por:
            </label>
            <select
              id="sort-select"
              className="listing-sort-select"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="relevant">Mais relevantes</option>
              <option value="lowest">Menor preço</option>
              <option value="highest">Maior preço</option>
            </select>
          </div>
        </div>

        {/* Layout: Filtros na lateral esquerda e Lista de Produtos à direita */}
        <div className="listing-layout">
          <aside className="listing-filter-sidebar">
            <div className="listing-filter-header">
              <h2 className="listing-filter-title">Filtrar por</h2>
              <hr className="listing-filter-divider" />
            </div>

            <FilterGroup
              title="Marca"
              inputType="checkbox"
              options={brandFilters}
            />

            <FilterGroup
              title="Categoria"
              inputType="checkbox"
              options={categoryFilters}
            />

            <FilterGroup
              title="Gênero"
              inputType="checkbox"
              options={genderFilters}
            />

            <FilterGroup
              title="Estado"
              inputType="radio"
              options={conditionFilters}
            />
          </aside>

          <main className="listing-products-content">
            <ProductListing products={productsData} columns={3} />
          </main>
        </div>
      </div>
    </Layout>
  );
}
