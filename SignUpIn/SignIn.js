import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div class="d-flex justify-content-center align-items-center vh-100 rounded-4 ">
      <div class="container text-center d-flex justify-content-center  align-items-center">
        <div
          class="row justify-content-end  p-0 bg-danger m-0 p-0 w-50 "
          style={{ borderRadius: "20px" }}
        >
          <div class="col align-self-center p-0 h-50 rounded-5 col-sm-6">
            <form
              class="form-control  "
              style={{
                borderBottomRightRadius: "40px",
                borderTopRightRadius: "40px",
              }}
            >
              <h1 class="d-flex justify-content-center align-items-center">
                Log In
              </h1>
              <div class="d-flex justify-content-center align-items-center">
                <a
                  href="https://www.facebook.com"
                  class="border rounded-circle border-2 d-inline-flex justify-content-center align-items-center m-2"
                  style={{
                    borderColor: "#DDDDDD",
                    height: "40px",
                    width: "40px",
                  }}
                >
                  {" "}
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="https://www.facebook.com"
                  class="border rounded-circle border-2 d-inline-flex justify-content-center align-items-center m-2"
                  style={{
                    borderColor: "#DDDDDD",
                    height: "40px",
                    width: "40px",
                  }}
                >
                  {" "}
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a
                  href="https://www.facebook.com"
                  class="border rounded-circle border-2 d-inline-flex justify-content-center align-items-center m-2"
                  style={{
                    borderColor: "#DDDDDD",
                    height: "40px",
                    width: "40px",
                  }}
                >
                  {" "}
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
              <div class="d-flex justify-content-center align-items-center">
                or use your account
              </div>
              <div className="mb-3 mt-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  name="email"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  placeholder="Enter password"
                  name="pswd"
                />
                <span class="d-flex justify-content-end  ">
                  <Link to="/reset" class="text-primary text-decoration-none ">
                    Forget Password?
                  </Link>
                </span>
              </div>
              <div class="form-check mb-3 d-flex justify-content-start">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="remember"
                  />{" "}
                  Remember me
                </label>
              </div>

              <div class="d-grid">
                <div class="d-flex justify-content-center align-items-center  mb-3">
                  <Link
                    to="/signup"
                    class="text-primary fs-6 text-decoration-none "
                  >
                    {" "}
                    Don't have an Account?
                  </Link>
                </div>
                <button type="submit" class="btn btn-dark btn-block">
                  Submit
                </button>

              </div>
            </form>
          </div>
          <div class="col align-self-center p-0  bg-danger rounded-4 col-sm-6 d-none d-sm-block ">
            <h1 class="h-100 ">Welcome Back!</h1>
            <p class="h-100 h6">
              To keep connected with us please login with your personal info
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
