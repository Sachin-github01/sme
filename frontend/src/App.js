import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./components/404/404";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import User from "./components/Auth/User/User";
import SendPasswordResetEmail from "./components/Auth/SendPasswordResetEmail/SendPasswordResetEmail";
import Register from "./components/Auth/Register/Register";
import ChangePassword from "./components/Auth/ChangePassword/ChangePassword";
import ResetPassword from "./components/Auth/ResetPassword/ResetPassword";
import Profile from "./components/Auth/Profile/Profile";

import { useSelector } from "react-redux";
import Sidemenu from "./components/Sidemenu/Sidemenu";
import Dashboard from "./pages/Dashboard/Dashboard";
import About from "./pages/About/About";
import Analytics from "./pages/Analytics/Analytics";
import Comment from "./pages/Comment/Comment";
import Product from "./pages/Product/Product";
import ProductList from "./pages/ProductList/ProductList";

function App() {
  const { access_token } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      {/* <Sidemenu />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/comment" element={<Comment />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productlist" element={<ProductList />} />
      </Routes> */}

      <Navbar />
      <Sidemenu />
      <Routes>
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        {/* Sidemenu tabs  starts*/}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/comment" element={<Comment />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productlist" element={<ProductList />} />
        {/* auth rout tabs starts  */}
        <Route
          path="login"
          element={!access_token ? <User /> : <Navigate to="/user/profile" />}
        />
        <Route path="user/register" element={<Register />} />
        <Route
          path="user/forgot-password"
          element={<SendPasswordResetEmail />}
        />
        <Route
          path="authapi/reset-password/:id/:token/"
          element={<ResetPassword />}
        />
        <Route
          path="user/profile"
          element={access_token ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="user/profile/change-password/"
          element={<ChangePassword />}
        />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
