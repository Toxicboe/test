import React from "react";

const Reset = () => {
  return (
    <div class="d-flex justify-content-center align-self-center min-vh-100 h-100  ">
      <div class="container d-flex justify-content-center align-self-center h-100 w-100">
        <div
          class="row  h-100 w-75 d-flex justify-content-center align-self-center
        "
        >
          <div class="col-8  align-self-center m-4 p-4 ">
            <form class="form-control  rounded-5 m-4 p-4 bg-danger">
              <h1 class="d-flex justify-content-center align-items-center ">
                Explore Nepal
              </h1>
              <div class="d-flex justify-content-center align-items-center h4">
                Reset your password
              </div>
              <div className="mb-3 mt-3">
                <label for="email" class="form-label">
                  Enter your email or phone Number
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                />
              </div>
              <div className="mb-3">
                <label for="pwd" class="form-label">
                  {" "}
                  Enter your Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  placeholder="Enter your password"
                  name="pswd"
                />
              </div>
              <div className="mb-3">
                <label for="pwd" class="form-label">
                  Confirm your Email
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  placeholder="Confirm your password"
                  name="pswd"
                />
              </div>
              <div class="d-grid">
                <button
                  type="submit"
                  class="btn bg-dark text-bg-dark  btn-block"
                >
                  Log In
                </button>
              </div>{" "}
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
