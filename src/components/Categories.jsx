import React, { useState } from 'react';

const Categories = ({ chooseCategory }) => {
  const [categories] = useState([
    { key: 'all', name: 'Всё' },
    { key: 'chairs', name: 'Стулья' },
    { key: 'tables', name: 'Столы' },
    { key: 'lamps', name: 'Лампы' },
    { key: 'sofas', name: 'Диваны' },
  ]);

  return (
    <div className='categories'>
      {categories.map((category) => (
        <div key={category.key} onClick={() => chooseCategory(category.key)}>
          {category.name}
        </div>
      ))}
    </div>
  );
};
export default Categories;
