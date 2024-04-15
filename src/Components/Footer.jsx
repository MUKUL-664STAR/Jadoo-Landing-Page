import { FaFacebook, FaTwitter, FaInstagram ,FaGooglePlay, FaAppStore} from "react-icons/fa";
import "../css/Footer.css";
import companyLogo from "../img/Jadoo.png"; // Import your company logo image

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>
          <img src={companyLogo} alt="Company Logo" className="img1" />
          <p>
            Book your trip in minute, get full <br></br>
            Control for much longer.
          </p>
        </span>
        <div className="footer-section">
          <div className="section-links">
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Mobile</li>
            </ul>
          </div>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affilates</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>More</h3>
          <ul>
            <li>Airlinefees</li>
            <li>Airline</li>
            <li>Low fare tips</li>
          </ul>
        </div>
        <div className="social-icons">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <h3>Discover Your App</h3>
          <a href="#">
            <FaGooglePlay />
          </a>
          <a href="#">
            <FaAppStore />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
        All rights reserved@jadoo.co
        </p>
      </div>
    </footer>
  );
};

export default Footer;
