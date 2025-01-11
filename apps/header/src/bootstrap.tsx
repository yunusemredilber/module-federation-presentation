import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header.tsx';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <Header />
    </React.StrictMode>,
  );
}
