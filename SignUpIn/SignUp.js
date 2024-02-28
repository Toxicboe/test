import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div class="d-flex justify-content-center align-items-center vh-100 rounded-4 ">
      <div class="container text-center d-flex justify-content-center  align-items-center">
        <div class="row justify-content-end  p-0 bg-primary m-0 p-0 w-50 h-75 "
          style={{
            borderBottomLeftRadius: "40px",
            borderTopLeftRadius: "40px",
          }}>
          {/* right side div */}

          <div class="col align-self-center rounded-5  col-sm-6 d-none d-sm-block g-0 ">
            <h1 class="h-100">Welcome Back!</h1>
            <p class="h-100 h6">
              To keep connected with us please login with your personal info
            </p>
          </div>

          {/* left side form div */}
          <div class="col align-self-center m-0 p-0 h-50  col-sm-6 border-0 border-danger">
            <form class="form-control bg-danger  ">
              <h1 class="d-flex justify-content-center align-items-center">
                Create New Account
              </h1>
              <div class="d-flex justify-content-center align-items-center">
                <a
                  href="https://www.facebook.com"
                  class="border rounded-circle border-2 d-inline-flex bg-light justify-content-center  align-items-center m-2"
                  style={{
                    borderColor: "#000000",
                    height: "40px",
                    width: "40px",
                  }}
                >
                  {" "}
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="https://www.facebook.com"
                  class="border rounded-circle border-2 d-inline-flex bg-light justify-content-center align-items-center m-2"
                  style={{
                    borderColor: "#000000",
                    height: "40px",
                    width: "40px",
                  }}
                >
                  {" "}
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a
                  href="https://www.facebook.com"
                  class="border rounded-circle border-2 d-inline-flex bg-light justify-content-center align-items-center m-2"
                  style={{
                    borderColor: "#000000",
                    height: "40px",
                    width: "40px",
                  }}
                >
                  {" "}
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
              <div class="d-flex justify-content-center align-items-center h3">
                OR
              </div>
              <div className="mb-3 mt-3">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Enter your First Name"
                  name="firstName"
                />
              </div>
              <div className="mb-3 mt-3">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Enter your Last Name"
                  name="lastName"
                />
              </div>
              <div className="mb-3 mt-3">
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  placeholder="Enter your Location"
                  name="location"
                />
              </div>
              <div className="mb-3 mt-3">
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  placeholder="Enter your Phone"
                  name="phoneNumber"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                />
              </div>
              <div className="mb-3 mt-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  placeholder="Enter your  Password"
                  name="pswd"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  placeholder="Confirm your Password"
                  name="pswd"
                />
              </div>

              <div>
                Already have an Account?
                <Link
                  to="/SignIn"
                  class="text-primary fs-5 text-decoration-none "
                >
                  Log In
                </Link>
                <div class="d-grid">
                  <button type="submit" class="btn btn-dark btn-block">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
