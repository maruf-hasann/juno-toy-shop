import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Layout/Layout";
import Header from "./Pages/SharedPage/Header/Header";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Blogs from "./Pages/Blogs/Blogs";
import AllToys from "./Pages/AllToys/AllToys";

import AddToys from "./Pages/AddToys/AddToys";
import Error from "./Pages/ErrorPage/Error";
import AuthProvider from "./AuthProvider/AuthProvider";
import Private from "./PrivateRoute/Private";
import ViewDetails from "./Pages/Details/ViewDetails";
import Toys from "./Pages/MyToys/Toys";
import Update from "./Pages/MyToys/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
       
      },
      {
        path: "/my-toys",
        element: <Toys></Toys>,
      },
      {
        path: "/add-toys",
        element: (
          <Private>
            <AddToys></AddToys>
          </Private>
        ),
      },
      {
        path: "/view-details/:id",
        element: (
          <Private>
            <ViewDetails></ViewDetails>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`https://server-plum-rho.vercel.app/view-details/${params.id}`),
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`https://server-plum-rho.vercel.app/update/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
