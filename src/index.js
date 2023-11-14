import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import SignIn from './components/signin/signin';
import SignUp from './components/signup/signup';
import Products from './components/products/products';
import ProductDetail from './components/productsdetail/productsdetail';
import OrderPage from './components/orderpage/orderpage';
import OrderConfirmationPage from './components/orderconfirmation/orderconfirmation';
import ProductUpsert from './components/productsupsert/productsupsert';
import { Provider } from 'react-redux';
import store from './common/store';
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
},
{
  path: "/product/detail",
  element: <ProductDetail/>
},
{
  path: "/product/upsert",
  element: <ProductUpsert/>
},
{
  path: "/order",
  element: <OrderPage/>
},
{
  path: "/order/confirm",
  element: <OrderConfirmationPage/>
}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
  </React.StrictMode>
);

