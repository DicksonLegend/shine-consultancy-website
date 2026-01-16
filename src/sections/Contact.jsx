import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
    const contactInfo = {
        address: 'PO NO.1, A I B E A NAGAR, 4th STREET, A COLONY, PARAVAI, MADURAI',
        phone: '+919976363114',
        email: 'ShineConsultancy@gmail.com'
    };

    const whatsappMessage = 'Hello, I would like to inquire about your services.';

    return (
        <section className="contact" id="contact">
            <div className="container">
                <h2 className="section-title">Contact Us</h2>
                <div className="section-subtitle">
                    Get in Touch with Our Team
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-card">
                            <div className="info-icon">👤</div>
                            <h3>Proprietor</h3>
                            <p className="info-text">Mr. Antony Babu</p>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">📍</div>
                            <h3>Address</h3>
                            <p className="info-text">{contactInfo.address}</p>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">📞</div>
                            <h3>Phone</h3>
                            <p className="info-text">
                                <a href={`tel:${contactInfo.phone}`} className="contact-link">
                                    {contactInfo.phone}
                                </a>
                            </p>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">✉️</div>
                            <h3>Email</h3>
                            <p className="info-text">
                                <a href={`mailto:${contactInfo.email}`} className="contact-link">
                                    {contactInfo.email}
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="contact-actions">
                        <h3 className="actions-title">Quick Contact</h3>
                        <p className="actions-description">
                            Reach out to us directly through your preferred communication method
                        </p>

                        <div className="action-buttons">
                            <Button
                                variant="primary"
                                href={`tel:${contactInfo.phone}`}
                                icon="📞"
                            >
                                Call Now
                            </Button>

                            <Button
                                variant="whatsapp"
                                href={`https://wa.me/${contactInfo.phone.replace(/\+/g, '')}?text=${encodeURIComponent(whatsappMessage)}`}
                                icon="💬"
                            >
                                WhatsApp Us
                            </Button>

                            <Button
                                variant="outline"
                                href={`mailto:${contactInfo.email}`}
                                icon="✉️"
                            >
                                Send Email
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="map-container">
                    <h3 className="map-title">Our Location</h3>
                    <div className="map-wrapper">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.3045678901234!2d78.0!3d9.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTQnMDAuMCJOIDc4wrAwMCcwMC4wIkU!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Shine Consultancy Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
