import Header from 'header_provider/header';
import ProductDetail from 'product_detail_provider/product-detail';
import PdpBasketFooter from 'payment_ui_provider/pdp-basket-footer';
import './style.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <ProductDetail />
      <PdpBasketFooter />

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
              <li><a href="#">Advertise</a></li>
              <li><a href="#">Suppliers</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
