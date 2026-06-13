import logo from '../assets/logo.jpeg';
import './Footer.css';

const Footer = () => {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Column 1: Navigation */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <nav className="footer__nav">
              <a href="#home" className="footer__nav-link" onClick={(e) => handleNavClick(e, '#home')}>Home</a>
              <a href="#benefits" className="footer__nav-link" onClick={(e) => handleNavClick(e, '#benefits')}>Benefits</a>
              <a href="#subsidy" className="footer__nav-link" onClick={(e) => handleNavClick(e, '#subsidy')}>PM Surya Ghar</a>
              <a href="#testimonials" className="footer__nav-link" onClick={(e) => handleNavClick(e, '#testimonials')}>Reviews</a>
              <a href="#footer" className="footer__nav-link" onClick={(e) => handleNavClick(e, '#footer')}>Contact Us</a>
            </nav>
          </div>

          {/* Column 2: Contact Info */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact Us</h4>
            <div className="footer__contact">
              <div className="footer__contact-group">
                <span className="footer__contact-icon">📞</span>
                <div className="footer__contact-lines">
                  <a href="tel:+919005067100" className="footer__contact-link">+91 90050 67100</a>
                  <a href="tel:+917905094833" className="footer__contact-link">+91 79050 94833</a>
                  <a href="tel:+919899335400" className="footer__contact-link">+91 98993 35400</a>
                </div>
              </div>
              <div className="footer__contact-group">
                <span className="footer__contact-icon">📧</span>
                <a href="mailto:rudrasolarpanel@gmail.com" className="footer__contact-link">
                  rudrasolarpanel@gmail.com
                </a>
              </div>
              <div className="footer__contact-group">
                <span className="footer__contact-icon">📸</span>
                <a href="https://www.instagram.com/rudra.solar.solutions" target="_blank" rel="noopener noreferrer" className="footer__contact-link">
                  @rudra.solar.solutions
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Branding */}
          <div className="footer__col footer__col--brand">
            <img src={logo} alt="Rudra Solar Solutions" className="footer__brand-logo" />
            <div className="footer__brand-ornament">
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 4 L48 32 L76 32 L54 50 L62 78 L40 60 L18 78 L26 50 L4 32 L32 32 Z" 
                      fill="none" stroke="var(--gold)" strokeWidth="1.5" opacity="0.3" />
                <path d="M40 16 L45 32 L62 32 L48 44 L54 60 L40 50 L26 60 L32 44 L18 32 L35 32 Z" 
                      fill="var(--gold)" opacity="0.15" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Rudra Solar Solutions Pvt. Ltd. All rights reserved.
          </p>
          <div className="footer__social">
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/rudra.solar.solutions" 
              className="footer__social-link" 
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            {/* Email */}
            <a 
              href="mailto:rudrasolarpanel@gmail.com" 
              className="footer__social-link" 
              aria-label="Email"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67zM22.5 6.908V6a3 3 0 00-3-3H4.5a3 3 0 00-3 3v.908l10.214 6.286a1 1 0 001.072 0L22.5 6.908z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
