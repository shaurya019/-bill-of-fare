import React, { useState } from 'react';
import Menu from './Component/menu';
import Categories from './Component/Categories';
import items from './Component/data';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
  if(category === 'all'){
    return setMenuItems(items);
  }
  const newitems = items.filter((item)=> item.category === category)
  return setMenuItems(newitems);
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} />
        <Menu items={menuItems} />
        </section>
    </main>
  );
}

export default App;
