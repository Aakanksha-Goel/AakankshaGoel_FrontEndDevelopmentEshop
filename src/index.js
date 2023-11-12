import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import SignIn from './components/signin/signin';
import SignUp from './components/signup/signup';
import './index.css';

const router = createBrowserRouter([{
    path: "/",
    element: <SignIn/>
},
{
  path: "/signup",
  element: <SignUp/>
}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);

