import React from 'react';
import { Form } from "react-bootstrap";
import './ForgetPassword.css'


const ForgetPassword = () => {
  return (
    <form className='ForgetForm'>
    <h2>Explore Nepal</h2>
    <p><b>Reset Your Password</b></p>
  <div className="Email">
    <label for="exampleInputEmail1"><b>Please Enter Email address</b></label><br/>
    <input type="email"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
  </div>
  <br/>
  <div className="NewPassword">
    <label for="exampleInputPassword1"><b>Please enter new Password</b></label><br/>
    <input type="password"  id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <br/>
  <div className="ConfirmPassword">
    <label for="exampleInputPassword2"><b>Confirm Password</b></label><br/>
    <input type="password"  id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <br/>
  <button type="submit">Log In</button>
</form>
  )
}

export default ForgetPassword;