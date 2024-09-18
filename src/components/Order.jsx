import React from 'react';
import { FaTrash } from 'react-icons/fa';

const Order = ({ item, onDelete }) => {
  return (
    <div className='item'>
      <img src={`/img/${item.img}`} alt={item.title} />
      <h2>{item.title}</h2>
      <b>{item.price}$</b>
      <FaTrash
        className='delete-icon'
        onClick={() => onDelete(item.id)}
      />
    </div>
  );
};

export default Order;



// import React, { Component } from 'react';
// import { FaTrash } from 'react-icons/fa';

// export class Order extends Component {
//   render() {
//     const { item, onDelete } = this.props;

//     return (
//       <div className='item'>
//         <img src={`/img/${item.img}`} alt={item.title} />
//         <h2>{item.title}</h2>
//         <b>{item.price}$</b>
//         <FaTrash className='delete-icon' onClick={() => onDelete(item.id)} />
//       </div>
//     );
//   }
// }

// export default Order;
