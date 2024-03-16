import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from "./redux/store";
import { Provider } from "react-redux";

import { Route, RouterProvider, createRoutesFromElements } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Login from './pages/Auth/Login.jsx';
import Register from './pages/Auth/Register.jsx';
import Reset from './pages/Auth/Reset.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='/reset' element={<Reset />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
