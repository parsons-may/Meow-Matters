import Card from "./components/Card";
import "./Cats.css";

function Cats( {goToPage}) {

    const cat = [
        { name: "Lily", image: "/images/Lily.jpeg", summary: "Lily is a snugglebug who needs lots of attention at all times and loves meeting new people!", alt: "Lily the cat smiling at the camera" },
        { name: "Max", image: "/images/Max.jpeg", summary: "Max is a rambunctious kitten! He loves to play with toys and snuggle with his twin sister Ruby!", alt: "Max the cat sitting down and looking at the camera" },
        { name: "Coco", image: "/images/Coco.jpeg", summary: "Coco loves snuggles and naps. Hes a little shy at first but a lover once you get to know him!", alt: "Coco the cat sleeping" },
        { name: "Reice", image: "/images/Reice.jpeg", summary: "Reice is a cuddly kitty who loves her treats. She will give you lots of love as long as she has her treats!", alt: "Reice the cat sitting and looking funny" },
        { name: "Ruby", image: "/images/Ruby.jpeg", summary: "Ruby may be a little shy at first, but when she's with her brother their an unstoppable duo!", alt: "Ruby the cat looking at the camera" },
        { name: "Pumpkin", image: "/images/Pumpkin.jpeg", summary: "Pumpkin may be one of our older (and slightly grumpier) cats, but deep down, he has a soft spot for love — even if he pretends not to show it.", alt: "Pumpkin the cat sleeping"  }
      ];

    return (
        <>
        <section className="cats-page">
        <h1>Meet Our Cats</h1>
            <div className="cards">
            {cat.map((cat, index) => (
                <Card key={index} name={cat.name} image={cat.image} summary={cat.summary} alt={cat.alt} goToPage={goToPage} />
            ))}
            </div>

        </section>
        </>
    )
}

export default Cats;