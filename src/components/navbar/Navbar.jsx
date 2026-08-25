import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [activeNav, setActiveNav] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll hodisasini kuzatish
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Menyudagi link bosilganda silliq o'tish va mobil menyuni yopish
  const scrollToSection = (e, id) => {
    e.preventDefault();
    setActiveNav(id);
    setIsMobileMenuOpen(false); // Link bosilganda menyu yopiladi
    
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        
        {/* Logo */}
        <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="nav-logo">
          Xabibullo
        </a>

        {/* Hamburger Tugmasi (Kichik ekranda chiqadi) */}
        <div className="menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigatsiya Menyusi */}
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a 
              href="#home" 
              className={`nav-link ${activeNav === '#home' ? 'active' : ''}`}
              onClick={(e) => scrollToSection(e, '#home')}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#about" 
              className={`nav-link ${activeNav === '#about' ? 'active' : ''}`}
              onClick={(e) => scrollToSection(e, '#about')}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#services" 
              className={`nav-link ${activeNav === '#services' ? 'active' : ''}`}
              onClick={(e) => scrollToSection(e, '#services')}
            >
              Services
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#portfolio" 
              className={`nav-link ${activeNav === '#portfolio' ? 'active' : ''}`}
              onClick={(e) => scrollToSection(e, '#portfolio')}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#resume" 
              className={`nav-link ${activeNav === '#resume' ? 'active' : ''}`}
              onClick={(e) => scrollToSection(e, '#resume')}
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#contact" 
              className={`nav-link ${activeNav === '#contact' ? 'active' : ''}`}
              onClick={(e) => scrollToSection(e, '#contact')}
            >
              Contact
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;