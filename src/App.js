import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/view/Layout/Layout";
import Goods from "./components/view/Goods/Goods";
import GoodsTest from "./components/view/Goods/GoodsTest";
import GoodsAdd from "./components/view/Goods/GoodsAdd";
import GoodsInfo from "./components/view/Goods/GoodsInfo";
import GoodsEdit from "./components/view/Goods/GoodsEdit";
import LoginPage from "./components/view/LoginPage/LoginPage";
import RegisterPage from "./components/view/RegisterPage/RegisterPage";

import "./App.css";
import LandingPage from "./components/view/LandingPage/LandingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={<Layout children={<LandingPage />} />}
          />

          <Route path="/login" element={<Layout children={<LoginPage />} />} />
          <Route
            path="/register"
            element={<Layout children={<RegisterPage />} />}
          />

          <Route path="/good" element={<Layout children={<Goods />} />} />

          <Route path="/goods" element={<Layout children={<GoodsTest />} />} />
          <Route
            path="/goods/add"
            element={<Layout children={<GoodsAdd />} />}
          />
          <Route path="/goods/item" element={<GoodsInfo />} />
          <Route
            path="/goods/edit"
            element={<Layout children={<GoodsEdit />} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
