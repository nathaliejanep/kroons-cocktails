import './Cookies.scss';
import cookieIcon from '../../assets/images/cookie.png';
import { useState } from 'react';

const Cookies = () => {
  const [showCookies, setShowCookies] = useState(true);

  return (
    <>
      {showCookies ? (
        <div className="Cookies">
          <img src={cookieIcon} alt="Cookie Icon" />
          <p>
            This website uses cookies to ensure you get the best experience on
            our website.
          </p>
          <div className="Cookies__buttons">
            <button
              className="button"
              onClick={() => {
                setShowCookies(false);
              }}
            >
              Tillåt
            </button>
            <button
              className="button deny"
              onClick={() => {
                setShowCookies(false);
              }}
            >
              Tillåt inte
            </button>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Cookies;
