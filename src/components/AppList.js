import React from 'react';
import AppItem from './AppItem';
import './AppList.css';

function getAppInfo(item) {
  return {
    title: item['im:name'].label,
    icon: item['im:image'][2].label,
    category: item.category.attributes.label,
  };
}

export default function AppList({ items }) {
  return (
    <div className="applist">
      {items.map((item, index) =>
        <AppItem
          key={index}
          index={index + 1}
          {...getAppInfo(item)}
        />
      )}
    </div>
  );
}
