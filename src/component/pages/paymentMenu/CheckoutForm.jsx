import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = ({ price, cart }) => {
  // console.log(cart);
  const stripe = useStripe();
  const elements = useElements();

  const [cartError, setCartError] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCartError(error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <div className="max-w-screen-2xl font-mono my-20 container mx-auto xl:px-36 px-4 ">
      <div>
        <div className=" ">
          <div className=" flex gap-10 flex-col justify-between items-center  sm:flex-row">
            <div>
              <h1 className="text-2xl font-bold"> Order Summary</h1>
              <p className="py-2 font-semibold ">Total Price : {price}</p>
              <p className="font-semibold ">
                Total Price Items : {cart.length}
              </p>
              {/* <button className="btn btn-primary">Get Started</button> */}
            </div>

            {/* right site  */}
            <div className="mt-8 ">
              <div className="card w-96 bg-base-200 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">process your Payment!</h2>
                  <p> Credit / Dabit Cart </p>
                  {/* Stripe frome */}
                  <form onSubmit={handleSubmit}>
                    <CardElement
                      options={{
                        style: {
                          base: {
                            fontSize: "16px",
                            color: "#424770",
                            "::placeholder": {
                              color: "#00000",
                            },
                          },
                          invalid: {
                            color: "#9e2146",
                          },
                        },
                      }}
                    />
                    <button
                      type="submit"
                      className=" font-bold text-xl w-full bg-green mt-7 rounded"
                      disabled={!stripe}
                    >
                      Pay
                    </button>
                  </form>
                  {cartError && <p className="text-red">{cartError.message}</p>}
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;