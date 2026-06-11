import heroImage from '../assets/hero-solar-home.png';
import './Hero.css';

const Hero = () => {
  const handleCTAClick = (e) => {
    e.preventDefault();
    const target = document.querySelector('#footer');
    if (target) {
      const navHeight = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      {/* Decorative background elements */}
      <div className="hero__bg-gradient" />
      <div className="hero__bg-pattern" />

      <div className="hero__container container">
        {/* Left Content */}
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            PM Surya Ghar Muft Bijli Yojana
          </div>

          <h1 className="hero__title">
            TRANSFORM YOUR HOME WITH{' '}
            <span className="hero__title-highlight">FREE ELECTRICITY!</span>
          </h1>

          <h2 className="hero__subtitle">
            Har Ghar Pe Roshni, Rudra Ki Guarantee
          </h2>

          <ul className="hero__features">
            <li className="hero__feature">
              <span className="hero__feature-icon">⚡</span>
              <span>
                <strong>Save 70-90%</strong> on your monthly electricity bills permanently.
              </span>
            </li>
            <li className="hero__feature">
              <span className="hero__feature-icon">💰</span>
              <span>
                <strong>Zero Investment</strong> upfront onboarding configurations available.
              </span>
            </li>
            <li className="hero__feature">
              <span className="hero__feature-icon">🏛️</span>
              <span>
                Get direct <strong>Government Subsidy of up to ₹1.08 Lakh</strong> on 3 KW systems!
              </span>
            </li>
          </ul>

          <a
            href="#footer"
            className="hero__cta btn-primary"
            onClick={handleCTAClick}
          >
            GET A FREE QUOTE & CONSULTATION
            <span className="hero__cta-arrow">→</span>
          </a>

          <p className="hero__disclaimer">
            Claim your PM Surya Ghar Subsidy — We provide end-to-end documentation &amp; submission support.
          </p>
        </div>

        {/* Right Image */}
        <div className="hero__image-wrapper">
          <div className="hero__image-glow" />
          <img
            src={heroImage}
            alt="Modern home with solar panels under bright sunlight"
            className="hero__image"
          />
          <div className="hero__image-badge">
            <span className="hero__image-badge-value">₹1.08L</span>
            <span className="hero__image-badge-label">Subsidy Available</span>
          </div>
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="hero__wave">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            d="M0,40 C360,100 720,0 1080,60 C1260,80 1380,40 1440,50 L1440,100 L0,100 Z"
            fill="var(--white)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
