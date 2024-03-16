import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from "./redux/store";
import { Provider } from "react-redux";

import { Route, RouterProvider, createRoutesFromElements } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Register from './pages/Auth/Register.jsx';
import Reset from './pages/Auth/Reset';
import Login from './pages/Auth/Login';
import PrivateRoute from "./components/PrivateRoute";
import Profile from './pages/User/Profile';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='' element={<PrivateRoute />}>
        <Route path='/profile' element={<Profile />} />
      </Route>

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
