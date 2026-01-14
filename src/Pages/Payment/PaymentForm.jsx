import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const { id } = useParams();
  console.log("Id: ", id)
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();
  const navigate = useNavigate();

  const {data: cloth, isLoading, isPending} = useQuery({
    queryKey: ["resell-product-detail", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/cloths/${id}`);
      return res.data;
    }
  })

  if(isPending){
    <div className="flex justify-center py-32">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
  }

  console.log(cloth);

  const amount = cloth?.price || cloth?.charge;
  const amountInCents = amount*100;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (!card) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");
      console.log("Payment Method: ", paymentMethod);
  };


  // create payment intent
   const res = await axiosSecure.post("/create-payment-intent", {
       amountInCents,
       clothId: id,
   })
   console.log("res from intent",res);

   const clientSecret = res.data.clientSecret;

   const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: user?.displayName || "Customer",
          email: user?.email,
        },
      },
    });

    if (result.error) {
      setError(result.error.message);
    } else {
      setError("");
      if (result.paymentIntent.status === "succeeded") {
        console.log("Payment Succeeded!", result.paymentIntent);
        console.log(result);

        // create payment history
        // mark parcel paid and make a payment history
        const paymentData = {
          clothId: id,
          email: user?.email,
          amount,
          transactionId: result.paymentIntent.id,
          paymentMethod: result.paymentIntent.payment_method_types,
          paid_date: new Date().toISOString(),
        };
         const paymentRes = await axiosSecure.post(`/payments`, paymentData);
        if (paymentRes.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Payment Successful 🎉",
            text: `Transaction ID: ${result.paymentIntent.id}`,
            timer: 2000,
            showConfirmButton: false,
          }).then(() => {
            navigate("/dashboard/myPaymentHistory");
          });
        }

      }
    }





}


  return (
    <div className="flex justify-center  items-center  min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="card w-full lg:w-[700px] bg-base-100  shadow-accent mx-auto p-10 shadow-2xl"
      >
        <CardElement className="p-4 w-full  mx-auto border rounded "></CardElement>
        <button
          type="submit"
          disabled={!stripe}
          className="btn bg-linear-to-r from-accent to-primary  font-bold border-0 mt-2 hover:bg-linear-to-l btn-primary"
        >
          Pay {amount} tk
        </button>
        {error && <p className="text-red-500 text-center pt-4">{error}</p>}
      </form>
    </div>
  );
};

export default PaymentForm;
