import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ShopcontextProvider from './Context/ShopContext.jsx'
import {Auth0Provider} from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
   
  <Auth0Provider
    domain="dev-7w4ipt8bjna674a0.us.auth0.com"
    clientId="iPbFyKKCT9jQOoROuJji6uhFRyyAO5T5"
    authorizationParams={{redirect_uri: window.location.origin}}>
   <ShopcontextProvider>
     <App />
   </ShopcontextProvider>
   </Auth0Provider>
);
