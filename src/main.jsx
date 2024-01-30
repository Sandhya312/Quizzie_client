import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import sotre from './store/store.js';
import { CookiesProvider } from 'react-cookie';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CookiesProvider>
    <Router>
   <Provider store={sotre}>
   <App />
    </Provider>
    </Router>
    </CookiesProvider>
  </React.StrictMode>,
)
