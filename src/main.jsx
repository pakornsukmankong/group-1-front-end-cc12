import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.css';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import { store } from './store/index';

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
	// </React.StrictMode>
);
