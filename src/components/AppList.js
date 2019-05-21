import React from 'react';
import AppItem from './AppItem';
import './AppList.css';

export function getAppInfo(item) {
  return {
    title: item['im:name'].label,
    icon: item['im:image'][2].label,
    category: item.category.attributes.label,
  };
}

export default function AppList({ items, horizontal }) {
  return (
    <div className={horizontal ? 'applist--horizontal' : 'applist'}>
      {items.map((item, index) =>
        <AppItem
          horizontal={horizontal}
          key={index}
          index={index + 1}
          {...getAppInfo(item)}
        />
      )}
    </div>
  );
}
