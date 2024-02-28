import React from "react";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.css'

const Footer = () => {
  return (
    <div class="container bg-danger rounded-5 " style={{fontSize:"20px"}}>
      {/* first row */}
      <div class="row">
        <div class="col-8">
          <h2 class="text-dark text-start">Follow Us</h2>
          <div className="mt-3">
            <div className=" d-flex justify-content-start">
              <div class="d-flex justify-content-between gap-x-3">
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="2x"
                  style={{ marginRight: "20px" }}
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="2x"
                  style={{ marginRight: "20px" }}
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  style={{ marginRight: "20px" }}
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  style={{ marginRight: "20px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <h2 class="text-start text-dark">Contact Us</h2>
          <div className="mt-3 my-0">
            <p>
              9864783564
              <br />
              Sun to Fri - 7:00 AM to 5:00 PM <br/>Saturday - 10:00 AM to 4:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* second col */}
      <div class="row">
        <div class="col-4">
          <h2 class="text-start text-dark">Quick Links</h2>
          <div className="mt-3 my-0">
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div class="col-4">
          <h2 class="text-start text-dark">Disclaimer</h2>
          <div className="mt-3 my-0">
            <p>Work with US</p>
          </div>
        </div>
        <div class="col-4">
          <h2 class="text-start text-dark">Kathmandu office </h2>
          <div className="mt-3 my-0">
            <p>06,Mitrapark, Siphal Texas college road,Kathmandu,Chabahil </p>
          </div>
        </div>
      </div>

      {/* <third col */}
      <div class="row">
        <div className="mt-5 ">
          <p>&copy;2024 ExploreNepal.com</p>
          <p>All images are created by the Respective Authors</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
