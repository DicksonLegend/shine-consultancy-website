import Button from '../components/Button';
import './Hero.css';

const Hero = () => {
    const phoneNumber = '+919976363114';
    const whatsappMessage = 'Hello, I would like to inquire about your services.';

    return (
        <section className="hero" id="home">
            {/* Animated Background Elements */}
            <div className="hero-bg-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>

            <div className="container">
                <div className="hero-content">
                    {/* Logo and Branding */}
                    <div className="logo-container">
                        <div className="logo-wrapper">
                            <div className="logo">
                                <div className="logo-icon">S</div>
                                <div className="logo-ring"></div>
                                <div className="logo-ring-2"></div>
                            </div>
                        </div>
                        <h1 className="company-name">
                            <span className="company-name-main">SHINE</span>
                            <span className="company-name-sub">CONSULTANCY</span>
                        </h1>
                    </div>

                    {/* Tagline with Animation */}
                    <div className="tagline-wrapper">
                        <div className="tagline-accent"></div>
                        <p className="tagline">Reliable Manpower & Facility Management Services</p>
                        <div className="tagline-accent"></div>
                    </div>

                    {/* Description */}
                    <p className="hero-description">
                        Professional service provider specializing in manpower supply, electrical services, and complete facility maintenance for <strong>MNCs, corporate offices, and industrial establishments</strong>.
                    </p>

                    {/* Statistics Section */}
                    <div className="hero-stats">
                        <div className="stat-item">
                            <div className="stat-icon">✅</div>
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">Available</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-icon">🏆</div>
                            <div className="stat-number">100+</div>
                            <div className="stat-label">Projects</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-icon">⚡</div>
                            <div className="stat-number">6</div>
                            <div className="stat-label">Core Services</div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="cta-buttons">
                        <Button
                            variant="primary"
                            href={`tel:${phoneNumber}`}
                            icon="📞"
                        >
                            Call Now
                        </Button>
                        <Button
                            variant="whatsapp"
                            href={`https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${encodeURIComponent(whatsappMessage)}`}
                            icon="💬"
                        >
                            WhatsApp Us
                        </Button>
                    </div>

                    {/* Trust Badges */}
                    <div className="trust-badges">
                        <div className="badge">
                            <span className="badge-icon">🛡️</span>
                            <span className="badge-text">Verified Manpower</span>
                        </div>
                        <div className="badge">
                            <span className="badge-icon">⏱️</span>
                            <span className="badge-text">On-Time Delivery</span>
                        </div>
                        <div className="badge">
                            <span className="badge-icon">👔</span>
                            <span className="badge-text">Corporate Trusted</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
