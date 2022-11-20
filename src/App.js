import React, { useState } from 'react';
import Menu from './Component/menu';
import Categories from './Component/Categories';
import items from './Component/data';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <Menu items={menuItems} />
        </section>
    </main>
  );
}

export default App;
