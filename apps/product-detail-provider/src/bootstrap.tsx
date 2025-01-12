import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductDetail from './components/product-detail';
import './main.scss';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <div>
        <p>./product-detail</p>
        <ProductDetail />
      </div>
    </React.StrictMode>,
  );
}
