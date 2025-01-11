import { useState } from "react";
import { Heart, ShoppingBag, Search, Star, Camera, Menu, ChevronLeft, ChevronRight } from 'lucide-react';
import './App.scss';

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1495856458515-0637185db551?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?auto=format&fit=crop&w=1200&q=80",
  ];
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header__left">
          <button className="menu-btn">
            <Menu size={22} />
          </button>
          <p className="logo">e-commerce</p>
        </div>
        <div className="actions">
          <button><Search size={22} /></button>
          <button><Heart size={22} /></button>
          <button><ShoppingBag size={22} /></button>
        </div>
      </header>
      <div className="header-placeholder" />

      <main className="product">
        <div className="product__carousel-container">
          <div className="carousel">
            <button className="carousel-btn carousel-btn--prev" onClick={prevImage}>
              <ChevronLeft size={24}/>
            </button>
            <img
              src={images[currentImage]}
              alt="Smart Watch"
              className="product__image"
            />
            <button className="carousel-btn carousel-btn--next" onClick={nextImage}>
              <ChevronRight size={24}/>
            </button>
            <div className="carousel-indicator">
              {currentImage + 1} / {images.length}
            </div>
          </div>
          <div className="badges">
            <div className="free-stamp-section" data-testid="free-stamp-section">
              <div className="free-stamp free-cargo-stamp">
              <span
                style={{
                  display: 'inline-block',
                  width: 16,
                  height: 16,
                  backgroundSize: 'cover',
                  maskImage: 'url(https://cdn.dsmcdn.com/sfint/production/icons/free-cargo-icon_1721125850634.svg)',
                  backgroundImage: 'url(https://cdn.dsmcdn.com/sfint/production/icons/free-cargo-icon_1721125850634.svg)'
                }}
                className="free-stamp-icon"
              />
                <span className="free-stamp-text">
                <p className="free-cargo-text">FREE</p> SHIPPING
              </span>
              </div>
              <div className="free-stamp free-return-stamp">
              <span
                style={{
                  display: 'inline-block',
                  width: 16,
                  height: 16,
                  backgroundSize: 'cover',
                  maskImage: 'url(https://cdn.dsmcdn.com/sfint/production/icons/free-return-icon_1721208792202.svg)',
                  backgroundImage: 'url(https://cdn.dsmcdn.com/sfint/production/icons/free-return-icon_1721208792202.svg)'
                }}
                className="free-stamp-icon"
              />
                <span className="free-stamp-text">
                <p className="free-returns-text">FREE</p> RETURN
              </span>
              </div>
            </div>
          </div>
        </div>


        <div className="product__info">
          <div className="category">
            <span>in Smart Bracelets</span>
            <span className="highlight">#1 Bestseller</span>
          </div>

          <h1 className="title">
            Example WATCH Ultra Pro Mega Giga Max - 2" OLED Display, Ultra-Slim Design
          </h1>

          <div className="rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#ffd700" color="#ffd700"/>
              ))}
            </div>
            <span>(16)</span>
            <Camera size={16}/>
          </div>

          <div className="stats">
            <span>968 items added to cart in the last 3 days.</span>
          </div>

          <div className="product__payment">
            <div className="payment-widget">
              <div className="payment-widget__icon">💳</div>
              <div className="payment-widget__content">
                <p className="payment-widget__title">Pay with cash or card on delivery at the door!</p>
              </div>
            </div>

            <div className="payment-widget">
              <div className="payment-widget__icon">💳</div>
              <div className="payment-widget__content">
                <div className="payment-widget__text">
                  <p>4 interest-free payments</p>
                  <strong>85.22 AED</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="product-basket-actions-footer">
            <div className="content">
              <span className="discount">-40%</span>
              <div className="price">
                <span className="amount">340.88 AED</span>
                <span className="original">569.13</span>
              </div>
            </div>
            <button className="cta">Add To Cart</button>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer__content">
          <div className="footer__section">
            <h3>About Us</h3>
            <ul>
              <li><a href="#">Who We Are</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer__section">
            <h3>Help</h3>
            <ul>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">How to Order</a></li>
            </ul>
          </div>
          <div className="footer__section">
            <h3>Business</h3>
            <ul>
              <li><a href="#">Sell on Trendyol</a></li>
              <li><a href="#">Advertise</a></li>
              <li><a href="#">Suppliers</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© 2024 Trendyol. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
