import { useState, useEffect } from 'react';
import Button from '../components/Button';
import './Hero.css';
import logoImg from '../assets/shineconsultancy-logo.png';

const Hero = () => {
    const phoneNumber = '+919976363114';
    const whatsappMessage = 'Hello, I would like to inquire about your services.';
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle navbar scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Navigation Bar */}
            <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
                <div className="container navbar-container">
                    <div className="nav-logo">
                        <img src={logoImg} alt="Shine Consultancy" className="nav-logo-img" />
                        <span className="nav-logo-text">SHINE CONSULTANCY</span>
                    </div>

                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#why-choose-us">Why Us</a></li>
                        <li><a href="#careers">Careers</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                    <div className="nav-buttons">
                        <a href={`tel:${phoneNumber}`} className="nav-btn nav-btn-outline">
                            📞 Call Now
                        </a>
                        <a
                            href={`https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${encodeURIComponent(whatsappMessage)}`}
                            className="nav-btn nav-btn-filled"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            💬 WhatsApp
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="mobile-menu-btn" onClick={() => document.querySelector('.nav-links').classList.toggle('active')}>
                        ☰
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero" id="home">
                <div className="container">
                    <div className="hero-grid">
                        {/* Left Content */}
                        <div className="hero-content">
                            <h1 className="hero-title">
                                Reliable <span className="highlight">Manpower</span>
                                <br />& Facility
                                <br />Management
                                <br />Services
                            </h1>

                            <p className="hero-description">
                                Your trusted partner for comprehensive workforce solutions and facility maintenance across Tamil Nadu. Professional, reliable, and always on time.
                            </p>

                            <div className="hero-buttons">
                                <a href={`tel:${phoneNumber}`} className="hero-btn hero-btn-outline">
                                    📞 Call Now
                                </a>
                                <a
                                    href={`https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${encodeURIComponent(whatsappMessage)}`}
                                    className="hero-btn hero-btn-filled"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    💬 WhatsApp Us
                                </a>
                            </div>
                        </div>

                        {/* Right Graphic */}
                        <div className="hero-graphic">
                            <div className="graphic-circle">
                                <div className="graphic-center">
                                    <span className="center-icon">📋</span>
                                </div>

                                {/* Orbiting Icons */}
                                <div className="orbit-icon orbit-1">
                                    <span>👥</span>
                                </div>
                                <div className="orbit-icon orbit-2">
                                    <span>🔧</span>
                                </div>
                                <div className="orbit-icon orbit-3">
                                    <span>📄</span>
                                </div>
                            </div>

                            {/* Decorative rings */}
                            <div className="deco-ring ring-1"></div>
                            <div className="deco-ring ring-2"></div>
                        </div>
                    </div>
                </div>

                {/* Wave Shape */}
                <div className="hero-wave">
                    <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                        <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="#f5f7fa"></path>
                    </svg>
                </div>
            </section>
        </>
    );
};

export default Hero;
