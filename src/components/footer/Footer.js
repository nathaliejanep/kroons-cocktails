import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faSquareFacebook,
} from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__left">
        <div className="Footer__left-contact">
          <h2>Kontakt</h2>
          <address>
            <p>Telefon</p>
            <a href="tel:0701112233">070 - 111 22 33</a>
            <p>Mail</p>
            <a href="mailto:hej@example.com">hej@example.com</a>
          </address>
        </div>
      </div>

      <div className="Footer__right">
        <div className="Footer__right-newsletter">
          <p>Vill du prenumerera på vårt nyhetsbrev?</p>
          <input placeholder="E-post" />
          <button className="button">Prenumerera</button>
        </div>

        <div className="Footer__right-icons">
          <FontAwesomeIcon
            icon={faInstagram}
            className="Footer__right-icons-insta"
          />
          <FontAwesomeIcon icon={faSquareFacebook} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
