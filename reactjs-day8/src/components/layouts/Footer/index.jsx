export default function Footer() {
  return (
    <footer className="page-footer">
  <div className="container">
    <div className="footer-content">
      <div className="footer-col col-2 mt-30">
        <a href="./product.html"><img src="https://flone.reactdemo.hasthemes.com/assets/img/logo/logo.png" alt="Logo" /></a>
        <p>© 2022 Flone.</p>     
        <h4>All Rights Reserved</h4>
      </div>
      <div className="footer-col col-2 mt-30">
        <h3 className="footer-title">ABOUT US</h3>
        <ul className="list-link">
          <li><a href="/">About us</a></li>
          <li><a href="/">Store location</a></li>            
          <li><a href="/">Contact</a></li>
          <li><a href="/">Orders tracking</a></li>
        </ul>
      </div>
      <div className="footer-col col-2 mt-30">
        <h3 className="footer-title">USEFUL LINKS</h3>
        <ul className="list-link">
          <li><a href="/">Returns</a></li>             
          <li><a href="/">Support Policy</a></li>                        
          <li><a href="/">Size guide</a></li>
          <li><a href="/">FAQs</a></li>
        </ul>
      </div>
      <div className="footer-col col-2 mt-30">
        <h3 className="footer-title">Follow Us</h3>
        <ul className="list-link">
          <li><a href="/">Facebook</a></li>             
          <li><a href="/">Twitter</a></li>                        
          <li><a href="/">Instagram</a></li>
          <li><a href="/">Youtube</a></li>
        </ul>
      </div>
      <div className="footer-col col-4 mt-30">
        <h3 className="footer-title">SUBSCRIBE</h3>
        <ul className="list-link">
          <li><a href="/">Get E-mail updates about our latest shop <br /> and special offers.</a></li>             
          <li>
            <form action="/" className="form-subscribe-footer">
              <input type="email" placeholder="Enter your email address" /> <br />
              <button type="submit"><li>SUBSCRIBE</li><hr /></button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>

  );
}
