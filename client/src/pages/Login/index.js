// Login page code here
import React, { useState } from "react";
import Auth from "../../utils/auth";

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' })
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e)
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form class="login-form">
        <div>
          <label for="email-login">Email:</label>
          <input type="text" id="email-login" />
        </div>
        <div>
          <label for="password-login">Password:</label>
          <input type="password" id="password-login" />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
export default Login;
