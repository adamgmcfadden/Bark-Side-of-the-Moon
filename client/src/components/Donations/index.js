import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from '@apollo/react-hooks';
import { QUERY_CHECKOUT } from "../../utils/queries"

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Donations = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

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
    try {
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        items: [{ sku: "sku_H9jgxm7mz2e0n9", quantity: 1 }],
        successUrl: "http://localhost:3000/success",
        cancelUrl: "http://localhost:3000/cancel",
      });
      if (error) {
        setError(error);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="donations">
      <h1>Donate Now </h1>
      <form>
        <div className="form-group">
          <label htmlFor="firstname">First Name:&nbsp;</label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            placeholder="Enter First Name"
          />
          <label htmlFor="lastname">Last Name:&nbsp;</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            placeholder="Enter Last Name"
          />
          <label htmlFor="email">Email:&nbsp;</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email"
          />
          <label htmlFor="donation">Donation Amount: &nbsp;</label>
          <input
            type="number"
            className="form-control"
            id="donation"
            placeholder="Enter Donation"
            onChange={handleChange}
          />
        </div>
        {Auth.loggedIn() ? (
          <button onClick={submitCheckout}>Donate Now</button>
        ) : (
          <span>(login to donate)</span>
        )}
      </form>
    </div>
  );
};
