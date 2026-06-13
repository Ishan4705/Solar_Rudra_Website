import { useState, useEffect } from 'react';
import logo from '../assets/logo.jpeg';
import './Navbar.css';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'PM Surya Ghar', href: '#subsidy' },
  { name: 'Reviews', href: '#testimonials' },
  { name: 'Contact Us', href: '#footer' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} id="navbar">
        {/* Logo */}
        <a
          href="#home"
          className="navbar__logo"
          onClick={(e) => handleNavClick(e, '#home')}
        >
          <img src={logo} alt="Rudra Solar Solutions" className="navbar__logo-img" />
        </a>

        {/* Desktop Nav Links */}
        <div className="navbar__links">
          {NAV_LINKS.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="navbar__link"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#footer"
          className="navbar__cta"
          onClick={(e) => handleNavClick(e, '#footer')}
        >
          CHECK MY SUBSIDY
        </a>

        {/* Mobile Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`navbar__hamburger-line ${isMobileMenuOpen ? 'open' : ''}`} />
          <span className={`navbar__hamburger-line ${isMobileMenuOpen ? 'open' : ''}`} />
          <span className={`navbar__hamburger-line ${isMobileMenuOpen ? 'open' : ''}`} />
        </button>
      </nav>

      {/* Mobile Overlay Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__content">
          <div className="mobile-menu__links">
            {NAV_LINKS.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-menu__link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="#footer"
            className="mobile-menu__cta btn-primary"
            onClick={(e) => handleNavClick(e, '#footer')}
          >
            CHECK MY SUBSIDY
          </a>
          <div className="mobile-menu__contact">
            <a href="tel:+919005067100" className="mobile-menu__contact-item">
              📞 +91 90050 67100
            </a>
            <a href="mailto:rudrasolarpanel@gmail.com" className="mobile-menu__contact-item">
              📧 rudrasolarpanel@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div className="mobile-backdrop" onClick={toggleMobileMenu} />
      )}
    </>
  );
};

export default Navbar;
