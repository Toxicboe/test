// import React from 'react'
// import backgroundImage from "../../assets/backgroundImage.jpg"
// import { Image } from 'react-bootstrap';

// const AboutUs = () => {
//   return (
//     <div class="min-vh-100 w-full bg-danger">

//      <div class=" d-grid container gap-5 w-full" style={{height:"300px"}}/>
//       <h1 class="d-flex justify-content-center align-items-center" style={{fontSize:"60px"}} >Why Us</h1>
//        <div class="row ">
//         <div class="col-3 ">
//       {/* <img src={backgroundImage} alt="kdjj" class="w-100 " style={{borderRadius:"88px"}} roundedCirlce/> */}
//         <Image src={backgroundImage} alt="dkfjdk" roundedCircle />
//         </div>

//        </div>

//      </div>

//   )
// }

// export default AboutUs

import backgroundImage from "../../assets/backgroundImage.jpg";
import React from "react";

const WhyUs = () => {
  return (
    <div class="container text-center mt-5 bg-danger rounded-5 ">
      <h1 class="justify-content-center ">Why Us</h1>
      <div class="row mt-5">
        <div class="col-3">
          <img
            src={backgroundImage}
            alt="kdjf"
            roundedCirlce
            style={{ height: "145px", width: "150px", borderRadius: "50%" }}
          />
          <p class="d-flex justify-content-center mt-3  h5">title</p>
        </div>

        <div class="col-3">
          <img
            src={backgroundImage}
            alt="kdjf"
            roundedCirlce
            style={{ height: "145px", width: "150px", borderRadius: "50%" }}
          />
          <p class="d-flex justify-content-center mt-3  h5">title</p>
        </div>
        <div class="col-3">
          <img
            src={backgroundImage}
            alt="kdjf"
            roundedCirlce
            style={{ height: "145px", width: "150px", borderRadius: "50%" }}
          />
          <p class="d-flex justify-content-center mt-3  h5">title</p>
        </div>
        <div class="col-3">
          <img
            src={backgroundImage}
            alt="kdjf"
            roundedCirlce
            style={{ height: "145px", width: "150px", borderRadius: "50%" }}
          />
          <p class="d-flex justify-content-center mt-3  h5">title</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
