// import dependencies - react, header and footer
import React from "react";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import AdoptionForm from "./pages/AdoptionForm";
import Login from "./pages/Login";
import AppNavbar from "./components/Navigation";

import Footer from "./components/Footer";
import Donations from "./components/Donations";
import { StoreProvider } from "./utils/GlobalState";
import Stripe from "./components/Stripe";


// function App() {
//   return (
//     <div>
//       {/* <Header /> */}
//       <StoreProvider>
//       {/* <Dashboard /> */}
//       <Donations />
//       </StoreProvider>
//       {/* <Footer /> */}
//     </div>
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import catCards from "./pages/Cats";

// create the apollo provider
const httpLink = createHttpLink({
  uri: "/graphql",
});

// set up auth link to use in new Client
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// new Client - concat authlink and http link
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  // new cache
  cache: new InMemoryCache(),
});

function App() {
  return (
    // wrap apollo provider around everything else
    <ApolloProvider client={client}>
      <Router>
        <>
          <AppNavbar />
          <Switch>
            <Route exact path="/donations" component={Donations} />
            <Route exact path="/stripe" component={Stripe} />
            <Route exact path="/" component={Homepage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/cats" component={catCards} />
            <Route exact path="/adoptionForm" component={AdoptionForm} />
            <Route exact path="/login" component={Login} />
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
