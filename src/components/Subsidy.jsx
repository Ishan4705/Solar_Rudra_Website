import { useEffect, useRef } from 'react';
import './Subsidy.css';

const Subsidy = () => {
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
      { threshold: 0.15 }
    );

    const items = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="subsidy" id="subsidy" ref={sectionRef}>
      <div className="container">
        <div className="subsidy__wrapper">
          {/* Left Content */}
          <div className="subsidy__content animate-on-scroll">
            <h2 className="subsidy__title">
              पीएम सूर्य घर: मुफ्त बिजली योजना
            </h2>
            <p className="subsidy__tagline">
              आपकी छत, आपका पावरहाउस, आपकी बचत का आधार।
            </p>

            <ul className="subsidy__checklist">
              <li className="subsidy__check-item">
                <span className="subsidy__check-icon">✅</span>
                <span>Cut Electricity Bills up to 90%</span>
              </li>
              <li className="subsidy__check-item">
                <span className="subsidy__check-icon">✅</span>
                <span>Zero Investment Option available for immediate deployment.</span>
              </li>
              <li className="subsidy__check-item">
                <span className="subsidy__check-icon">✅</span>
                <span>Net Metering: Instantly sell excess solar energy generated back to the municipal grid.</span>
              </li>
              <li className="subsidy__check-item">
                <span className="subsidy__check-icon">✅</span>
                <span>Direct Government Subsidy processing up to ₹1.08 Lac on 3 KW configurations.</span>
              </li>
            </ul>

            <p className="subsidy__footer">
              Official structural reference guidelines mapped from{' '}
              <a href="https://pmsuryaghar.gov.in" target="_blank" rel="noopener noreferrer" className="subsidy__link">
                pmsuryaghar.gov.in
              </a>
              . We facilitate verification in full structural compliance with government-certified portals.
            </p>
          </div>

          {/* Right: Energy Flow Diagram */}
          <div className="subsidy__diagram animate-on-scroll">
            <div className="subsidy__diagram-card">
              <svg viewBox="0 0 380 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="subsidy__diagram-svg" aria-labelledby="diagramTitle diagramDesc" role="img">
                <title id="diagramTitle">PM Surya Ghar Solar Energy Flow Diagram</title>
                <desc id="diagramDesc">Interactive flow chart showing solar generation from solar panels to household usage, battery storage, net metering, and feeding excess power to the national grid.</desc>
                {/* Sun */}
                <circle cx="190" cy="40" r="24" fill="#FFA500" opacity="0.2" />
                <circle cx="190" cy="40" r="16" fill="#FFA500" />
                {/* Sun Rays */}
                <line x1="190" y1="10" x2="190" y2="4" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" />
                <line x1="210" y1="20" x2="216" y2="14" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" />
                <line x1="220" y1="40" x2="226" y2="40" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" />
                <line x1="170" y1="20" x2="164" y2="14" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" />
                <line x1="160" y1="40" x2="154" y2="40" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" />

                {/* Label: Solar Generation */}
                <text x="190" y="80" textAnchor="middle" fill="#FFA500" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="10">SOLAR GENERATION</text>

                {/* Arrow down to house */}
                <line x1="190" y1="88" x2="190" y2="110" stroke="#FFA500" strokeWidth="2" markerEnd="url(#arrowGold)" />

                {/* House roof */}
                <polygon points="190,110 130,150 250,150" fill="#0F2042" opacity="0.1" stroke="#0F2042" strokeWidth="2" />
                {/* Solar panels on roof */}
                <rect x="155" y="125" width="18" height="12" rx="1" fill="#3498db" stroke="#2980b9" strokeWidth="1" transform="rotate(-20, 164, 131)" />
                <rect x="180" y="118" width="18" height="12" rx="1" fill="#3498db" stroke="#2980b9" strokeWidth="1" transform="rotate(-2, 189, 124)" />
                <rect x="205" y="125" width="18" height="12" rx="1" fill="#3498db" stroke="#2980b9" strokeWidth="1" transform="rotate(18, 214, 131)" />

                {/* House body */}
                <rect x="140" y="150" width="100" height="70" fill="#0F2042" opacity="0.05" stroke="#0F2042" strokeWidth="2" />
                {/* Door */}
                <rect x="175" y="185" width="30" height="35" rx="2" fill="#0F2042" opacity="0.15" stroke="#0F2042" strokeWidth="1.5" />
                {/* Windows */}
                <rect x="150" y="160" width="18" height="18" rx="2" fill="#FFA500" opacity="0.2" stroke="#FFA500" strokeWidth="1" />
                <rect x="212" y="160" width="18" height="18" rx="2" fill="#FFA500" opacity="0.2" stroke="#FFA500" strokeWidth="1" />

                {/* Label: Household Use */}
                <text x="190" y="238" textAnchor="middle" fill="#0F2042" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="10">HOUSEHOLD USE</text>

                {/* Arrow left to Battery */}
                <path d="M130 185 L80 185" stroke="#2ecc71" strokeWidth="2" strokeDasharray="4 3" />
                <path d="M84 181 L76 185 L84 189" stroke="#2ecc71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                {/* Battery */}
                <rect x="30" y="170" width="46" height="30" rx="4" fill="#2ecc71" opacity="0.15" stroke="#2ecc71" strokeWidth="2" />
                <rect x="76" y="180" width="4" height="10" rx="1" fill="#2ecc71" />
                <rect x="38" y="178" width="8" height="14" rx="1" fill="#2ecc71" opacity="0.5" />
                <rect x="50" y="178" width="8" height="14" rx="1" fill="#2ecc71" opacity="0.7" />
                <rect x="62" y="178" width="8" height="14" rx="1" fill="#2ecc71" />
                <text x="53" y="220" textAnchor="middle" fill="#2ecc71" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="9">BATTERY</text>
                <text x="53" y="232" textAnchor="middle" fill="#2ecc71" fontFamily="Montserrat, sans-serif" fontWeight="600" fontSize="8">STORAGE</text>

                {/* Arrow right to Net Meter */}
                <path d="M250 185 L300 185" stroke="#e67e22" strokeWidth="2" strokeDasharray="4 3" />
                <path d="M296 181 L304 185 L296 189" stroke="#e67e22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                {/* Net Meter */}
                <circle cx="335" cy="185" r="24" fill="#e67e22" opacity="0.1" stroke="#e67e22" strokeWidth="2" />
                <text x="335" y="183" textAnchor="middle" fill="#e67e22" fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="10">⇄</text>
                <text x="335" y="193" textAnchor="middle" fill="#e67e22" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="7">METER</text>
                <text x="335" y="228" textAnchor="middle" fill="#e67e22" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="9">NET METER</text>

                {/* Arrow down from Net Meter to Grid */}
                <path d="M335 250 L335 280" stroke="#e74c3c" strokeWidth="2" strokeDasharray="4 3" />
                <path d="M331 276 L335 284 L339 276" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                {/* Grid */}
                <rect x="305" y="288" width="60" height="30" rx="4" fill="#e74c3c" opacity="0.1" stroke="#e74c3c" strokeWidth="2" />
                <text x="335" y="307" textAnchor="middle" fill="#e74c3c" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="9">GRID</text>
                <text x="335" y="336" textAnchor="middle" fill="#e74c3c" fontFamily="Montserrat, sans-serif" fontWeight="600" fontSize="8">EXCESS TO GRID</text>

                {/* Arrow marker definitions */}
                <defs>
                  <marker id="arrowGold" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                    <path d="M0 0 L8 4 L0 8 Z" fill="#FFA500" />
                  </marker>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subsidy;
