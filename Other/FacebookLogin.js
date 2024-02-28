import React from "react";

const FacebookLogin = () => {
  return (
    <div class="min-vh-100 w-100">
       <div class=" positive-relative d-flex  bg-danger" style={{height:"100px"}}>
       
          <button type="button" class=" position-absolute btn btn-success" style={{top:"30px",left:"20px"}}>
            Create new Account
          </button>
     
      </div> 

      <div class="d-flex justify-content-center align-self-center min-vh-100 h-100  ">
        <div class="container d-flex justify-content-center align-self-center h-100 w-100">
          <div class="row  h-100 w-75 d-flex justify-content-center align-self-center">
            <div class="col-8  align-self-center m-4 p-4 ">
              <form class="form-control  rounded-5 m-4 p-4 bg-danger gap-2 ">
                <h1 class="d-flex justify-content-center align-items-center mb-3 mt-3">
                  Log Into Facebook
                </h1>

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
                    placeholder="Enter your password"
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
                </div>
                <div class="form-check mb-3 d-flex justify-content-center ">
                  <label class="form-check-label">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="remember"
                    />
                    Keep me Logged in to <span class="h5">Explore Nepal</span>
                  </label>
                </div>

                <span class="text-primary d-flex justify-content-center ">
                  Forget Password?
                </span>
                <div class="d-flex justify-content-center h3 ">
                  <hr class="my-2" />
                  OR
                  <hr class="my-2" />
                </div>
                <div className="d-flex justify-content-center ">
                  <button type="button" class="btn btn-success  ">
                    Create new Account
                  </button>
                </div>
                <span class=" d-flex text-primary justify-content-center rounded-5 ">
                  Not Now
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacebookLogin;
