import { useEffect, useRef } from 'react';
import './Benefits.css';

const BENEFITS = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img">
        <rect x="6" y="36" width="8" height="6" rx="1" fill="#FFA500" opacity="0.4" />
        <rect x="16" y="28" width="8" height="14" rx="1" fill="#FFA500" opacity="0.6" />
        <rect x="26" y="18" width="8" height="24" rx="1" fill="#FFA500" opacity="0.8" />
        <rect x="36" y="8" width="8" height="34" rx="1" fill="#FFA500" />
        <path d="M10 10 L38 30" stroke="#0F2042" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 3" />
        <path d="M35 28 L38 30 L36 33" stroke="#0F2042" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Cut Electricity Bills up to 90%',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="#FFA500" strokeWidth="2.5" />
        <line x1="8" y1="16" x2="40" y2="16" stroke="#FFA500" strokeWidth="2" />
        <text x="24" y="33" textAnchor="middle" fill="#0F2042" fontFamily="Montserrat, sans-serif" fontWeight="900" fontSize="14">25</text>
        <circle cx="36" cy="10" r="8" fill="#FFA500" />
        <text x="36" y="14" textAnchor="middle" fill="#0F2042" fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="8">YRS</text>
      </svg>
    ),
    title: '25 Years Free Power',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img">
        <path d="M24 6 C16 6 10 12 10 18 C10 28 24 42 24 42 C24 42 38 28 38 18 C38 12 32 6 24 6Z" fill="#FFA500" opacity="0.2" stroke="#FFA500" strokeWidth="2" />
        <circle cx="24" cy="18" r="6" fill="#FFA500" />
        <text x="24" y="21" textAnchor="middle" fill="#0F2042" fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="8">₹</text>
        <path d="M14 38 Q18 35 24 38 Q30 41 34 38" stroke="#2ecc71" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <line x1="20" y1="34" x2="20" y2="30" stroke="#2ecc71" strokeWidth="1.5" />
        <line x1="28" y1="34" x2="28" y2="30" stroke="#2ecc71" strokeWidth="1.5" />
        <circle cx="20" cy="29" r="2" fill="#2ecc71" />
        <circle cx="28" cy="29" r="2" fill="#2ecc71" />
      </svg>
    ),
    title: 'PM SURYA GHAR SUBSIDY',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img">
        <circle cx="24" cy="24" r="16" fill="#FFA500" opacity="0.15" stroke="#FFA500" strokeWidth="2" />
        <text x="24" y="22" textAnchor="middle" fill="#FFA500" fontFamily="Montserrat, sans-serif" fontWeight="900" fontSize="10">₹1.08</text>
        <text x="24" y="32" textAnchor="middle" fill="#0F2042" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="7">LAKH</text>
      </svg>
    ),
    title: 'Up to ₹1.08 Lac Government Support',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img">
        <circle cx="24" cy="18" r="10" fill="#FFA500" opacity="0.2" />
        <circle cx="24" cy="18" r="6" fill="#FFA500" />
        <path d="M10 24 Q14 20 18 24" stroke="#e0e0e0" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M30 24 Q34 20 38 24" stroke="#e0e0e0" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M8 32 Q16 26 24 32 Q32 38 40 32" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M16 28 L24 18 L32 28" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5" />
      </svg>
    ),
    title: 'Reliable All-Weather Performance',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img">
        <rect x="12" y="14" width="24" height="20" rx="3" stroke="#FFA500" strokeWidth="2.5" />
        <line x1="24" y1="14" x2="24" y2="34" stroke="#FFA500" strokeWidth="1.5" />
        <path d="M6 24 L12 24" stroke="#0F2042" strokeWidth="2" strokeLinecap="round" />
        <path d="M36 24 L42 24" stroke="#0F2042" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 20 L11 22" stroke="#0F2042" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M37 26 L41 28" stroke="#0F2042" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 28 L11 26" stroke="#0F2042" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M37 22 L41 20" stroke="#0F2042" strokeWidth="1.5" strokeLinecap="round" />
        <text x="18" y="27" fill="#FFA500" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="7">⇄</text>
        <text x="28" y="27" fill="#0F2042" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="7">M</text>
      </svg>
    ),
    title: 'Net Metering: Sell Excess Power',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img">
        <rect x="14" y="22" width="20" height="14" rx="1" stroke="#FFA500" strokeWidth="2" fill="#FFA500" opacity="0.1" />
        <line x1="14" y1="26" x2="34" y2="26" stroke="#FFA500" strokeWidth="1" />
        <line x1="14" y1="30" x2="34" y2="30" stroke="#FFA500" strokeWidth="1" />
        <line x1="20" y1="22" x2="20" y2="36" stroke="#FFA500" strokeWidth="1" />
        <line x1="27" y1="22" x2="27" y2="36" stroke="#FFA500" strokeWidth="1" />
        <circle cx="38" cy="12" r="8" fill="#FFA500" opacity="0.2" />
        <circle cx="38" cy="12" r="5" fill="#FFA500" />
        <path d="M32 16 L36 12 L32 8" stroke="#FFA500" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
        <line x1="14" y1="22" x2="10" y2="14" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" />
        <line x1="34" y1="22" x2="38" y2="18" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'True Energy Independence',
  },
];

const Benefits = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="benefits" id="benefits" ref={sectionRef}>
      <div className="container">
        <h2 className="section-heading">Benefits</h2>

        {/* Top Row: 4 cards */}
        <div className="benefits__grid benefits__grid--top stagger-children">
          {BENEFITS.slice(0, 4).map((benefit, index) => (
            <div key={index} className="benefits__card animate-on-scroll">
              <div className="benefits__card-icon">{benefit.icon}</div>
              <h3 className="benefits__card-title">{benefit.title}</h3>
            </div>
          ))}
        </div>

        {/* Bottom Row: 3 cards */}
        <div className="benefits__grid benefits__grid--bottom stagger-children">
          {BENEFITS.slice(4).map((benefit, index) => (
            <div key={index} className="benefits__card animate-on-scroll">
              <div className="benefits__card-icon">{benefit.icon}</div>
              <h3 className="benefits__card-title">{benefit.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
