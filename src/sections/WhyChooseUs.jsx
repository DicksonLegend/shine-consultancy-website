import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const strengths = [
        {
            icon: '🎯',
            title: 'Single-window Solution',
            description: 'One-stop solution for all facility services'
        },
        {
            icon: '✅',
            title: 'Skilled & Verified Manpower',
            description: 'Experienced workforce and quality supervision'
        },
        {
            icon: '📋',
            title: 'Flexible Contracts',
            description: 'Material and labour contracts available'
        },
        {
            icon: '🛡️',
            title: 'Safety & Quality Assurance',
            description: 'Strong emphasis on safety, quality, and accountability'
        },
        {
            icon: '⏱️',
            title: 'Timely Project Completion',
            description: 'On-time delivery with assured quality'
        },
        {
            icon: '📞',
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
