import React from 'react';
import Lorem from '../lorem';

const Items = ({ items,onAdd }) => {
  return (
    <main>
      {items.map((el) => (
        <Lorem key={el.id} item={el} onAdd={onAdd} />
      ))}
    </main>
  );
};

export default Items;
