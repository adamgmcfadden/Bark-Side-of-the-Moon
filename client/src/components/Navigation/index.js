// import dependencies -- react + { useEffect} and capitalizeLetters helper
import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  // nav-tabs to map through
  const tabs = ["Homepage", "Dashboard", "AdoptionForm", "Login/Signup"];
  // changed document.title based on current page
  useEffect(() => {
    document.title = capitalizeFirstLetter(props.currentPage);
  });

  return (
    <header className="d-flex flex-row">
      <h1> Bark Side of the Moon</h1>

      <nav className="col-8 nav-cont">
        <ul className="d-flex flex-row justify-content-between nav-ul">
          {/* map through tabs array */}
          {tabs.map((tab) => (
            <li className="nav-li" key={tab}>
              <a
                // set tab to lowercase with # in front to determine page to change to
                href={"#" + tab.toLowerCase()}
                // on click change page to new tab
                onClick={() => props.handlePageChange(tab)}
                className={
                  // current page will have nav-ul-active class
                  props.currentPage === tab ? "nav-ul-active" : "nav-ul"
                }
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

// export nav function -- used in header component
export default Nav;
