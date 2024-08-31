import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import keycloakInstance from './keycloak/keycloak.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Function to initialize Keycloak and render the app
const initializeKeycloak = async () => {
  try {
    const authenticated = await keycloakInstance.initialize();
    
    if (authenticated) {
      // Render the app only after Keycloak is initialized and authenticated
      root.render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
    } else {
      console.error('Keycloak authentication failed');
    }
  } catch (error) {
    console.error('Failed to initialize Keycloak', error);
  }
};

// Call the function to initialize Keycloak and then render the app
initializeKeycloak();
