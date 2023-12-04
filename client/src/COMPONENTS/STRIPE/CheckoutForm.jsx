import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      console.error(error);
      setError(error.message);
    } else {
      console.log(token);
      // Envoyez le token au serveur pour effectuer le paiement
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Card details
          <CardElement
            options={{
              hidePostalCode: true,
            }}
          />
        </label>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
