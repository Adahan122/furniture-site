import React from 'react';
import Order from './Order';

let ShowOrders = ({ orders, onDelete }) => {
    let summa = 0;
    orders.forEach(el => summa += Number.parseFloat(el.price));
  return (
    <div>
      {orders.map((order) => (
        <Order key={order.id} item={order} onDelete={onDelete} /> // Передаем onDelete в Order
      ))}
      <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}</p>
    </div>
  );
};

export default ShowOrders;
