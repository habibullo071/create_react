import React, { useState } from 'react';
import './Portfolio.css';
import movie_site from '../../assets/images/movie_site.png'
import digital_giols from '../../assets/images/Аннотация 2026-08-25 161047.png'
import calculator from '../../assets/images/calculator.png'
import login from '../../assets/images/Login.png'
import food_shop from '../../assets/images/Аннотация 2026-08-25 162240.png'
import figma from '../../assets/images/figma.png'
// 6 ta loyiha ma'lumotlari
const projectsData = [
  {
    id: 1,
    title: 'Movie sitе',
    category: 'Vimeo',
    img: movie_site,
    link: 'https://kino-sayt.vercel.app/'
  },
  {
    id: 2,
    title: 'Digital Girls',
    category: 'Detail',
    img: digital_giols,
    link: 'https://digital-giols.vercel.app/'
  },
  {
    id: 3,
    title: 'Calculator',
    category: 'Image',
    img: calculator,
    link: 'https://calculator-theta-lilac.vercel.app/'
  },
  {
    id: 4,
    title: 'Privacy',
    category: 'Youtube',
    img: login,
    link: 'https://login-kappa-liart.vercel.app/?'
  },
  {
    id: 5,
    title: 'Online shop',
    category: 'Soundcloud',
    img: food_shop,
    link: 'https://food-shop-pied.vercel.app/'
  },
  {
    id: 6,
    title: 'Figma',
    category: 'Detail',
    img: figma,
    link: 'https://pixer-one.vercel.app/'
  }
];

const categories = ['All', 'Vimeo', 'Youtube', 'Soundcloud', 'Image', 'Detail'];

function Portfolio() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = activeTab === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeTab);

  return (
    <section className="portfolio-section">
      <div className="portfolio-header">
        <span className="subtitle">Selected works</span>
        <h2 className="title">Check my portfolio</h2>

        {/* Tab tugmalari */}
        <div className="portfolio-tabs">
          {categories.map((cat, idx) => (
            <button 
              key={idx} 
              className={`tab-btn ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 6 ta Portfolio Grid */}
      <div className="portfolio-grid">
        {filteredProjects.map((item) => (
          <a 
            key={item.id} 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="portfolio-card"
          >
            <div className="card-image-wrapper">
              <img src={item.img} alt={item.title} className="card-img" />

              {/* Hover overlay va kontent */}
              <div className="card-overlay">
                <div className="mini-preview">
                  <img src={item.img} alt="Mini Preview" />
                </div>
                <span className="see-website-text">See website</span>
              </div>
            </div>

            <div className="card-footer">
              <h3>{item.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;