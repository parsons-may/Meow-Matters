function ValidateForm ( {name, email, donationPrice, customAmount} ) {
    const errors = {};

    if (!name.trim()) {
        errors.name = "Full name is required.";
    }

    if (!email.trim()) {
        errors.email = "Email is required.";
    } else if (!email.includes("@")) {
        errors.email = "Please include a valid email";
    }

    if (!donationPrice) {
        errors.donationPrice = "Donation amount is required";
    }

    if (donationPrice === "Other") {
        if (!customAmount.trim()) {
            errors.customAmount = "Dollar amount is required.";
        }
    }

     return errors;
}

export default ValidateForm;