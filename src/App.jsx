import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';
import Items from './components/Items';
import Categories from './components/Categories';

const App = () => {
  
  const [orders, setOrders] = useState([]);
 const [items] = useState([
  {
    id: 1,
    title: 'Стул Серый',
    img: 'chair-grey.jpg',
    desc: 'Удобный серый стул с мягкой обивкой, идеально подходящий для офисов и домашних кабинетов.',
    category: 'chairs',
    price: '49.99$',
  },
  {
    id: 2,
    title: 'Кожаное Кресло',
    img: 'chair-leather.jpg',
    desc: 'Элегантное кожаное кресло с высокими спинкой и подлокотниками, обеспечивающее максимальный комфорт.',
    category: 'chairs',
    price: '159.99$',
  },
  {
    id: 11,
    title: 'Круглый Стол',
    img: 'pik.jpg',
    desc: 'Стильный круглый стол из дерева, идеально подходящий для обеденной зоны.',
    category: 'tables',
    price: '129.99$',
  },
  {
    id: 12,
    title: 'Стол для Компьютера',
    img: 'comp.jpg',
    desc: 'Функциональный стол для компьютера с достаточным количеством места для работы.',
    category: 'tables',
    price: '89.99$',
  },
  {
    id: 21,
    title: 'Настольная Лампа',
    img: 'lampa.jpg',
    desc: 'Современная настольная лампа с регулируемой высотой и ярким светом.',
    category: 'lamps',
    price: '39.99$',
  },
  {
    id: 22,
    title: 'Напольная Лампа',
    img: 'lampa.jpg',
    desc: 'Элегантная напольная лампа с мягким освещением, создающая уют в комнате.',
    category: 'lamps',
    price: '99.99$',
  },
  {
    id: 31,
    title: 'Диван-Кровать',
    img: 'divan-krovat.jpg',
    desc: 'Удобный диван, который можно трансформировать в кровать для гостей.',
    category: 'sofas',
    price: '299.99$',
  },
  {
    id: 32,
    title: 'Угловой Диван',
    img: 'ugl-divanjpeg.jpg',
    desc: 'Просторный угловой диван, который идеально подойдет для больших помещений.',
    category: 'sofas',
    price: '399.99$',
  },
]);


  const [current, setCurrent] = useState(items); 
  
  const addToOrder = (item) => {
    setOrders((prevOrders) => [...prevOrders, item]);
  };

  const deleteOrder = (id) => {    
    setOrders((prevOrders) => prevOrders.filter(order => order.id !== id));
  };

  const chooseCategory = (category) => {
    if (category === 'all') {
      setCurrent(items); 
    } else {
      setCurrent(items.filter((item) => item.category === category)); // Фильтровать по категории
    }
    console.log(category);
  };
  
  return (
    <div className='wrapper'>
      <Header orders={orders} onDelete={deleteOrder} />
      <Categories chooseCategory={chooseCategory}/> 
      <Items items={current} onAdd={addToOrder} />
      <Footer />
    </div>
  );
  
};

export default App;
