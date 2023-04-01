import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Sucess from "./pages/Success";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user === null ? <Navigate replace to="/login" /> : <Home />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/login"
          element={user !== null ? <Navigate replace to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate replace to="/" /> : <Register />}
        />
        <Route path="/products?/:category" element={<ProductList />} />
        <Route path="/product?/:productId" element={<Product />} />
        <Route path="/success" element={<Sucess />} />
      </Routes>
    </Router>
  );
};

export default App;
