import { useEffect, useRef } from 'react';
import './Process.css';

const STEPS = [
  {
    number: '01',
    icon: '📞',
    title: 'Contact to Message',
    description: 'Reach out to our specialist team via phone or form submission.',
  },
  {
    number: '02',
    icon: '🏫',
    title: 'Training & Consultation',
    description: 'Receive clear, free instruction and site evaluation.',
  },
  {
    number: '03',
    icon: '📋',
    title: 'Sign & Integration',
    description: 'Complete transparent legal confirmation and panel engineering setup.',
  },
  {
    number: '04',
    icon: '🤝',
    title: 'System Assembly',
    description: 'Fast, zero-friction local structural installation.',
  },
  {
    number: '05',
    icon: '⚡',
    title: 'Energy Independent',
    description: 'Switch on generation and start tracking your dynamic daily utility drops.',
  },
  {
    number: '06',
    icon: '🔌',
    title: 'Connect to Grid',
    description: 'Synchronize the Net Meter directly to the official electricity grid.',
  },
];

const Process = () => {
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

    const items = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="process" id="process" ref={sectionRef}>
      <div className="container">
        <h2 className="section-heading">Our Process</h2>

        <div className="process__timeline stagger-children">
          {STEPS.map((step, index) => (
            <div key={index} className="process__step animate-on-scroll">
              {/* Connector arrow (not on last) */}
              {index < STEPS.length - 1 && (
                <div className="process__connector">
                  <svg viewBox="0 0 40 12" fill="none" aria-hidden="true" role="img">
                    <path d="M0 6 L32 6" stroke="var(--gold)" strokeWidth="2" strokeDasharray="4 3" />
                    <path d="M28 2 L34 6 L28 10" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}

              <div className="process__step-number">Step {step.number}</div>

              <div className="process__step-circle">
                <span className="process__step-icon">{step.icon}</span>
              </div>

              <h3 className="process__step-title">{step.title}</h3>
              <p className="process__step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
