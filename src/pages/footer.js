import React from "react";
import "./footer.css"; // Import the CSS file with your styles

const Footer = (props) =>  {
    function loginfrom() {
        props.loginForm();
    }
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
        
          <p className="footer-links">
            <a href="/" className="link-1">
              Home
            </a>

            <a href="/">Services</a>

            <a href="/">Our Customers</a>
            <button onClick={loginfrom}>Admin Login</button>
          </p>

          <p className="footer-company-name">Company Name © 2023</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>444 S. Cedros Ave</span> Solana Beach, California
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+1.555.555.5555</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">support@company.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div className="footer-icons">
            <a href="/">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="/">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="/">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="/">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
