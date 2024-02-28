import React from 'react'
import backgroundImage from "../../assets/backgroundImage.jpg"

const AboutUs = () => {
  return (
    <div class="min-vh-100 w-full bg-danger">

     <div class=" d-grid container gap-5 ">
      <h1 class="d-flex justify-content-center align-items-center" style={{fontSize:"60px"}}>About Us</h1>
      <img src={backgroundImage} alt="kdjj" class="w-100 " style={{borderRadius:"88px"}}/>
      <p class="justify-content-center">
      Welcome to Explore Nepal, your gateway to the breathtaking beauty and rich cultural tapestry of this Himalayan jewel. Our web app is a labor of love dedicated to showcasing the diverse landscapes, vibrant traditions, and hidden gems that make Nepal a truly unique destination. Immerse yourself in the stunning mountain vistas, discover ancient temples, and connect with the warm-hearted locals who make this country so special. Whether you're an avid trekker seeking adventure, a history enthusiast delving into centuries-old heritage, or a wanderer yearning for a serene escape, Explore Nepal is your digital companion on a journey of discovery. Join us as we celebrate the splendor of Nepal, and let this platform be your virtual passport to an unforgettable experience in the heart of the Himalayas."

      </p>
     </div>
    </div>
  )
}

export default AboutUs