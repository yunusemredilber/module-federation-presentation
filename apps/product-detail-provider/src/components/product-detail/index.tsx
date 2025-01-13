import { useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import PaymentWidgets from 'payment_ui_provider/payment-widgets';
import './style.scss';

function ProductDetail() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://images.unsplash.com/photo-1495856458515-0637185db551?auto=format&fit=crop&w=300&q=20',
    'https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?auto=format&fit=crop&w=300&q=20',
  ];
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <main className="product-detail">
      <div className="product__carousel-container">
        <div className="carousel">
          <button
            className="carousel-btn carousel-btn--prev"
            onClick={prevImage}
          >
            <ChevronLeft size={24} />
          </button>
          <img
            src={images[currentImage]}
            alt="Smart Watch"
            className="product-image"
          />
          <button
            className="carousel-btn carousel-btn--next"
            onClick={nextImage}
          >
            <ChevronRight size={24} />
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
                  maskImage:
                    'url(https://cdn.dsmcdn.com/sfint/production/icons/free-cargo-icon_1721125850634.svg)',
                  backgroundImage:
                    'url(https://cdn.dsmcdn.com/sfint/production/icons/free-cargo-icon_1721125850634.svg)',
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
                  maskImage:
                    'url(https://cdn.dsmcdn.com/sfint/production/icons/free-return-icon_1721208792202.svg)',
                  backgroundImage:
                    'url(https://cdn.dsmcdn.com/sfint/production/icons/free-return-icon_1721208792202.svg)',
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
      <div className="info">
        <div className="category">
          <span>in Smart Bracelets</span>
          <span className="highlight">#1 Bestseller</span>
        </div>

        <h1 className="title">
          Example WATCH Ultra Pro Mega Giga Max - 2" OLED Display, Ultra-Slim
          Design
        </h1>

        <div className="rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="#ffd700" color="#ffd700" />
            ))}
          </div>
          <span>(16)</span>
          <Camera size={16} />
        </div>

        <div className="stats">
          <span>968 items added to cart in the last 3 days.</span>
        </div>
        <PaymentWidgets />
      </div>
    </main>
  );
}

export default ProductDetail;
