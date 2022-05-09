import { Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import { Routes } from "react-router-dom";
export default function Features() {
  return (
    <>
      <Routes>
        <Route path="/products/:id" component={<ProductDetail />}></Route>
        <Route path="/products" component={<Products />}></Route>
        <Route path="/" component={<Home />}></Route>
      </Routes>
    </>
  );
}
