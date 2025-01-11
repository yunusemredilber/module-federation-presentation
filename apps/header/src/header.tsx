import { Heart, ShoppingBag, Search, Menu, } from 'lucide-react';
import './header.scss';

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__left">
          <button className="menu-btn">
            <Menu size={22}/>
          </button>
          <p className="logo">e-commerce</p>
        </div>
        <div className="actions">
          <button><Search size={22}/></button>
          <button><Heart size={22}/></button>
          <button><ShoppingBag size={22}/></button>
        </div>
      </header>
      <div className="header-placeholder"/>
    </>
  );
}

export default Header;
