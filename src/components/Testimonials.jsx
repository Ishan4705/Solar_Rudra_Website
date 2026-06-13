import { useEffect, useState, useRef } from 'react';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    name: 'Rajesh Sharma',
    location: 'Dehradun, Uttarakhand',
    rating: 5,
    text: 'My monthly bill dropped from ₹8,000 to ₹400. Excellent service by the Rudra team!',
    initials: 'RS',
  },
  {
    name: 'Amit Yadav',
    location: 'Lucknow, Uttar Pradesh',
    rating: 5,
    text: 'The Zero Investment option was a lifesaver for our family. Highly professional setup.',
    initials: 'AY',
  },
  {
    name: 'Preeti Rawat',
    location: 'Haridwar, Uttarakhand',
    rating: 5,
    text: 'Quick installation and the team handled all the paperwork for the PM Surya Ghar subsidy.',
    initials: 'PR',
  },
  {
    name: 'Vijay Pratap Singh',
    location: 'Noida, Uttar Pradesh',
    rating: 5,
    text: 'Reliable energy even during the rainy season. Rudra is the best in the business.',
    initials: 'VP',
  },
  {
    name: 'Karan Negi',
    location: 'Rishikesh, Uttarakhand',
    rating: 5,
    text: 'Highly professional team. The net metering process was completed smoothly.',
    initials: 'KN',
  },
  {
    name: 'Sunita Verma',
    location: 'Ghaziabad, Uttar Pradesh',
    rating: 5,
    text: 'Very happy with the prompt maintenance and support team. Recommended to all my relatives.',
    initials: 'SV',
  },
  {
    name: 'Sanjay Joshi',
    location: 'Haldwani, Uttarakhand',
    rating: 5,
    text: 'Excellent panel quality and performance. Generating more units than expected!',
    initials: 'SJ',
  },
  {
    name: 'Ramesh Chaudhary',
    location: 'Meerut, Uttar Pradesh',
    rating: 5,
    text: 'Best investment for our cold storage unit. Power cuts are no longer an issue for us.',
    initials: 'RC',
  },
  {
    name: 'Pooja Bhandari',
    location: 'Roorkee, Uttarakhand',
    rating: 5,
    text: 'Saves a lot of money and contributes to clean energy. A win-win decision.',
    initials: 'PB',
  },
  {
    name: 'Alok Pandey',
    location: 'Kanpur, Uttar Pradesh',
    rating: 5,
    text: 'Rudra Solar\'s subsidy assistance made the process extremely easy and hassle-free.',
    initials: 'AP',
  },
  {
    name: 'Deepak Shah',
    location: 'Nainital, Uttarakhand',
    rating: 5,
    text: 'Solar panels are working amazingly well despite the cold climate and hill cloud cover.',
    initials: 'DS',
  },
  {
    name: 'Meena Gupta',
    location: 'Varanasi, Uttar Pradesh',
    rating: 5,
    text: 'Our home\'s electricity bill is practically zero now. Outstanding post-sales service.',
    initials: 'MG',
  },
  {
    name: 'Harish Bisht',
    location: 'Almora, Uttarakhand',
    rating: 5,
    text: 'Very helpful staff who answered all our queries patiently and visited our site multiple times.',
    initials: 'HB',
  },
  {
    name: 'Manoj Dwivedi',
    location: 'Prayagraj, Uttar Pradesh',
    rating: 5,
    text: 'Smooth net-metering integration. The team handled everything from start to finish.',
    initials: 'MD',
  },
  {
    name: 'Neelam Pant',
    location: 'Pithoragarh, Uttarakhand',
    rating: 5,
    text: 'We get continuous power backup even during heavy hill grid failures. Extremely reliable!',
    initials: 'NP',
  },
  {
    name: 'Ravi Tripathi',
    location: 'Gorakhpur, Uttar Pradesh',
    rating: 5,
    text: 'Top notch certified solar equipment installed at my shop. Operational costs are down.',
    initials: 'RT',
  },
  {
    name: 'Kavita Arya',
    location: 'Kotdwar, Uttarakhand',
    rating: 5,
    text: 'Great post-installation support. They clean the panels regularly as part of the AMC.',
    initials: 'KA',
  },
  {
    name: 'Anil Saxena',
    location: 'Bareilly, Uttar Pradesh',
    rating: 5,
    text: 'The solar calculator estimation was very accurate. No hidden charges or delays.',
    initials: 'AS',
  },
  {
    name: 'Devendra Singh',
    location: 'Bhimtal, Uttarakhand',
    rating: 5,
    text: 'Eco-friendly energy for my homestay. Customers love the green initiative and backup.',
    initials: 'DS',
  },
  {
    name: 'Sudha Mishra',
    location: 'Agra, Uttar Pradesh',
    rating: 5,
    text: 'Great experience with the field workers. Very polite and did a neat wiring job.',
    initials: 'SM',
  },
  {
    name: 'Gaurav Semwal',
    location: 'Tehri, Uttarakhand',
    rating: 5,
    text: 'The 3 kW solar system is more than enough for our joint family requirements.',
    initials: 'GS',
  },
  {
    name: 'Shalini Rastogi',
    location: 'Jhansi, Uttar Pradesh',
    rating: 5,
    text: 'Best customer service. They guided us on energy efficiency and power optimization too.',
    initials: 'SR',
  },
  {
    name: 'Suresh Chandra',
    location: 'Pauri, Uttarakhand',
    rating: 5,
    text: 'We now have complete power independence in our remote village. Very happy with the choice.',
    initials: 'SC',
  },
  {
    name: 'Kamlesh Pathak',
    location: 'Mathura, Uttar Pradesh',
    rating: 5,
    text: 'We installed it on our dairy farm. Reduced operational costs by 40% immediately.',
    initials: 'KP',
  },
  {
    name: 'Vivek Thapliyal',
    location: 'Srinagar, Uttarakhand',
    rating: 5,
    text: 'Rudra Solar Solutions provided a highly customized engineering solution for our roof shape.',
    initials: 'VT',
  },
];

