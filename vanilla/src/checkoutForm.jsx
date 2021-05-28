import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements} from "@stripe/react-stripe-js";

export default function CheckoutForm(){
    const [succeeded, serSucceeded ] = useState(false);
    const [error , setError ] = useState(null);
    const [processing, setProcessing] = useState ()
}