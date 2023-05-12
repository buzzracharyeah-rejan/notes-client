import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import AlertDialogProvider from './contexts/AlertDialogContext.jsx';
import { store } from './store';
import { Provider } from 'react-redux';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertDialogProvider>
        <App />
      </AlertDialogProvider>
    </Provider>
  </React.StrictMode>
);
