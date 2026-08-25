import React from 'react';
import { FaDownload } from 'react-icons/fa';
import './About.css';
import aboutImage from '../../assets/images/futuristic-smart-city-with-5g-global-network-technology_53876-98438.avif'; // Rasm manzili

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* Chap taraf: Animatsiyali blok */}
        <div className="about-visual">
          {/* Faqat borderi bor to'rtburchak (Chapga-o'ngga harakatlanadi) */}
          <div className="border-box"></div>

          {/* Rasm va orqasidagi pushti/asosiy rangli blok (Tepaga-pastga harakatlanadi) */}
          <div className="image-moving-wrapper">
            <div className="bg-box"></div>
            <img src={aboutImage} alt="About Me" className="about-img" />
          </div>
        </div>

        {/* O'ng taraf: Ma'lumotlar */}
        <div className="about-content">
          <span className="subtitle">About me</span>
          <h1 className="main-title">
            I'm <span className="highlight">Xabibullo</span> <br />
            Frontend <br />
            <span className="highlight">Developer</span>
          </h1>
          <h3 className="location-title">Based in Andijon, UZB</h3>

          <p className="description">
            Hi! My name is Xabibullo. I am Frontend Developer, and I'm very passionate and dedicated to my work.
          </p>

          <p className="description">
            With 5 years experience as a professional frontend developer, I have acquired the skills and knowledge necessary to make your project a success.
          </p>

          <a href="#download-cv" className="btn-download">
            Download CV <FaDownload className="btn-icon" />
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;