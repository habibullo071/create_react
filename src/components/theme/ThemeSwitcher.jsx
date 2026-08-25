import React, { useState } from 'react';
import { FaCog } from 'react-icons/fa';
import './ThemeSwitcher.css';

const colors = [
  '#4169e1', '#5cb85c', '#ff9800', '#ff4081',
  '#ff5722', '#333333', '#9c27b0', '#00e6a8',
  '#5f9ea0', '#e85a5a', '#6b8e23', '#ff0000'
];

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#00e6a8');

  const changeColor = (color) => {
    setSelectedColor(color);
    document.documentElement.style.setProperty('--main-color', color);
  };

  return (
    <div className={`style-switcher ${isOpen ? 'open' : ''}`}>
      {/* Sozlama (Gear) tugmasi */}
      <button 
        className="switcher-toggler" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Theme Panel"
      >
        <FaCog className={`gear-icon ${isOpen ? 'spin' : ''}`} />
      </button>

      {/* Oyna kontenti */}
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
  );
};

export default ThemeSwitcher;