const TestimonialCard = ({ name, location, rating, text, initials }) => (
  <div className="testimonial-card">
    <div className="testimonial-card__header">
      <div className="testimonial-card__avatar">
        {initials}
      </div>
      <div className="testimonial-card__meta">
        <h4 className="testimonial-card__name">{name}</h4>
        <p className="testimonial-card__location">{location}</p>
      </div>
      <span className="testimonial-card__quote-icon">“</span>
    </div>
    <div className="testimonial-card__stars">
      {'★'.repeat(rating)}
      {'☆'.repeat(5 - rating)}
    </div>
    <p className="testimonial-card__text">{text}</p>
  </div>
);

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileIndex, setMobileIndex] = useState(0);
  const sectionRef = useRef(null);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // IntersectionObserver for scroll fade-in
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

  // Automatic slide timing for Mobile Carousel
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setMobileIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 4000); // changes card every 4s

    return () => clearInterval(interval);
  }, [isMobile]);

  const handleDotClick = (index) => {
    setMobileIndex(index);
  };

  const handlePrevSlide = () => {
    setMobileIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNextSlide = () => {
    setMobileIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  };

  // Splitting testimonials for dual desktop marquee rows
  const row1 = TESTIMONIALS.slice(0, 12);
  const row2 = TESTIMONIALS.slice(12);

  return (
    <section className="testimonials" id="testimonials" ref={sectionRef}>
      <div className="container">
        <h2 className="section-heading">Client Stories</h2>

        {!isMobile ? (
          /* Desktop/Tablet View: Rolling Marquees */
          <div className="testimonials__desktop animate-on-scroll">
            {/* Row 1: Rolling Left */}
            <div className="testimonials__marquee-row">
              <div className="testimonials__marquee-track testimonials__marquee-track--left">
                {/* Original set */}
                <div className="testimonials__marquee-group">
                  {row1.map((item, idx) => (
                    <TestimonialCard key={`r1-orig-${idx}`} {...item} />
                  ))}
                </div>
                {/* Duplicated set for seamless loop */}
                <div className="testimonials__marquee-group" aria-hidden="true">
                  {row1.map((item, idx) => (
                    <TestimonialCard key={`r1-dup-${idx}`} {...item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2: Rolling Right */}
            <div className="testimonials__marquee-row">
              <div className="testimonials__marquee-track testimonials__marquee-track--right">
                {/* Original set */}
                <div className="testimonials__marquee-group">
                  {row2.map((item, idx) => (
                    <TestimonialCard key={`r2-orig-${idx}`} {...item} />
                  ))}
                </div>
                {/* Duplicated set for seamless loop */}
                <div className="testimonials__marquee-group" aria-hidden="true">
                  {row2.map((item, idx) => (
                    <TestimonialCard key={`r2-dup-${idx}`} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Mobile View: Auto-sliding Carousel */
          <div className="testimonials__mobile animate-on-scroll">
            <div className="testimonials__carousel-viewport">
              <div 
                className="testimonials__carousel-track"
                style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
              >
                {TESTIMONIALS.map((item, idx) => (
                  <div className="testimonials__carousel-slide" key={`slide-${idx}`}>
                    <TestimonialCard {...item} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="testimonials__carousel-controls">
              <button 
                className="testimonials__control-btn testimonials__control-btn--prev"
                onClick={handlePrevSlide}
                aria-label="Previous Slide"
              >
                ❮
              </button>
              <div className="testimonials__carousel-dots">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={`dot-${idx}`}
                    className={`testimonials__dot ${mobileIndex === idx ? 'testimonials__dot--active' : ''}`}
                    onClick={() => handleDotClick(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button 
                className="testimonials__control-btn testimonials__control-btn--next"
                onClick={handleNextSlide}
                aria-label="Next Slide"
              >
                ❯
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
