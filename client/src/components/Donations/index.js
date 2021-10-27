import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/react-hooks";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { useState } from "react";
import { ADD_TO_DONATION } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import donationimage from "../../assets/images/donate.jpg";
// import Stripe from "../Stripe";
import Checkout from "react-stripe-checkout";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Donations = () => {
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [donation, setDonation] = useState(0);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);
    console.log(donation);
  };

  return (
    <div className="donations">
      {loading ? (
        <Checkout
          stripeKey={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
          name={`${firstname} ${lastname}`}
          email={email}
        >
          <h1>
            {" "}
            {firstname} {lastname}{" "}
          </h1>
          <h1> {email} </h1>
          <button className="btn btn-primary">
            {" "}
            Pay ${donation} with Card{" "}
          </button>
        </Checkout>
      ) : (
        <>
          <h1 className="donate">Donate Now</h1>
          <img class="img-donate" src={donationimage} alt="Kitten and Puppy" />
          <br />
          <br />
          <form className="donate-form">
            <div className="form-group">
              <label htmlFor="firstname">First Name:&nbsp;</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                placeholder="Enter First Name"
                onChange={(e) => setFirstname(e.target.value)}
                value={firstname}
              />
              <br />
              <br />
              <label htmlFor="lastname">Last Name:&nbsp;</label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                placeholder="Enter Last Name"
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
              />

              <br />
              <br />
              <label htmlFor="email">Email:&nbsp;</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <br />
              <br />
              <label htmlFor="donation">Donation Amount: &nbsp;</label>
              <input
                type="number"
                className="form-control"
                id="donation"
                placeholder="Enter Donation"
                onChange={(e) => setDonation(e.target.value)}
                value={donation}
              />
            </div>
            <br />
            <br />
            <button onClick={handleSubmit} className="donate-btn">
              Donate
            </button>

            {/* <section  onClick={redirectToCheckout}  class="pre-set-donations">
          <button
            class="donate-btn"
            data-checkout-mode="payment"
            data-price-id="sku_GU4JYXyvvRb2sX"
          >
            $5.00
          </button>
          <button
            class="donate-btn"
            data-checkout-mode="payment"
            data-price-id="sku_GU4KO8nfdg8G2Z"
          >
            $15.00
          </button>
          <button
            class="donate-btn"
            data-checkout-mode="payment"
            data-price-id="sku_GU4KO8nfdg8G2Z"
          >
            $25.00
          </button>
          <button
            class="donate-btn"
            data-checkout-mode="payment"
            data-price-id="sku_GU4LB0wBViiYsm"
          >
            $50.00
          </button>
        </section> */}
          </form>{" "}
        </>
      )}
    </div>
  );
};

export default Donations;
