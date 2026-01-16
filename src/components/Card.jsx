import './Card.css';

const Card = ({ icon, title, description, children }) => {
    return (
        <div className="card">
            {icon && <div className="card-icon">{icon}</div>}
            {title && <h3 className="card-title">{title}</h3>}
            {description && <p className="card-description">{description}</p>}
            {children}
        </div>
    );
};

export default Card;
