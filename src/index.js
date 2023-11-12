import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import SignIn from './components/signin/signin';
import SignUp from './components/signup/signup';
import Products from './components/products/products';
import { Provider } from 'react-redux';
import './index.css';

const router = createBrowserRouter([{
    path: "/",
    element: <SignIn/>
},
{
  path: "/signup",
  element: <SignUp/>
},
{
  path: "/home",
  element: <Products/>
}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);

