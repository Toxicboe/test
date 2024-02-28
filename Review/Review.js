import React from "react";
import './Review.css';
import backGroundImage from '../../assets/backgroundImage.jpg'

const Review = () => {
  return (
    <div className="d-flex justify-content-center align-items-center text-center bg-danger" style={{height:"500px"}}>
      <div classs="min-vh-100">
        <h1>Write a review, make someone's trip</h1>
        <p>
          Stories like yours are what helps travelers have better trips. Share
          your experience and help out a fellow traveler!
        </p>

        <div className="row mt-4 justify-content-center align-items-center m">
          <div className="col-md-6 w-75">
            <div className="form">
              <i className="fa fa-search"></i>
              <input type="text" className="form-control form-input" placeholder="Search anything..." />
              <span className="left-pan"><i className="fa fa-microphone"></i></span>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end ">
        <img src={backGroundImage} alt="revieo" class=" mt-5 w-25 h-25 pe-5 " style={{bordeRadius:"10px"}}/>
        </div>
      </div>
    </div>
  );
};

export default Review;

