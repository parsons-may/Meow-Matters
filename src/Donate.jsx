import { useState } from "react";
import "./Donate.css";
import ValidateForm from "./ValidateForm";

function Donate() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [donationPrice, setDonationPrice] = useState("");
    const [customAmount, setCustomAmount] = useState("");
    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const [errors,setErrors] = useState({});

    function handleSubmit(event) {
        event.preventDefault();

        const formData = { name, email, donationPrice, customAmount };
        const newErrors = ValidateForm(formData);

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            const finalDonation = donationPrice === "Other" ? customAmount : donationPrice;
            
            const data = {
                name,
                email,
                donationPrice: finalDonation,
            };
            console.log("You dontated succesfully!", data);
            setFormSubmitted(true);
        }
    }

    return (
        <section className="donate-page">
        <h1>Register to Donate</h1>

        {formSubmitted ? (
        <div className="thank-you-message">
          <h2>Thank you for your donation!</h2>
        </div>
      ) : (

        <form className="menu-form" onSubmit={handleSubmit}>

            <label className="menu-label" htmlFor="name">
                Full Name (Required):
            </label>
            <input className={`menu-input ${errors.name ? "error" : ""}`} type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
             {errors.name && <p className="error-message">{errors.name}</p>}

            <label className="menu-label" htmlFor="email">
                Email (Required):
            </label>
            <input className={`menu-input ${errors.email ? "error" : ""}`} type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
             {errors.email && <p className="error-message">{errors.email}</p>}

            <label className="menu-label" htmlFor="donationPrice">
                Donation (Required):
            </label>
            <select className={`menu-select ${errors.donationPrice ? "error" : ""}`}id="tier" name="tier" value={donationPrice} onChange={(e) => setDonationPrice(e.target.value)}>
            <option value="">Please select</option>
            <option value="5">$5</option>
            <option value="20">$20</option>
            <option value="50">$50</option>
            <option value="Other">Other</option>
            </select>
            {errors.donationPrice && <p className="error-message">{errors.donationPrice}</p>}

            {donationPrice === "Other" && (
                <div className="other-input">
                    <label className="menu-label" htmlFor="customAmount">
                        Please Enter Custom Amount (Required):
                    </label>
                    <input className={`menu-input ${errors.customAmount ? "error" : ""}`} type="text" id="customAmount" name="customAmount" value={customAmount} onChange={(e) => setCustomAmount(e.target.value)} />
                    {errors.customAmount && <p className="error-message">{errors.customAmount}</p>}
                </div>
            )}

            <button className="donate-button" type="submit">
                Donate
            </button>

        </form>
         )}
        </section>
    );
}
export default Donate;