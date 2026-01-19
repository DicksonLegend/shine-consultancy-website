import { Target, Rocket } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <h2 className="section-title">About Us</h2>
                <div className="section-subtitle">
                    Professional Facility Management & Manpower Solutions
                </div>

                <div className="about-content">
                    <p className="about-text">
                        <strong>Shine Consultancy</strong> is a professionally managed service provider specializing in manpower supply, electrical services, carpentry, painting, plumbing, and civil building maintenance. Founded and led by <strong>Mr. Antony Babu</strong>, we have earned a reputation for delivering quality workmanship, reliable service, and on-time project completion.
                    </p>
                    <p className="about-text">
                        We serve Multi-National Companies (MNCs), Corporate Offices, Industrial Factories, and Commercial Establishments, offering both material-inclusive and labour-only contracts, tailored to meet our clients' specific operational needs.
                    </p>
                </div>

                <div className="vision-mission">
                    <div className="vm-card">
                        <div className="vm-icon"><Target size={32} /></div>
                        <h3>Our Vision</h3>
                        <p>
                            To be the most trusted and preferred service partner for corporate and industrial clients, providing reliable, efficient, and sustainable facility and maintenance solutions.
                        </p>
                    </div>

                    <div className="vm-card">
                        <div className="vm-icon"><Rocket size={32} /></div>
                        <h3>Our Mission</h3>
                        <ul className="mission-list">
                            <li>To deliver high-quality services through skilled manpower and technical expertise</li>
                            <li>To ensure customer satisfaction through transparency, safety, and timely execution</li>
                            <li>To continuously improve and innovate in facility management and maintenance services</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
