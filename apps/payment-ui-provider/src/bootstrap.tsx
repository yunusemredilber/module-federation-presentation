import React from 'react';
import ReactDOM from 'react-dom/client';
import PaymentWidgets from './components/payment-widgets';
import PdpBasketFooter from './components/pdp-basket-footer';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <div>
        <p>./payment-widgets</p>
        <PaymentWidgets />
      </div>
      <PdpBasketFooter />
    </React.StrictMode>,
  );
}
