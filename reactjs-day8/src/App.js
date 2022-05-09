import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./assets/scss/styles.scss";
import { Header, Footer } from "./components/index";
import { Home, AboutUs, ProductDetail, Products } from "./pages";
import {Login} from './pages/Auth';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
