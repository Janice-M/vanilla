import React from "react";
import {loadStripe} from  "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "./checkoutForm";
import "./App.css";


// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.

const promise = loadStripe ("pk_test_51IvNFmGcDI5Ai1sCBr14BrV7DdRqyE2AwU5QEgNNunmIvfn4aOdScK50NukY6U69xuNhOQ9XKk2Psua5d0DHpWHp00sDydMWBn");

export default function App(){
  return (
    <div className="App">
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  )
}
