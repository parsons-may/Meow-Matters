import "./Button.css";

function Button ({
    children, 
    type = "button", 
    visual = "button", 
    onClick, 
    ...props 
  }) {
    const className = visual === "link" ? "btn-link" : "btn-button";
  
    return (
      <button type={type} className={className} onClick={onClick} {...props}>
        {children}
      </button>
    );
  }

  export default Button;