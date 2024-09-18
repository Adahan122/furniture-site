// import React, { useState } from 'react';
// import { FaShopify } from 'react-icons/fa';
// import '../index.css';
// import Order from './Order';

// const ShowOrders = ({ orders,onDelete }) => {
//   return (
//     <div>
//       {orders && orders.map((el) => <Order onDelete={onDelete} key={el.id} item={el} />)}
//     </div>
//   );
// };

// const ShowNothing = () => {
//   return (
//     <div className='empty'>
//       <h2>Нет товаров</h2>
//     </div>
//   );
// };

// export default function Header({ orders }) {
//   const [cartOpen, setCartOpen] = useState(false);

//   return (
//     <header>
//       <div>
//         <span className='logo'>Elegant Tables</span>
//         <ul className='nav'>
//           <li>Про нас</li>
//           <li>Контакты</li>
//           <li>Кабинет</li>
//         </ul>
//         <FaShopify
//           onClick={() => setCartOpen(!cartOpen)}
//           className={`shop-cart ${cartOpen ? 'active' : ''}`}
//         />

//         {cartOpen && (
//           <div className='shop-cardding'>
//             {orders && orders.length > 0 ? (
//               <ShowOrders orders={orders} />
//             ) : (
//               <ShowNothing/>
//             )}
//           </div>
//         )}
//       </div>
//       <div className='presentation'></div>
//     </header>
//   );
// }
import React, { useState } from 'react';
import { FaShopify } from 'react-icons/fa';
import '../index.css';
import ShowOrders from './ShowOrders'; // Импортируем ShowOrders

const ShowNothing = () => {
  return (
    <div className='empty'>
      <h2>Нет товаров</h2>
    </div>
  );
};

export default function Header({ orders, onDelete }) { // Принимаем onDelete как проп
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className='logo'>Elegant Tables</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShopify
          onClick={() => setCartOpen(!cartOpen)}
          className={`shop-cart ${cartOpen ? 'active' : ''}`}
        />

        {cartOpen && (
          <div className='shop-cardding'>
            {orders && orders.length > 0 ? (
              <ShowOrders orders={orders} onDelete={onDelete} /> // Передаем onDelete в ShowOrders
            ) : (
              <ShowNothing />
            )}
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  );
}

