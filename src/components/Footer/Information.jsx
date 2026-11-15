import React from 'react';
import { Link } from 'react-router-dom';

export default function Information({ title, informations = [] }) {
  return (
    <div className="footer-info-column">
      <h3 className="footer-info-title">{title}</h3>
      <ul className="footer-info-list">
        {informations.map((item, index) => (
          <li key={index} className="footer-info-item">
            <Link to={item.link} className="footer-info-link">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
