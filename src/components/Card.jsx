import "./Card.css";
import Button from "./Button";

function Card( {name, image, summary, alt, goToPage} ) {
    return (
        <div className="card">
            <img src={image} alt={ alt } className="cat-image" />
            <h2>{name}</h2>
            <p> Meet {name}! {summary} </p>

            
            <Button visual="link" onClick={() => goToPage("/donate")}>
            Donate Here!
            </Button>
        
        </div>
    );
}

export default Card;