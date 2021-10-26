
import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
// import all dependencies - React + {useState} and components/pages
import React, { useState } from "react";
import Nav from "../Navigation";
import AdoptionForm from "../../pages/AdoptionForm";
import Login from "../../pages/Login";
import Donations from "../Donations";

function Header() {
  // useState to set current page and handleChange
  const [currentPage, handlePageChange] = useState("About");
  // switch statement to render pages based on nav-tab clicked
  const renderPage = () => {
    switch (currentPage) {
      case "AdoptionForm":
        return <AdoptionForm />;
      case "Login":
        return <Login />;
      case "Donations":
        return <Donations />;
      default:
        return <AdoptionForm />;
    }
  };

  return (
    <div>
      <div>
        <header>
          {/* useState for current page and handlepagechange */}
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
      </div>
      {/* handle page change */}
      {renderPage(currentPage)}
    </div>
  );
// import all dependencies - React + {useState} and components/pages
import React, { useState } from "react";
import Nav from "../Navigation";
import AdoptionForm from "../../pages/AdoptionForm";

function Header() {
  // useState to set current page and handleChange
  const [currentPage, handlePageChange] = useState("About");
  // switch statement to render pages based on nav-tab clicked
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <ContactForm />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
    return <AdoptionForm />;
  };

  return (
    <div>
      <div>
        <header>
          {/* useState for current page and handlepagechange */}
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
      </div>
      {/* handle page change */}
      {renderPage(currentPage)}
    </div>
  );
}

// export header function=
}

// export header function

export default Header;

// // import all dependencies - React + {useState} and components/pages
// import React, { useState } from "react";
// import Nav from "../Navigation";
// import AdoptionForm from "../../pages/AdoptionForm";
// import Login from "../../pages/Login";
// import Donations from "../Donations";

// function Header() {
//   // useState to set current page and handleChange
//   const [currentPage, handlePageChange] = useState("About");
//   // switch statement to render pages based on nav-tab clicked
//   const renderPage = () => {
//     switch (currentPage) {
//       case "AdoptionForm":
//         return <AdoptionForm />;
//       case "Login":
//         return <Login />;
//       case "Donations":
//         return <Donations />;
//       default:
//         return <AdoptionForm />;
//     }
//   };

//   return (
//     <div>
//       <div>
//         <header>
//           {/* useState for current page and handlepagechange */}
//           <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
//         </header>
//       </div>
//       {/* handle page change */}
//       {renderPage(currentPage)}
//     </div>
//   );
// }

// // export header function
// export default Header;

