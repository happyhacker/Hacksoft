// UI Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Images
import logo from "../assets/images/logo.png";

// Icons
import {
  faFacebookF,
  faTwitter,
  faBehance,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";

// ---------------

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content center-relative">
        <div className="footer-logo">
          <img src={logo} alt="Meelo" />
        </div>

        <div className="footer-mail">
          <a href="mailto:hello@Hacksoft.net">hello@Hacksoft.net</a>
        </div>

        <div className="footer-phone">
          <a href="tel:7132890484">713-289-0484</a>
        </div>

        <div className="social-holder">
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
         </div>

       </div>
    </footer>
  );
}

export default Footer;
