import React from 'react';
import { Link } from 'react-router-dom';
import logoHeader from '../../assets/logo-header.svg';
import logoFooter from '../../assets/logo-footer.svg';

export default function Logo(props) {
  // se passar white usa a branca, senao usa a normal
  if (props.white) {
    return (
      <Link to="/">
        <img src={logoFooter} alt="Logo" width="253" height="44" />
      </Link>
    );
  }

  return (
    <Link to="/">
      <img src={logoHeader} alt="Logo" width="253" height="44" />
    </Link>
  );
}
