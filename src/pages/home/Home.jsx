import React, { useState, useEffect } from 'react';
import code_image from '../../assets/images/pngtree-a-realistic-computer-monitor-displaying-programming-code-in-a-dark-modern-png-image_17324898.webp'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaRegEnvelope,
  FaCog
} from 'react-icons/fa';
import './Home.css';

const words = ['Developer', 'Freelancer'];
const colors = [
  '#4169e1', '#5cb85c', '#ff9800', '#ff4081',
  '#ff5722', '#333333', '#9c27b0', '#00e6a8',
  '#5f9ea0', '#e85a5a', '#6b8e23', '#ff0000'
];

function Home() {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  // Switcher paneli holatlari
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#00e6a8');

  // Typewriter effekti (alohida top-level useEffect)
  useEffect(() => {
    const currentWord = words[wordIndex];
    const handleTyping = () => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
          setSpeed(100);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setSpeed(150);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, speed]);

  // Rangni o'zgartirish funksiyasi (ichida useEffect bo'lmasligi kerak)
  const changeColor = (color) => {
    setSelectedColor(color);
    document.documentElement.style.setProperty('--main-color', color);
  };

  return (
    <div className='Home'>
      {/* Theme Switcher Tugmasi va Paneli */}
      <div className={`style-switcher ${isSwitcherOpen ? 'open' : ''}`}>
        <button
          className="switcher-toggler"
          onClick={() => setIsSwitcherOpen(!isSwitcherOpen)}
        >
          <FaCog className={`gear-icon ${isSwitcherOpen ? 'spin' : ''}`} />
        </button>

        <div className="switcher-content">
          <h4>Unlimited colors</h4>
          <div className="colors-grid">
            {colors.map((color, index) => (
              <span
                key={index}
                className={`color-circle ${selectedColor === color ? 'active' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => changeColor(color)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* Chap taraf */}
      <div className="container">
        <div className="hero-left">
          <div className="social-links">
            <a href="https://www.facebook.com/share/1FGNAzdWc5/" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#twitter" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://www.instagram.com/khadirov__071/" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://github.com/habibullo071" aria-label="Github"><FaGithub /></a>
          </div>
          <div className="hero-content">
            <h4 className="greeting">Hello, I'm</h4>
            <p className="name">Xabibullo</p>
            <h2 className="title">
              Creative <span className="dynamic-text">{text}<span className="cursor">|</span></span>
            </h2>

            <div className="cta-buttons">
              <a href="mailto:khadirovmichael@gmail.com" className="btn-say-hello">
                Say Hello <FaRegEnvelope className="btn-icon" />
              </a>
              <a href="#about" className="link-animated about-link">
                About Me
              </a>
            </div>
          </div>

          <div className="hero-footer">
            <div className="mouse-icon">
              <div className="wheel"></div>
            </div>
            <a href="mailto:khadirovmichael@gmail.com" className="link-animated email-link">
              khadirovmichael@gmail.com
            </a>
          </div>
        </div>

        {/* O'ng taraf */}
        <div className="hero-right">
          <div className="image-wrapper">
            <div className="shape box-top"></div>
            <div className="shape box-bottom"></div>
            <img
              src={code_image}
              alt="Developer Setup"
              className="hero-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;