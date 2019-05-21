import React from 'react';
import './AppItem.css';

export default function AppItem({ index, title, category, icon }) {
  return (
    <div className="appitem">
      <div className="appitem__index">{index}</div>
      <div className="appitem__icon">
        <img
          className="appitem__img"
          src={icon}
          alt={title}
        />
      </div>
      <div className="appitem__info">
        <div className="appitem__title">{title}</div>
        <div className="appitem__category">{category}</div>
      </div>
    </div>
  );
}
