import React from "react";
import {
  Routes,
  Route,
  NavLink,
  Navigate,
  useNavigate,
  Link,
  useRoutes,
} from "react-router-dom";
import routes from "./router/index";
import "./style.css";
export function App(props) {
  const navigate = useNavigate();
  function navigateTo(e) {
    console.log("e", e);
    navigate(e);
  }
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
          <button onClick={(e) => navigateTo("/category")}>分类</button>
          <span onClick={(e) => navigateTo("/order")}>订单</span>
          <Link to="/User?name=q&age=1">用户</Link>
        </div>
        <hr />
      </div>
      <div className="content">
        {/* 映射关系，path=》component */}
        {/* <Routes>
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
            <Route path="/home/HomeSongMenu" element={<HomeSongMenu />}></Route>
          </Route>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/User" element={<User />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Order" element={<Order />}></Route>
          <Route path="/Category" element={<Category />}></Route>
          <Route path="/Detail/:id" element={<Detail />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes> */}
        {useRoutes(routes)}
      </div>
      <div className="footer">
        <hr />
        Footer
      </div>
    </div>
  );
}

export default App;
