import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Load styles.
import '../scss/style.scss';

// Register service worker.
import './registerServiceWorker';

const container = document.getElementById('container');
/* eslint react/jsx-filename-extension: 0 */
ReactDOM.render(<App />, container);
