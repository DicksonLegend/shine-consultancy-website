import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-title">SHINE CONSULTANCY</h3>
                        <p className="footer-description">
                            Professional manpower supply and facility management services for corporate and industrial clients.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Our Services</h4>
                        <ul className="footer-list">
                            <li>Manpower Supply</li>
                            <li>Electrical Services</li>
                            <li>Carpentry Services</li>
                            <li>Painting Services</li>
                            <li>Plumbing Services</li>
                            <li>Civil & Building Maintenance</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Contact Information</h4>
                        <ul className="footer-list">
                            <li>📍 Hosur, Tamil Nadu - 635 110</li>
                            <li>📞 +919976363114</li>
                            <li>✉️ shineconsultancy114@gmail.com</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Shine Consultancy. All rights reserved.</p>
                    <p className="footer-proprietor">Proprietor: Mr. Antony Babu</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
