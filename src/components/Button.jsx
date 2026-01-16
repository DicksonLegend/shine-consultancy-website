import './Button.css';

const Button = ({ children, variant = 'primary', onClick, href, icon }) => {
  const buttonClass = `btn btn-${variant}`;
  
  if (href) {
    return (
      <a href={href} className={buttonClass} target={href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
        {icon && <span className="btn-icon">{icon}</span>}
        {children}
      </a>
    );
  }
  
  return (
    <button className={buttonClass} onClick={onClick}>
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
