import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/react-hooks";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { useState } from "react";
import { ADD_TO_DONATION } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import donationimage from "../../assets/images/donate.jpg";

const stripePromise = loadStripe(
  "pk_test_51JoExyI4YZmdG6GEo3MDLTpbKn07zGwztg4qTwI3kS3RZ41NW6gkUmTqVKkjVmB3Z1DZB5B0TtgkUfquTkHicdPD00einhfUlN"
);

const Donations = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  const [donation, setDonation] = useState(0);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setDonation(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);
    console.log(donation);
    dispatch({ type: ADD_TO_DONATION, donation: donation });

    // try {
    //   const stripe = await stripePromise;
    //   const { error } = await stripe.redirectToCheckout({
    //     // items: [{ sku: "sku_H9jgxm7mz2e0n9", quantity: 1 }],
    //     successUrl: "http://localhost:3000/success",
    //     cancelUrl: "http://localhost:3000/cancel",
    //   });
    //   if (error) {
    //     setError(error);
    //     setLoading(false);
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <div class="donations">
      <h1 class="donate">Donate Now</h1>
      <img class="img-donate" src={donationimage} alt="Kitten and Puppy" />
      <br />
      <br />
      <form class="donate-form">
        <div className="form-group">
          <label htmlFor="firstname">First Name:&nbsp;</label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            placeholder="Enter First Name"
          />
          <br />
          <br />
          <label htmlFor="lastname">Last Name:&nbsp;</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            placeholder="Enter Last Name"
          />

          <br />
          <br />
          <label htmlFor="email">Email:&nbsp;</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email"
          />
          <br />
          <br />
          <label htmlFor="donation">Donation Amount: &nbsp;</label>
          <input
            type="number"
            className="form-control"
            id="donation"
            placeholder="Enter Donation"
            onChange={handleChange}
            value={donation}
          />
        </div>
        <br />
        <br />
        <button onClick={handleSubmit} class="donate-btn">
          Donate
        </button>

        <section  onClick={redirectToCheckout}  class="pre-set-donations">
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
        </section>
      </form>
    </div>
  );
};

export default Donations;
