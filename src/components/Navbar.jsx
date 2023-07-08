import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/hero/logo.png";
function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobile, setMobile] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const goTop = () => {
    window.scrollTo({
      top: (0, 0),
      behavior: "smooth",
    });
  };

  const openMobile = () => {
    setMobile(!mobile);
  };

  return (
    <>
      <nav className={sticky ? "sticky-nav" : ""}>
        <div className="navbar">
          <Link to="/">
            <div className="mainLogo">
              <img src={logo} alt="" />
              <p onClick={goTop}>COIN SEARCH</p>
            </div>
          </Link>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#market">Market Update</a>
            </li>
            <li>
              <a href="#choose-us">Why Us?</a>
            </li>
            <li>
              <a href="#join">Join Us</a>
            </li>
          </ul>
          <span>
            <a href="https://twitter.com/">
             <i className="fa-brands fa-twitter"></i>

            </a>
            <a href="https://discord.com/">
            <i className="fa-brands fa-discord"></i>

            </a>
            {/* mobile */}
            <i
              onClick={openMobile}
              className="fa-solid fa-bars-staggered hamburger-menu"
            ></i>
          </span>
        </div>
      </nav>

      {/* mobile nav */}
      <div className={`mobile-nav ${mobile ? "mobile-up" : ""}`}>
        <i onClick={openMobile} className="fa-solid fa-xmark close-mobile"></i>
        <ul>
          <li onClick={openMobile}>
            <a href="#home">Home</a>
          </li>
          <li onClick={openMobile}>
            <a href="#market">Market</a>
          </li>
          <li onClick={openMobile}>
            <a href="#choose-us">Choose Us</a>
          </li>
          <li onClick={openMobile}>
            <a href="#join">Join</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
