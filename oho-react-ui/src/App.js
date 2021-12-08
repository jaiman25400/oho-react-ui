import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Footer from './Components/Header/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import AllProducts from './Components/AllProducts/AllProducts';
import Signup from './Components/LoginSignup/Signup';
import Login from './Components/LoginSignup/Login';
import Product from './Components/Product/Product';
import ProductTwo from './Components/Product/ProductTwo';
import Cart from './Components/CartPages/Cart';
import ReviewOrder from './Components/ReviewOrder/ReviewOrder';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/allproducts" element={<AllProducts />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} /> 
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/producttwo" element={<ProductTwo />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/revieworder" element={<ReviewOrder />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
