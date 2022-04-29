import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./assets/scss/styles.scss";
import { Header, Footer } from "./components/layouts/index";
import { Home, AboutUs, ProductList } from "./pages";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/product-list" element={<ProductList />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
