import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaChevronUp } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  // Sahifa tepasiga silliq (smooth) chiqish funksiyasi
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Yuqoriga chiqish tugmasi */}
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
          <FaChevronUp />
        </button>

        <div className="footer-content">
          {/* Chap Tomon: Logo/Ism */}
          <div className="footer-logo">
            <h2>Xabibullo</h2>
          </div>

          {/* O'ng Tomon: Ijtimoiy tarmoqlar */}
          <div className="footer-social">
            <span className="connect-text">Connect</span>
            <div className="social-icons">
              <a href="https://www.facebook.com/share/1FGNAzdWc5/" className="social-link" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/khadirov__071/" className="social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Pastki Mualliflik Matni */}
        <div className="footer-bottom">
          <p>Designed with love by Xabibullo © 2024</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;