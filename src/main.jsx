import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import '@fortawesome/fontawesome-free/css/all.css'
import App from './App'
import './index.css'

import { Provider } from 'react-redux'
import { store } from './store/index'
import LoadingContextProvider from './contexts/LoadingContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <LoadingContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </LoadingContextProvider>
  </BrowserRouter>
  // </React.StrictMode>
)
