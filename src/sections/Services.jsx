import Card from '../components/Card';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: '👥',
            title: 'Manpower Supply',
            description: 'Skilled, semi-skilled, and unskilled workforce including technicians, electricians, plumbers, painters, carpenters, helpers, and housekeeping staff. Trained and verified personnel with ID and attendance systems.'
        },
        {
            icon: '⚡',
            title: 'Electrical Services',
            description: 'Industrial and commercial electrical installation and maintenance. Power distribution, wiring, lighting solutions, generator, panel board, and cabling works.'
        },
        {
            icon: '🔨',
            title: 'Carpentry Services',
            description: 'Furniture repair and fabrication. Door, window, partition, and false ceiling works. Modular and customized woodwork solutions.'
        },
        {
            icon: '🎨',
            title: 'Painting Services',
            description: 'Interior and exterior painting for industrial, corporate, and residential properties. Texture, enamel, emulsion, and epoxy coatings with professional finish using modern equipment and eco-friendly materials.'
        },
        {
            icon: '🔧',
            title: 'Plumbing Services',
            description: 'Water supply and drainage system installation and maintenance. Leakage detection and pipe fitting works. Bathroom, kitchen, and sanitary system solutions.'
        },
        {
            icon: '🏗️',
            title: 'Civil & Building Maintenance',
            description: 'Complete building repair and renovation. Flooring, tiling, waterproofing, and plastering works. Facility upkeep and annual maintenance contracts (AMC).'
        }
    ];

    return (
        <section className="services" id="services">
            <div className="container">
                <h2 className="section-title">Our Core Services</h2>
                <div className="section-subtitle">
                    Comprehensive Facility Management & Maintenance Solutions
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
