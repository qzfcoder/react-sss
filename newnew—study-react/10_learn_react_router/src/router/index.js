import {
  Routes,
  Route,
  NavLink,
  Navigate,
  useNavigate,
  Link,
  useRoutes,
} from "react-router-dom";
import Home from "../pages/Home";
// import About from "../pages/About";
// import Login from "../pages/Login";
import HomeRecommend from "../pages/HomeRecommend";
import HomeRanking from "../pages/HomeRanking";
import Order from "../pages/order";
import HomeSongMenu from "../pages/HomeSongMenu";
import Detail from "../pages/Detail";
import User from "../pages/User";
import Category from "../pages/category";
import NotFound from "../pages/NotFound";
import React from "react";

// 懒加载
const About = React.lazy(()=> import("../pages/About"))
const Login = React.lazy(()=> import("../pages/Login"))


const routes = [
  {
    path: "/",
    element: <Navigate to="/home"></Navigate>,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "/home",
        element: <Navigate to="/home/HomeRecommend"></Navigate>,
      },
      {
        path: "/home/HomeRecommend",
        element: <HomeRecommend></HomeRecommend>,
      },
      {
        path: "/home/HomeRanking",
        element: <HomeRanking></HomeRanking>,
      },
      {
        path: "/home/HomeSongMenu",
        element: <HomeSongMenu></HomeSongMenu>,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/User",
    element: <User />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Order",
    element: <Order />,
  },
  {
    path: "/Category",
    element: <Category />,
  },
  {
    path: "/Detail/:id",
    element: <Detail />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
];
export default routes;
