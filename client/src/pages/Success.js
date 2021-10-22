import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADD_DONATION } from "../utils/mutations";
import Thankyou from "../components/Thankyou";

function Success() {
  const [addDonation] = useMutation(ADD_DONATION);

  return (
    <div class="congrats">
      <Thankyou>
        <h1 class="thankyou">Congradulations!!</h1>
        <img src="../../Lakyn/Bark-Side-of-the-Moon/client/src/assets/images/thankyou.jpg" class="img-thanks" alt="Dog waving to say thank you" />
        <h2 class="thankyou">
          Thank You For Your Generosity, Our Furry Friends Appreciate Your
          Support!!
        </h2>
      </Thankyou>
    </div>
  );
}

export default Success;
