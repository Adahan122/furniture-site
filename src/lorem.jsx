import React from 'react';

const Lorem = (props) => {
  const { item, onAdd } = props;

  return (
    <div className='item'>
      <img src={`/img/${item.img}`} alt='' />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <b>{item.price}</b>
      <div className='add-to-card' onClick={() => onAdd(item)}>
        +
      </div>
    </div>
  );
};

export default Lorem;
