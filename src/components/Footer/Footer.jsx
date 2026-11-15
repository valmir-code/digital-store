import React from 'react';
import Logo from '../Logo/Logo.jsx';
import Information from './Information.jsx';
import facebookIcon from '../../assets/facebook.svg';
import instagramIcon from '../../assets/instagram.svg';
import twitterIcon from '../../assets/twitter.svg';
import './Footer.css';

const infoLinks = [
  { text: 'Sobre Drip Store', link: '/about' },
  { text: 'Segurança', link: '/security' },
  { text: 'Wishlist', link: '/wishlist' },
  { text: 'Blog', link: '/blog' },
  { text: 'Trabalhe conosco', link: '/careers' },
  { text: 'Meus Pedidos', link: '/my-orders' },
];

const categoryLinks = [
  { text: 'Camisetas', link: '/products?category=camisetas' },
  { text: 'Calças', link: '/products?category=calcas' },
  { text: 'Bonés', link: '/products?category=bones' },
  { text: 'Headphones', link: '/products?category=headphones' },
  { text: 'Tênis', link: '/products?category=tenis' },
];

const contactLinks = [
  {
    text: 'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161',
    link: '#',
  },
  {
    text: '(85) 3051-3411',
    link: 'tel:+558530513411',
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo white />
            <p className="footer-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="footer-socials">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <img src={twitterIcon} alt="Twitter" />
              </a>
            </div>
          </div>

          <div className="footer-columns">
            <Information title="Informação" informations={infoLinks} />
            <Information title="Categorias" informations={categoryLinks} />
            <Information title="Contato" informations={contactLinks} />
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>@ 2022 Digital College</p>
        </div>
      </div>
    </footer>
  );
}
