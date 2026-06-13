import { useEffect, useState, useRef } from 'react';
import './TrustImpact.css';

const CountUp = ({ target, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = parseInt(target, 10);
    if (start === end) return;

    const totalMilliseconds = duration;
    // We want to increment in smooth frames (~60fps)
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(totalMilliseconds / frameRate);
    let currentFrame = 0;

    const timer = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      // Ease out quad formula: progress * (2 - progress) for smooth deceleration
      const easeProgress = progress * (2 - progress);
      const nextCount = Math.round(easeProgress * end);

      if (currentFrame >= totalFrames) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(nextCount);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
};

const TrustImpact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="trust-impact" id="trust" ref={sectionRef}>
      <div className="container">
        <h2 className="section-heading">Trust & Impact</h2>

        {/* Live Counters Grid */}
        <div className="trust-impact__grid stagger-children">
          <div className="trust-impact__card animate-on-scroll">
            <div className="trust-impact__card-icon">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 34C12 28.4772 17.4772 24 24 24C30.5228 24 36 28.4772 36 34" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
                <circle cx="24" cy="14" r="6" fill="var(--gold)" opacity="0.3" stroke="var(--gold)" strokeWidth="3" />
                <path d="M6 38C6 34.6863 9.68629 32 14 32" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
                <circle cx="14" cy="22" r="4" fill="var(--gold)" opacity="0.15" stroke="var(--gold)" strokeWidth="2.5" />
                <path d="M42 38C42 34.6863 38.3137 32 34 32" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
                <circle cx="34" cy="22" r="4" fill="var(--gold)" opacity="0.15" stroke="var(--gold)" strokeWidth="2.5" />
              </svg>
            </div>
            <div className="trust-impact__number">
              <CountUp target={500} suffix="+" />
            </div>
            <div className="trust-impact__label">Happy Clients</div>
            <div className="trust-impact__desc">Families Powered</div>
          </div>

          <div className="trust-impact__card animate-on-scroll">
            <div className="trust-impact__card-icon">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="10" width="32" height="32" rx="4" stroke="var(--gold)" strokeWidth="3" />
                <line x1="8" y1="20" x2="40" y2="20" stroke="var(--gold)" strokeWidth="2" />
                <circle cx="18" cy="31" r="4" fill="var(--gold)" opacity="0.3" stroke="var(--gold)" strokeWidth="2" />
                <path d="M28 27 L34 35" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
                <path d="M34 27 L28 35" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <div className="trust-impact__number">
              <CountUp target={250} suffix="+" />
            </div>
            <div className="trust-impact__label">Projects Completed</div>
            <div className="trust-impact__desc">Successful Installations</div>
          </div>

          <div className="trust-impact__card animate-on-scroll">
            <div className="trust-impact__card-icon">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="16" stroke="var(--gold)" strokeWidth="3" fill="var(--gold)" opacity="0.1" />
                <path d="M16 24 L22 30 L32 18" stroke="var(--gold)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="trust-impact__number">
              <CountUp target={100} suffix="%" />
            </div>
            <div className="trust-impact__label">Quality Standard</div>
            <div className="trust-impact__desc">Certified Equipment</div>
          </div>

          <div className="trust-impact__card animate-on-scroll">
            <div className="trust-impact__card-icon">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="18" stroke="var(--gold)" strokeWidth="3" />
                <path d="M24 10 V24 L32 28" stroke="var(--gold)" strokeWidth="3.5" strokeLinecap="round" />
                <circle cx="24" cy="24" r="4" fill="var(--gold)" />
              </svg>
            </div>
            <div className="trust-impact__number">
              <CountUp target={100} suffix="%" />
            </div>
            <div className="trust-impact__label">Reliability</div>
            <div className="trust-impact__desc">On-Time Completion</div>
          </div>
        </div>

        {/* Regional Footprints Section */}
        <div className="trust-impact__footprint animate-on-scroll">
          <div className="trust-impact__footprint-header">
            <h3>Empowering Hills & Plains</h3>
            <p>Our Extensive Presence Across Uttarakhand & Uttar Pradesh</p>
          </div>

          <div className="trust-impact__footprint-regions">
            {/* Uttarakhand Column */}
            <div className="trust-impact__region-col">
              <div className="trust-impact__region-title">
                <span className="region-icon">🏔️</span>
                <h4>Uttarakhand</h4>
              </div>
              <p className="trust-impact__region-desc">
                Engineering specialized solar solutions built to withstand hill grid fluctuations, cloud cover, and seasonal sub-zero temperatures.
              </p>
              <div className="trust-impact__city-tags">
                <span className="city-tag">Dehradun</span>
                <span className="city-tag">Haridwar</span>
                <span className="city-tag">Rishikesh</span>
                <span className="city-tag">Haldwani</span>
                <span className="city-tag">Roorkee</span>
                <span className="city-tag">Nainital</span>
              </div>
            </div>

            {/* Divider line in desktop */}
            <div className="trust-impact__region-divider"></div>

            {/* Uttar Pradesh Column */}
            <div className="trust-impact__region-col">
              <div className="trust-impact__region-title">
                <span className="region-icon">🌾</span>
                <h4>Uttar Pradesh</h4>
              </div>
              <p className="trust-impact__region-desc">
                Optimizing high-yield solar arrays for residential properties, commercial facilities, and farming pumps across the central plains.
              </p>
              <div className="trust-impact__city-tags">
                <span className="city-tag">Noida</span>
                <span className="city-tag">Ghaziabad</span>
                <span className="city-tag">Lucknow</span>
                <span className="city-tag">Meerut</span>
                <span className="city-tag">Kanpur</span>
                <span className="city-tag">Varanasi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustImpact;
