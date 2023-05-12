import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import RouterProvider from './components/RouterProvider.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
