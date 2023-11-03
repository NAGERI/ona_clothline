import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
} from "./payment.styles";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { clearAllItemsFromCart } from "../../store/cart/cart.reducer";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const currentUser = useSelector(selectCurrentUser);
  const amount = useSelector(selectCartTotal);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const CSuccessfulPayment = "succeeded";
  const dispatch = useDispatch();
  const handleClearCart = () => dispatch(clearAllItemsFromCart(0));

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!elements || !stripe) {
      return;
    }
    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount * 100,
      }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
          email: currentUser ? currentUser.email : "guest@email.com",
        },
      },
    });

    setIsProcessingPayment(false);
    if (paymentResult.error) {
      alert(paymentResult.error.message);
      console.log(paymentResult.error);
    }
    if (paymentResult.paymentIntent.status === CSuccessfulPayment) {
      alert("Success");
      handleClearCart();
    }
  };
  return (
    <PaymentFormContainer>
      <h2>Credit Card Payment:</h2>
      <FormContainer>
        <CardElement />
      </FormContainer>
      <PaymentButton
        label="Confirm"
        isLoading={isProcessingPayment || amount === 0}
        button_type={BUTTON_TYPE_CLASSES.inverted}
        onClick={paymentHandler}
      >
        Pay Now
      </PaymentButton>
      {/* <PaymentButton onClick={handleClearCart}> Clear Cart</PaymentButton> */}
    </PaymentFormContainer>
  );
};

export default PaymentForm;
