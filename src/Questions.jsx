import Accordion from "./components/Accordion";
import "./Questions.css";

function Questions() {
    return (
        <div className="question-container">
            <h2>FAQ</h2>
        <Accordion title="Can I meet the cats?">
            Yes you can! Please call our number and make an appointment. 🐾
        </Accordion>

        <Accordion title="Can I volunteer?">
            We are currently not taking any volunteers but will be soon. So please stay updated with our site! 🐾
        </Accordion>

        <Accordion title="Are the cats adobtable?">
            Currently no but this will be changing soon! 🐾
        </Accordion>

        <Accordion title="Whats the best way to get in contact?">
            The best way to get in contact is by calling our phone number!
            (012)123-4567 🐾
        </Accordion>
        </div>
    );
}
export default Questions;