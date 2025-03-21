import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-5 col-12">
              <ul className="top-link">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/doctors">Doctors</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-7 col-12">
              <ul className="top-contact">
                <li><i className="fa fa-phone"></i>+880 1234 56789</li>
                <li><i className="fa fa-envelope"></i><a href="mailto:support@yourmail.com">support@yourmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header-inner">
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-12">
                <div className="logo">
                  <Link to="/"><img src="/src/assets/images/logo.png" alt="Logo" /></Link>
                </div>
              </div>
              <div className="col-lg-7 col-md-9 col-12">
                <div className="main-menu">
                  <nav className="navigation">
                    <ul className="nav menu">
                      <li className="active"><Link to="/">Home</Link></li>
                      <li><Link to="/doctors">Doctors</Link></li>
                      <li><Link to="/services">Services</Link></li>
                      <li><Link to="/blogs">Blogs</Link></li>
                      <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-2 col-12">
                <div className="get-quote">
                  <Link to="/appointment" className="btn">Book Appointment</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
