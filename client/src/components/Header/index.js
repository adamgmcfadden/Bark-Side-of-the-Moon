<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>BARK-SIDE-OF-THE-MOON</h1>
        </Link>
        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">Me</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
=======
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

// export header function
>>>>>>> feature/adam
export default Header;
