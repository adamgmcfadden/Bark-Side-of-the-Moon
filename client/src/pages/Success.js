import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADD_DONATION } from "../utils/mutations";
import Thankyou from "../components/Thankyou";

function Success() {
  const [addDonation] = useMutation(ADD_DONATION);

  return (
    <div>
      <Thankyou>
        <h1>Congradulations!!</h1>
        <h2>
          Thank You For Your Generosity, Our Furry Friends Appreciate Your
          Support. 
        </h2>
        <h2>You will now be redirected to the Homepage</h2>
      </Thankyou>
    </div>
  );
}

export default Success;
