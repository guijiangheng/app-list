import React from 'react';
import './AppItem.css';

export default function AppItem({ horizontal, index, title, category, icon }) {
  return (
    <div className="appitem">
      {horizontal ? null : <div className="appitem__index">{index}</div>}
      <div className="appitem__icon">
        <img
          className="appitem__img"
          src={icon}
          alt={title}
          width="100"
          height="100"
        />
      </div>
      <div className="appitem__info">
        <div className="appitem__title">{title}</div>
        <div className="appitem__category">{category}</div>
      </div>
    </div>
  );
}
