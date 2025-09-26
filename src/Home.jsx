import Carousel from "./components/Carousel";
import "./Home.css";

function Home() {
    return (
        <>
        <div className="panel">
        <h1 className="home-title">Welcome to Meow Matters 🐾</h1>
        <p className="about-text">
            We are an organization who loves cats and wants to give them a safe and happy home. 
            To do that we start by making sure they are healthy and ready for their furrever family! Please explore our
            site to meet the many amazing cats currently in our care. 
        </p>
        <p className="donation-text">
        💖 If you'd like to help us continue our mission, consider making a small donation — every bit makes a difference for a cat in need!
        </p>
        </div>
        <Carousel/>
        </>
    )
}
export default Home;