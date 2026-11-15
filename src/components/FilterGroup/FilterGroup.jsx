import React from 'react';
import './FilterGroup.css';

export default function FilterGroup(props) {
  const opcoes = props.options || [];

  return (
    <div className="filter-group">
      <h3 className="filter-group-title">{props.title}</h3>
      <div className="filter-group-options">
        {opcoes.map(function(opcao, index) {
          return (
            <label key={index} className="filter-group-item">
              <input
                type={props.inputType || 'checkbox'}
                name={props.title}
                className="filter-group-input"
              />
              <span className="filter-group-label">{opcao.text}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
