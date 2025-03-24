import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOut, fetchUser } from "../../api/auth";

const Header = () => {

  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    let interval;

    const getSessionExpiry = async () => {
      try {
        const res = await fetchUser();
        const expiresAt = res.sessionExpiresAt;
        const updateTime = () => {
          const remainingTime = expiresAt - Date.now();
          setTimeLeft(remainingTime > 0 ? remainingTime : 0);
        };
        updateTime();
        interval = setInterval(updateTime, 1000);
      } catch (error) {
        console.error("Error fetching session time", error);
      }
    };

    getSessionExpiry();

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);


  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

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
                <li><span>Session Expires In: {timeLeft !== null ? formatTime(timeLeft) : 'Loading...'}</span></li>
                <li><button onClick={handleLogout} className="btn btn-link">Logout</button></li>
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
