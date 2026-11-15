import React from 'react';
import { Link } from 'react-router-dom';
import './Section.css';

export default function Section(props) {
  const alinhamento = props.titleAlign || 'left';

  return (
    <section className="section">
      <div className="container">
        <div className={alinhamento === 'center' ? 'section-header section-header-center' : 'section-header'}>
          {props.title && (
            <h2 className="section-title" style={{ textAlign: alinhamento }}>
              {props.title}
            </h2>
          )}

          {props.link && (
            <Link to={props.link.href} className="section-link">
              <span>{props.link.text}</span>
              <span>&rarr;</span>
            </Link>
          )}
        </div>

        <div className="section-content">
          {props.children}
        </div>
      </div>
    </section>
  );
}
