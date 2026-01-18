import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
    const contactInfo = {
        address: 'SF No.588/1, A2C, No.2, Thiru Nagar, Andhivadi, HOSUR - 635 110, TN',
        phone: '+919976363114',
        email: 'shineconsultancy114@gmail.com'
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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.1234567890123!2d77.8252!3d12.7409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae70050e5d44d5%3A0x4d13c4e2bce0f10d!2sThiru%20Nagar%2C%20Hosur%2C%20Tamil%20Nadu%20635110!5e0!3m2!1sen!2sin!4v1705564173000"
                            width="100%"
                            height="280"
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
