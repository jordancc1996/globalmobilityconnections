import { useState, useEffect } from 'react';
import Head from 'next/head';
import type { ContactFormData } from '../types';

const HomePage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    serviceInterest: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      serviceInterest: '',
      message: ''
    });
  };

  return (
    <>
      <Head>
        <title>Global Mobility Connections | Citizenship & Residency by Investment</title>
        <meta name="description" content="Marketing agency specializing in lead generation for CBI/RBI companies, immigration law firms, and golden visa specialists." />
        <meta name="keywords" content="citizenship by investment, golden visa, immigration law, lead generation, marketing agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen">
        {/* Navigation */}
        <nav className={`gmc-nav ${isScrolled ? 'scrolled' : ''}`}>
          <div className="gmc-container">
            <div className="gmc-nav-content">
              <div className="gmc-logo">
                <span>global mobility connections</span>
              </div>
              <div className="gmc-nav-links">
                <button onClick={() => scrollToSection('home')} className="gmc-nav-link">Home</button>
                <button onClick={() => scrollToSection('about')} className="gmc-nav-link">About</button>
                <button onClick={() => scrollToSection('how-it-works')} className="gmc-nav-link">How it works</button>
                <button onClick={() => scrollToSection('contact')} className="gmc-nav-link">Contact</button>
                <button onClick={() => scrollToSection('contact')} className="gmc-cta-button">Get In Touch</button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="gmc-hero">
          <div className="gmc-hero-overlay"></div>
          <div className="gmc-container">
            <div className="gmc-hero-content">
              <h1 className="gmc-hero-title">
                WE SECURE APPOINTMENTS WITH<br />
                <span className="gmc-highlight">CBI/RBI PROSPECTS</span> ON<br />
                YOUR BEHALF.
              </h1>
              <div className="gmc-hero-benefits">
                <div className="gmc-benefit">✓ Grow beyond your existing network with qualified exposure</div>
                <div className="gmc-benefit">✓ Book curated meetings without cold outreach</div>
                <div className="gmc-benefit">✓ Build a consistent and scalable client acquisition system</div>
                <div className="gmc-benefit">✓ Save time, close faster, and focus on what you do best</div>
                <div className="gmc-benefit">✓ Designed to fuel long-term business development success</div>
              </div>
              <button onClick={() => scrollToSection('contact')} className="gmc-hero-cta">
                GET IN TOUCH
              </button>
            </div>
          </div>
          <div className="gmc-hero-stats">
            <div className="gmc-container">
              <div className="gmc-stats-content">
                <span className="gmc-stats-text">EMPOWERED OUR CLIENTS TO ATTAIN</span>
                <div className="gmc-stats-numbers">
                  <span>500M+ AUM</span>
                  <span>50M+ investment migration</span>
                  <span>2.5M+ golden visa support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Perfect For Section */}
        <section className="gmc-perfect-for">
          <div className="gmc-container">
            <h2 className="gmc-perfect-title">Perfect For</h2>
            <div className="gmc-perfect-grid">
              <div className="gmc-perfect-item">
                <h3>Immigration Lawyers</h3>
                <p>Law firms specializing in investment visas, citizenship law, and immigration services seeking qualified HNW clients.</p>
              </div>
              <div className="gmc-perfect-item">
                <h3>Citizenship by Investment Companies</h3>
                <p>CBI service providers, second passport consultants, and citizenship planning firms looking to expand their client base.</p>
              </div>
              <div className="gmc-perfect-item">
                <h3>Golden Visa Specialists</h3>
                <p>Residency program consultants, EU golden visa experts, and investment residency advisors targeting affluent investors.</p>
              </div>
              <div className="gmc-perfect-item">
                <h3>Investment Migration Consultants</h3>
                <p>Full-service migration firms offering comprehensive citizenship and residency solutions to international families.</p>
              </div>
              <div className="gmc-perfect-item">
                <h3>Real Estate Investment Firms</h3>
                <p>Property developers and real estate companies with citizenship/residency-linked investment programs.</p>
              </div>
              <div className="gmc-perfect-item">
                <h3>Wealth Management Firms</h3>
                <p>Private banks and wealth managers seeking to offer citizenship and residency planning as part of their services.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="gmc-clients">
          <div className="gmc-container">
            <div className="gmc-client-logos">
              <div className="gmc-client-logo">CBI Partners</div>
              <div className="gmc-client-logo">Golden Visa Group</div>
              <div className="gmc-client-logo">Migration Capital</div>
              <div className="gmc-client-logo">Residency Solutions</div>
              <div className="gmc-client-logo">Investment Migration</div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="gmc-about">
          <div className="gmc-container">
            <div className="gmc-about-content">
              <p className="gmc-intro-text">
                Global Mobility Connections is a marketing agency specializing in prospecting high-net-worth individuals seeking citizenship and residency by investment programs. Leveraging proprietary strategies, we identify, engage, and secure meetings with individuals who perfectly match your target demographic. Whether you're a boutique CBI firm establishing a steady lead pipeline or a large immigration practice requiring high-volume lead generation to fuel your sales teams, we offer scalable, tailored solutions to meet your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="gmc-challenges">
          <div className="gmc-container">
            <h2 className="gmc-section-title">Attracting CBI/RBI prospects requires a specialized approach</h2>
            <div className="gmc-challenges-grid">
              <div className="gmc-challenge">Accurately Qualifying Investment Capacity</div>
              <div className="gmc-challenge">Navigating Complex Compliance Requirements</div>
              <div className="gmc-challenge">Balancing scalability with Personalization</div>
              <div className="gmc-challenge">Establishing Trust and Credibility Quickly</div>
              <div className="gmc-challenge">Maintaining Interest Through Long Sales Cycles</div>
            </div>
          </div>
        </section>

        {/* CHARM Methodology */}
        <section id="how-it-works" className="gmc-charm">
          <div className="gmc-container">
            <h2 className="gmc-section-title">That's why we have created the charm approach</h2>
            <div className="gmc-charm-steps">
              <div className="gmc-charm-step">
                <h3>Crafting a Flawless Impression</h3>
                <p>We fine-tune your online presence to evoke instant rapport with potential CBI/RBI clients, making them feel they've found their perfect migration partner.</p>
              </div>
              <div className="gmc-charm-step">
                <h3>Hyper-Precise Prospect Targeting</h3>
                <p>We meticulously identify financially qualified prospects seeking global mobility solutions, ensuring they precisely match the demographic of those genuinely interested in citizenship and residency programs.</p>
              </div>
              <div className="gmc-charm-step">
                <h3>Anchor Initial Engagement</h3>
                <p>We design a compelling engagement strategy to captivate your ideal prospects' attention and prompt them to respond, initiating conversations about their mobility goals.</p>
              </div>
              <div className="gmc-charm-step">
                <h3>Reach Their Curiosity Naturally</h3>
                <p>After the initial contact, we inspire engaging conversations that naturally stimulate the prospect's curiosity to explore citizenship and residency investment opportunities.</p>
              </div>
              <div className="gmc-charm-step">
                <h3>Mobilize a Meeting</h3>
                <p>With the prospect's interest piqued, we facilitate an invitation for a consultation call or meeting, and schedule it directly in your calendar.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="gmc-services">
          <div className="gmc-container">
            <h2 className="gmc-section-title">PROFESSIONALS WE SERVE</h2>
            <div className="gmc-services-grid">
              <div className="gmc-service">
                <span className="gmc-service-icon">🏛️</span>
                <h3>CITIZENSHIP BY INVESTMENT</h3>
                <p>Professionals active in second citizenship programs, passport services, Caribbean and European CBI programs, and citizenship planning.</p>
              </div>
              <div className="gmc-service">
                <span className="gmc-service-icon">🏠</span>
                <h3>RESIDENCY PROGRAMS</h3>
                <p>Professionals in golden visa programs, investment residency, EU residency schemes, and permanent residence solutions.</p>
              </div>
              <div className="gmc-service">
                <span className="gmc-service-icon">⚖️</span>
                <h3>IMMIGRATION LAW</h3>
                <p>Professionals dedicated to immigration legal services, compliance consulting, visa applications, and regulatory guidance.</p>
              </div>
              <div className="gmc-service">
                <span className="gmc-service-icon">🏢</span>
                <h3>GLOBAL REAL ESTATE</h3>
                <p>Professionals in investment property, developer programs, real estate funds, and property-based immigration solutions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="gmc-contact">
          <div className="gmc-container">
            <div className="gmc-contact-content">
              <div className="gmc-contact-text">
                <h2>Ready to begin generating qualified CBI/RBI leads?</h2>
                <p>Schedule a confidential consultation to discuss your lead generation goals and explore how we can build a reliable pipeline of high-net-worth prospects for your practice.</p>
                <div className="gmc-contact-info">
                  <h3>Get in touch</h3>
                  <div className="gmc-contact-details">
                    <div className="gmc-contact-item">
                      <strong>Phone</strong><br />
                      +1 (555) 123-4567
                    </div>
                    <div className="gmc-contact-item">
                      <strong>Email</strong><br />
                      contact@globalmobilityconnections.com
                    </div>
                    <div className="gmc-contact-item">
                      <strong>Locations</strong><br />
                      London • Dubai • Singapore • New York
                    </div>
                  </div>
                </div>
              </div>
              <form className="gmc-form" onSubmit={handleSubmit}>
                <div className="gmc-form-row">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="gmc-input"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="gmc-input"
                    required
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="gmc-input"
                  required
                />
                <select
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleInputChange}
                  className="gmc-select"
                  required
                >
                  <option value="">Service Interest</option>
                  <option value="citizenship-by-investment">Citizenship by Investment Lead Generation</option>
                  <option value="golden-visa">Golden Visa Prospects</option>
                  <option value="immigration-law">Immigration Law Clients</option>
                  <option value="real-estate">Real Estate Investment Leads</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Tell us about your lead generation needs..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="gmc-textarea"
                  rows={5}
                  required
                ></textarea>
                <button type="submit" className="gmc-submit-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="gmc-footer">
          <div className="gmc-container">
            <div className="gmc-footer-content">
              <div className="gmc-footer-logo">
                <span>global mobility connections</span>
              </div>
              <div className="gmc-footer-text">
                <p>© 2024 Global Mobility Connections</p>
                <p>Marketing Agency for CBI/RBI Lead Generation</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;

