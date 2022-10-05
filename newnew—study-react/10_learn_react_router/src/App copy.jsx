import React, { PureComponent } from "react";
import {
  Routes,
  Route,
  NavLink,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import HomeRecommend from "./pages/HomeRecommend";
import HomeRanking from "./pages/HomeRanking";
import Order from "./pages/order";
import Category from "./pages/category";
import NotFound from "./pages/NotFound";
import "./style.css";
export class App extends PureComponent {
  navigateTo(e) {
    console.log("e", e);
    // React Hooks must be called in a React function component or a custom React Hook function.
    // const navigate = useNavigate();
    // navigate(e);
  }
  render() {
    return (
      <div className="app">
        <div className="header">
          Header
          <div className="nav">
            <NavLink
              to="/home"
              style={({ isActive }) => ({ color: isActive ? "red" : "gray" })}
            >
              首页
            </NavLink>
            <NavLink
              // style={({ isActive }) => (isActive ? "link-active" : "")}
              to="/about"
            >
              about
            </NavLink>
            <NavLink to="/login">login</NavLink>
            <button onClick={(e) => this.navigateTo("/category")}>分类</button>
            <span onClick={(e) => this.navigateTo("/order")}>订单</span>
          </div>
          <hr />
        </div>
        <div className="content">
          {/* 映射关系，path=》component */}
          <Routes>
            <Route path="/home" element={<Home />}>
              <Route
                path="/home"
                element={<Navigate to="/home/HomeRecommend" />}
              ></Route>
              <Route
                path="/home/HomeRecommend"
                element={<HomeRecommend />}
              ></Route>
              <Route path="/home/HomeRanking" element={<HomeRanking />}></Route>
            </Route>
            <Route path="/" element={<Navigate to="/home" />}></Route>
            {/* <Route path="/" element={<Home />}></Route> */}
            <Route path="/about" element={<About />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/Order" element={<Order />}></Route>
            <Route path="/Category" element={<Category />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <div className="footer">
          <hr />
          Footer
        </div>
      </div>
    );
  }
}

export default App;
