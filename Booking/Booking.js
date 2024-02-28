import React from "react";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Booking = () => {
  return (
    <div class="d-flex justify-content-center align-self-center min-vh-100 h-100  ">
      <div class="container d-flex justify-content-center align-self-center h-100 w-100">
        <div class="row   d-flex justify-content-center align-self-center">
            <h1 class="d-flex justify-content-center align-items-center">
                Explore 
              </h1>
              <h1 class="d-flex justify-content-center align-items-center text-primary">
                The Wolrd
              </h1>
              <div class="d-flex justify-content-center align-items-center h4">
                Book Your Destination
              </div>

                
              <div className="col-12 col-md-10 col-lg-8 w-50 h-25">
                    <form className="card card-sm">
                        <div className="card-body row no-gutters align-items-center">
                            <div className="col-auto">
                                <FontAwesomeIcon icon={faSearchengin} />
                            </div>
                            <div className="col">
                                <input
                                    className="form-control form-control-lg form-control-borderless"
                                    type="search"
                                    placeholder="Search topics or keywords"
                                    style={{ border: "none" }}
                                />
                            </div>
                            <div className="col-auto">
                                <button className="btn btn-lg btn-success rounded-pill" type="submit">
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
          <div class="col-8  align-self-center m-4 p-4 ">
            <form class="bg-danger">

              


              <div class="p-3 ">
                <div className="mb-3 mt-3">
                  <label for="season" class="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Enter your Full Name"
                    name="fullName"
                  />
                </div>
                <div className="mb-3 mt-3">
                  <label for="season" class="form-label">
                    Age:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="age"
                    placeholder="Enter your Age"
                    name="age"
                  />
                </div>
                <div className="mb-3 mt-3">
                  <label for="phone" class="form-label">
                    Phone
                  </label>
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
                  <label for="season" class="form-label">
                    Select the Season to Trek/Hike:
                  </label>
                  <input
                    class="form-control"
                    list="season"
                    name="season"
                    id="season"
                    placeholder="season"
                  />
                  <datalist id="season">
                    <option value="Autumn" />
                    <option value="Winter" />
                    <option value="Spring" />
                    <option value="Summer" />
                  </datalist>
                </div>

                <div className="mb-3 mt-3">
                  <label for="sort" class="form-label">
                    Sort By:
                  </label>
                  <input
                    class="form-control"
                    list="sort"
                    name="sort"
                    id="sort"
                    placeholder="Recommeded"
                  />
                  <datalist id="sort">
                    <option value="option1" />
                    <option value="option2" />
                    <option value="option3" />
                    <option value="option4" />
                  </datalist>
                </div>

                <div className="mb-3 mt-3">
                  <label for="price" class="form-label">
                    Price:
                  </label>
                  <input
                    class="form-control"
                    list="price"
                    name="price"
                    id="price"
                    placeholder="Price"
                  />
                  <datalist id="price">
                    <option value="option1" />
                    <option value="option2" />
                    <option value="option3" />
                    <option value="option4" />
                  </datalist>
                </div>
              </div>
            </form>

          <div class="d-flex justify-content-end gx-5 m-3  ">
            <button type="button" class=" btn btn-primary btn-lg">
              Pay with Khalti
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
