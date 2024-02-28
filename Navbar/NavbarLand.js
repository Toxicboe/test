import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const NavbarLand = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-transparent text-dark">
        <div class="container-fluid text-danger">
          <a class="navbar-brand text-danger" href="https://www.facebook.com" style={{fontSize:"40px"}}>
            Explore Nepal
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto " >
              {" "}
              {/* Centered navigation links */}
              <li class="nav-item ">
                <a class="nav-link active text-dark " href="https://www.facebook.com ">
                  Home
                </a>
              </li>
              <li class="nav-item  ">
                <a class="nav-link text-dark " href="https://www.facebook.com" >
                  Our services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark " href="https://www.facebook.com">
                  Destination
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark " href="https://www.facebook.com">
                  Review
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark " href="https://www.facebook.com">
                  Contact Us
                </a>
              </li>
            </ul>
            <ul class="navbar-nav ms-0 " style={{marginLeft:"0px"}}>
              <li class="nav-item ">
              <FontAwesomeIcon icon={faUser} size="2x" />

              </li>
        
            </ul>
          </div>
        </div>
      </nav>


      </div>
  
  );
};

 export default NavbarLand;