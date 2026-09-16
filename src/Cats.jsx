import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./Cats.css";

function Cats({ goToPage }) {
    const [cats, setCats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/api/cats")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Unable to load cats.");
                }

                return response.json();
            })
            .then((data) => {
                setCats(data);
                setLoading(false);
            })
            .catch((requestError) => {
                console.error(requestError);
                setError("Unable to load cats. Please try again later.");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading cats...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <section className="cats-page">
            <h1>Meet Our Cats</h1>

            <div className="cards">
                {cats.map((cat) => (
                    <Card
                        key={cat.id}
                        name={cat.name}
                        image={cat.image}
                        summary={cat.summary}
                        alt={cat.alt}
                        goToPage={goToPage}
                    />
                ))}
            </div>
        </section>
    );
}

export default Cats;