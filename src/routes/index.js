import React from "react"
import { Redirect } from "react-router-dom"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Register from "../pages/Authentication/Register"

// Dashboard
import Dashboard from "../pages/Dashboard/index"
import BuyerBoard from "../pages/EcommerceProducts/index"
import ListOrders from "../pages/buyerBoard/index"
import sellerBoard from "../pages/sellerBoard/index"
import addProduct from "../pages/sellerBoard/addProduct"

const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/buyerBoard", component: BuyerBoard },
  { path: "/sellerBoard", component: sellerBoard },
  { path: "/addProduct", component: addProduct },
  { path: "/orderList", component: ListOrders },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const publicRoutes = [
  { path: "/login", component: Login },
  { path: "/register", component: Register },
]

export { publicRoutes, authProtectedRoutes }
