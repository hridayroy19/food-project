import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import UseCart from "../../hooks/UseCart";



const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Pk);
const Payment = () => {
   const [cart] = UseCart();
//    console.log(cart);

const  cartTOtal = cart.reduce( (sum , item) => sum + item.price,0)
// console.log(cartTOtal);
const totalPrice = parseFloat(cartTOtal.toFixed(2));
// console.log(totalPrice);

    return (
        <div>
     <Elements stripe={stripePromise}>
      <CheckoutForm price={totalPrice} cart={cart} />
    </Elements>
        </div>
    );
};

export default Payment;