import { Heart, ShoppingBag, Search, Menu } from 'lucide-react';
import './style.scss';

interface HeaderProps {
  disableFavorites?: boolean;
}

function Index({ disableFavorites }: HeaderProps) {
  return (
    <>
      <header className="header">
        <div className="header__left">
          <button className="menu-btn">
            <Menu size={22} />
          </button>
          <p className="logo">e-com.</p>
        </div>
        <div className="actions">
          <button>
            <Search size={22} />
          </button>
          {!disableFavorites && (
            <button>
              <Heart size={22} />
            </button>
          )}
          <button>
            <ShoppingBag size={22} />
          </button>
        </div>
      </header>
      <div className="header-placeholder" />
    </>
  );
}

export default Index;
