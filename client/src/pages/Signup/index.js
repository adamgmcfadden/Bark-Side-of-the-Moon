// Signup page code here
import React, { useState } from "react";
import auth from "../../utils/auth";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Signup</h1>
      <form class="signup-form">
        <div>
          <label for="firstname-signup">FirstName:</label>
          <input type="text" id="firstname-signup" />
        </div>
        <div>
          <label for="lastname-signup">LastName:</label>
          <input type="text" id="lastname-signup" />
        </div>
        <div>
          <label for="email-signup">Email:</label>
          <input type="text" id="email-signup" />
        </div>
        <div>
          <label for="password-signup">Password:</label>
          <input type="password" id="password-signup" />
        </div>
        <div>
          <button type="submit">Signup</button>
        </div>
      </form>
    </div>
  );
}
export default Signup;
