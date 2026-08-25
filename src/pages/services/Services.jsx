import React from 'react';
import './Services.css';

// Har bir xizmat ma'lumotlari
const servicesData = [
  {
    id: 1,
    title: 'Website building',
    price: '$49',
    description: 'Abdulloh is a leading web design agency with an award-winning design team that creates innovative, effective websites',
    // Video kamera ikonka SVG
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f26b5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="14" height="12" rx="2" />
        <path d="M22 8l-6 4 6 4V8z" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Frontend',
    price: '$59',
    description: 'Abdulloh is a leading web design agency with an award-winning design team that creates innovative, effective websites',
    // Brauzer ikonkasi SVG
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f26b5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 8h20" />
        <circle cx="5" cy="6" r="1" fill="#f26b5b" />
        <circle cx="8" cy="6" r="1" fill="#f26b5b" />
        <circle cx="11" cy="6" r="1" fill="#f26b5b" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Applications',
    price: '$400',
    description: 'Abdulloh is a leading web design agency with an award-winning design team that creates innovative, effective websites',
    // Ruchka/Hujjat ikonkasi SVG
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f26b5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Templates',
    price: '$70',
    description: 'Abdulloh is a leading web design agency with an award-winning design team that creates innovative, effective websites',
    // Odam va nota ikonkasi SVG
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f26b5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  }
];

function Services() {
  return (
    <section className="services-section">
      <div className="services-container">
        
        {/* 1. Chap Yuqori: Asosiy Matn */}
        <div className="services-header">
          <span className="services-subtitle">What I Do</span>
          <h2 className="services-title">My Services</h2>
          <p className="services-desc">
            We offer high quality products for competitive prices. Our main goal is
            customer satisfaction, which we obtain through market orientation of
            ongoing service and support.
          </p>
        </div>

        {/* 2. O'ng Yuqori: Website building */}
        <div className="service-card">
          <div className="card-top">
            <div className="card-icon">{servicesData[0].icon}</div>
            <div className="card-header-text">
              <h3>{servicesData[0].title}</h3>
              <p className="price-text">
                Starts from <span className="price">{servicesData[0].price}</span>
              </p>
            </div>
          </div>
          <p className="card-description">{servicesData[0].description}</p>
        </div>

        {/* 3. Chap O'rtacha: Frontend */}
        <div className="service-card">
          <div className="card-top">
            <div className="card-icon">{servicesData[1].icon}</div>
            <div className="card-header-text">
              <h3>{servicesData[1].title}</h3>
              <p className="price-text">
                Starts from <span className="price">{servicesData[1].price}</span>
              </p>
            </div>
          </div>
          <p className="card-description">{servicesData[1].description}</p>
        </div>

        {/* 4. O'ng O'rtacha: Applications */}
        <div className="service-card">
          <div className="card-top">
            <div className="card-icon">{servicesData[2].icon}</div>
            <div className="card-header-text">
              <h3>{servicesData[2].title}</h3>
              <p className="price-text">
                Starts from <span className="price">{servicesData[2].price}</span>
              </p>
            </div>
          </div>
          <p className="card-description">{servicesData[2].description}</p>
        </div>

        {/* 5. Chap Pastki: Templates */}
        <div className="service-card">
          <div className="card-top">
            <div className="card-icon">{servicesData[3].icon}</div>
            <div className="card-header-text">
              <h3>{servicesData[3].title}</h3>
              <p className="price-text">
                Starts from <span className="price">{servicesData[3].price}</span>
              </p>
            </div>
          </div>
          <p className="card-description">{servicesData[3].description}</p>
        </div>

        {/* 6. O'ng Pastki: Call to Action Block */}
        <div className="services-cta">
          <h2>Do You Want Something<br />Different?</h2>
          <button className="knock-btn">
            <a href="mailto:khadirovmichael@gmail.com">
            Knock Me <span>✉</span>
            </a>
          </button>
        </div>

      </div>
    </section>
  );
}

export default Services;