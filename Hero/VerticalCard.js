import React from "react";
import "./VerticalCard.css";
import backgroundImage from "../../assets/backgroundImage.jpg";

const VerticalCard = () => {
  return (
    <div class=" min-vh-100 w-100 p-lg-4">
        <h1 class="m-lg-5 ">Must-see attractions for your itinerary</h1>
      <div class="container ">
        <div class="row g-3  " style={{ height: "70vh" }}>
          <div class="col-md-4 col-6">
            <div class="card h-100">
              <img
                src={backgroundImage}
                class="class-image-top img-fit"
                alt="imagf"
                style={{ height: "350px" }}
              />
              <div class="card-body d-flex h-100 flex-column ">
                <h5 class="card-title">Drip Coffee</h5>
                <p class="card-text flex-grow-1 ">
                  Some quicfjdksjfksdjfkdsjfkdjskjkdsjgkdjs
                </p>
                <div class="text-end">
                  <a href="www.fdj" class="btn btn-outline-primary">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-6">
            <div class="card h-100">
              <img
                src={backgroundImage}
                class="class-image-top img-fit"
                alt="imagf"
                style={{ height: "350px" }}
              />
              <div class="card-body d-flex h-100 flex-column ">
                <h5 class="card-title">Drip Coffee</h5>
                <p class="card-text flex-grow-1 ">
                  Some quicfjdksjfksdjfkdsjfkdjskjkdsjgkdjs
                </p>
                <div class="text-end">
                  <a href="www.fdj" class="btn btn-outline-primary">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-6">
            <div class="card h-100">
              <img
                src={backgroundImage}
                class="class-image-top img-fit"
                alt="imagf"
                style={{ height: "50vh" }}
              />
              <div class="card-body d-flex h-100 flex-column ">
                <h5 class="card-title">Drip Coffee</h5>
                <p class="card-text flex-grow-1 ">
                  Some quicfjdksjfksdjfkdsjfkdjskjkdsjgkdjs
                </p>
                <div class="text-end">
                  <a href="www.fdj" class="btn btn-outline-primary">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
 
    
  );
};

export default VerticalCard;
