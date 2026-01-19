import { Target, BadgeCheck, ClipboardList, ShieldCheck, Clock, PhoneCall } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const strengths = [
        {
            icon: <Target size={28} />,
            title: 'Single-window Solution',
            description: 'One-stop solution for all facility services'
        },
        {
            icon: <BadgeCheck size={28} />,
            title: 'Skilled & Verified Manpower',
            description: 'Experienced workforce and quality supervision'
        },
        {
            icon: <ClipboardList size={28} />,
            title: 'Flexible Contracts',
            description: 'Material and labour contracts available'
        },
        {
            icon: <ShieldCheck size={28} />,
            title: 'Safety & Quality Assurance',
            description: 'Strong emphasis on safety, quality, and accountability'
        },
        {
            icon: <Clock size={28} />,
            title: 'Timely Project Completion',
            description: 'On-time delivery with assured quality'
        },
        {
            icon: <PhoneCall size={28} />,
            title: '24/7 Service Support',
            description: 'Round-the-clock support for urgent requirements'
        }
    ];

    return (
        <section className="why-choose-us" id="why-choose-us">
            <div className="container">
                <h2 className="section-title">Why Choose Us</h2>
                <div className="section-subtitle">
                    Our Strengths & Competitive Advantages
                </div>

                <div className="strengths-grid">
                    {strengths.map((strength, index) => (
                        <div key={index} className="strength-item">
                            <div className="strength-icon">{strength.icon}</div>
                            <h3 className="strength-title">{strength.title}</h3>
                            <p className="strength-description">{strength.description}</p>
                        </div>
                    ))}
                </div>

                <div className="clientele-section">
                    <h3 className="clientele-title">Our Clientele</h3>
                    <p className="clientele-text">
                        We proudly serve a growing list of corporate clients, industrial units, and commercial establishments who trust us for our professionalism, reliability, and long-term service support.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
