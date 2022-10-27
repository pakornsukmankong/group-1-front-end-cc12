import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.css';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import { store } from './store/index';
import LoadingContextProvider from './contexts/LoadingContext';
import AuthContextProvider from './contexts/AuthContext';
import PropertyContextProvider from './contexts/PropertyContext';
import ReserveContextProvider from './contexts/ReserveContext';
import BookingContextProvider from './contexts/BookingContext';
import ReviewContextProvider from './contexts/ReviewContext';

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<BrowserRouter>
		<LoadingContextProvider>
			<AuthContextProvider>
				<ReviewContextProvider>
					<ReserveContextProvider>
						<PropertyContextProvider>
							<BookingContextProvider>
								<Provider store={store}>
									<App />
								</Provider>
							</BookingContextProvider>
						</PropertyContextProvider>
					</ReserveContextProvider>
				</ReviewContextProvider>
			</AuthContextProvider>
		</LoadingContextProvider>
	</BrowserRouter>
	// </React.StrictMode>
);
