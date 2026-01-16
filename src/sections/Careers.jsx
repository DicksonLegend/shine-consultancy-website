import { useState } from 'react';
import Button from '../components/Button';
import './Careers.css';

const Careers = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        skill: ''
    });

    const phoneNumber = '+919976363114';

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleWhatsAppApply = () => {
        const message = `Hello, I want to join your manpower team.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nSkill/Trade: ${formData.skill}`;
        const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className="careers" id="careers">
            <div className="container">
                <h2 className="section-title">Work Opportunities</h2>
                <div className="section-subtitle">
                    Join Our Growing Team of Skilled Professionals
                </div>

                <div className="careers-content">
                    <div className="careers-info">
                        <div className="info-icon">💼</div>
                        <h3>Looking for Work?</h3>
                        <p>
                            We are always looking for skilled technicians, electricians, painters, plumbers, carpenters, and general workers to join our manpower team. If you have experience and are looking for stable work opportunities with corporate clients, we'd love to hear from you.
                        </p>
                        <ul className="careers-benefits">
                            <li>Work with reputed MNCs and corporate clients</li>
                            <li>Regular work opportunities</li>
                            <li>Fair compensation</li>
                            <li>Safe working environment</li>
                        </ul>
                    </div>

                    <div className="careers-form-container">
                        <h3 className="form-title">Apply Now</h3>
                        <p className="form-description">Fill in your details and apply via WhatsApp</p>

                        <div className="careers-form">
                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="skill">Skill / Trade *</label>
                                <select
                                    id="skill"
                                    name="skill"
                                    value={formData.skill}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select your skill</option>
                                    <option value="Electrician">Electrician</option>
                                    <option value="Plumber">Plumber</option>
                                    <option value="Painter">Painter</option>
                                    <option value="Carpenter">Carpenter</option>
                                    <option value="Mason">Mason</option>
                                    <option value="Helper">Helper</option>
                                    <option value="Housekeeping">Housekeeping</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <Button
                                variant="whatsapp"
                                onClick={handleWhatsAppApply}
                                icon="💬"
                            >
                                Apply via WhatsApp
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Careers;
