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
import AdminRoute from './pages/Admin/AdminRoute.jsx';
import UserList from './pages/Admin/UserList.jsx';
import AdminDashboard from './pages/Admin/AdminDashboard.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='/reset' element={<Reset />} />

      <Route path='' element={<PrivateRoute />}>
        <Route path='/profile' element={<Profile />} />
      </Route>

      <Route path="/admin" element={<AdminRoute />} >
        <Route path='userlist' element={<UserList />} />
        <Route path='dashboard' element={<AdminDashboard />} />
      </Route>

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
