import { useState } from 'react';
import '../styles/Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="menu">
      <div className="menu-header">
        <h1>ShopApp</h1>
        <button onClick={toggleMenu} className="menu-toggle">
          ☰
        </button>
      </div>
      <ul className={`menu-items ${isOpen ? 'menu-open' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Produtos</a></li>
        <li><a href="#">Sobre Nós</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Menu;