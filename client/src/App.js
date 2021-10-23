// import dependencies - react, header and footer
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Donations from "./components/Donations";
import { StoreProvider } from "./utils/GlobalState";
// import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <div>
      {/* <Header /> */}
      <StoreProvider>
      {/* <Dashboard /> */}
      <Donations />
      </StoreProvider>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
