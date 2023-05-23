import { Controller } from "@hotwired/stimulus"
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import App from '../App';
import { store } from '../app/store';

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log('React connected');
    const container = document.getElementById('root');
    const root = createRoot(container);

    root.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    );
  }
}
