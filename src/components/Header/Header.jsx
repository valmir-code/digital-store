import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo.jsx';
import miniCartIcon from '../../assets/mini-cart.svg';
import './Header.css';

export default function Header() {
  const [busca, setBusca] = useState('');
  const navigate = useNavigate();

  // funcao simples que redireciona ao apertar enter
  function handleSearch(e) {
    e.preventDefault();
    navigate('/products');
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <Logo />

          <form className="header-search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Pesquisar produto..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
            <button type="submit" className="header-search-btn">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7.5"
                  stroke="#666666"
                  strokeWidth="1.8"
                />
                <path
                  d="M20 20L16.5 16.5"
                  stroke="#666666"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </form>

          <div className="header-actions">
            <Link to="/register" className="header-register-link">
              Cadastre-se
            </Link>
            <Link to="/login" className="header-login-btn">
              Entrar
            </Link>
            <button type="button" className="header-cart-btn">
              <img src={miniCartIcon} alt="Carrinho" width="24" height="24" />
              <span className="header-cart-badge">2</span>
            </button>
          </div>
        </div>

        <nav className="header-nav">
          <ul className="header-nav-list">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? 'header-nav-link active' : 'header-nav-link'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? 'header-nav-link active' : 'header-nav-link'
                }
              >
                Produtos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  isActive ? 'header-nav-link active' : 'header-nav-link'
                }
              >
                Categorias
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-orders"
                className={({ isActive }) =>
                  isActive ? 'header-nav-link active' : 'header-nav-link'
                }
              >
                Meus Pedidos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
