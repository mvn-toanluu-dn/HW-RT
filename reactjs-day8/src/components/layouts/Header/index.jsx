import { FaSearch, FaUser, FaShoppingBag, FaHeart } from "react-icons/fa";
import { BsShuffle } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="page-header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-list">
            <ul className="header-left">
              <li>English</li>
              <li>EUR</li>
              <li>Call Us 3965410</li>
            </ul>
            <p className="header-right">
              Free delivery on order over <span> €200.00</span>
            </p>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="header-menu">
            <a className="logo col-2" href="./product.html">
              <img
                src="https://flone.reactdemo.hasthemes.com/assets/img/logo/logo.png"
                alt="Logo"
              />
            </a>
            <nav className="header-nav col-7">
              <ul className="menu-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Product</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
              </ul>
            </nav>
            <ul className="icon-list col-3">
              <li>
                <a href="/">
                  <FaSearch />
                </a>
              </li>
              <li>
                <a href="/login">
                  <FaUser />
                </a>
              </li>
              <li>
                <a href="/">
                  <BsShuffle />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaHeart />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaShoppingBag />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
