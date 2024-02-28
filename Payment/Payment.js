import React from 'react';
import backgroundImage from "../../assets/backgroundImage.jpg";
import './Payment.css';


const Payment = () => {
  return (
    <form action="">
    <div class="form-group w-25">
      <label for="phoneNumber"></label>
      <input type="text" class="form-control" id="phoneNumber" placeholder='Khati Mobile Number'/>
    </div>
    <div class="form-group w-25">
      <label for="password"></label>
      <input type="text" class="form-control" id="password" placeholder='Khalti password/PIN'/>
    </div>
    <button type="button" class="btn btn-secondary w-25 mt-4">Submit</button>
  </form>
  )
}

export default Payment;
