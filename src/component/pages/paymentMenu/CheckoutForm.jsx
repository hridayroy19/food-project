import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../provider/AuthProvider";
import useAxiosPrivet from "../../hooks/useAxiosPrivet";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const CheckoutForm = ({ price, cart }) => {
  // console.log(cart);
  const stripe = useStripe();
  const elements = useElements();
  const  {user} = useContext(Authcontext)
  const axiosSecure = useAxiosPrivet()
  const axiospublic = useAxiosPublic()
const navigate = useNavigate()
  const [cartError, setCartError] = useState(null);
  const [ clientSecret ,  setClientSecret ] = useState("")



useEffect(()=>{
  if(typeof price !== 'number' || price<1){
    console.log("price is not a number or less then 1");
    return;
  }
 axiosSecure.post('/create-payment', {price})
 .then((res)=>{
  console.log(res.data.clientSecret);
  setClientSecret(res.data.clientSecret);
 })

},[price,axiosSecure])




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
  
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "unknown",
          },
        },
      }
    );

    if (confirmError) {
      console.error("Error confirming card payment:", confirmError);
      setCartError(confirmError);
      return;
    }
    console.log("PaymentIntent confirmed:", paymentIntent);

 if(paymentIntent.status === "succeeded"){
  console.log(paymentIntent.id);
  setCartError(`yout transctionId is ${paymentIntent.id} `)

// paypment info data 

 const paymentInfo = {
    
     email: user?.email,
     transitionId:paymentIntent.id,
     price,
     quantity:cart?.length,
     status:"order panding",
     itemName:cart?.map((item)=>item.name),
     cartItem:cart?.map((item)=>item._id),
     menuItem:cart?.map((item)=>item.menuItem),

 }
 console.log(paymentInfo);
 const res = await axiospublic.post('/payments', paymentInfo);
                navigate('/')
                console.log('payment saving in database', res.data);

 }

  }

  

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
