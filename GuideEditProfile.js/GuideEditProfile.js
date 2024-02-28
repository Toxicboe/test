// rafce
import React from 'react'
import GuideImage from "./images/GuideImage.jpg";
import "./GuideEditProfile.css";

const GuideEditProfile = () => {
  return (
    <div className='guideContainer'>
    <h1>Edit Profile</h1>
    <div className='guideMiniContainer'>
    <form>
      <label htmlFor='name'>Name:</label>
      <input typeof='text' placeholder='Enter your name'/>
      <br/><br/>
      <label for="gender">Gender:</label>
  <input type="radio" id="male" name="gender" value="male"/>
  <label for="male">Male</label>
  <input type="radio" id="female" name="gender" value="female"/>
  <label for="female"> Female</label>
  <input type="radio" id="other" name="gender" value="other"/>
  <label for="other">Other</label>
  <br/><br/>
  <label htmlFor='date'>Experience:</label>
  <input typeof='date'/>
  <br/><br/>
  <label htmlFor='email'>Email:</label>
  <input typeof='email' placeholder='Enter your email'/>
  <br/><br/>
  <label htmlFor='pgoneNo'>Phone No.:</label>
  <input typeof='text'/>
  <br/><br/>
  <label htmlFor='completedTrek'>Completed Trek:</label>
      <input typeof='text' placeholder='Enter completed trek'/>
      <br/><br/>
      <label for="image">Select Image For Profile:</label>
  <input type="file" id="image" name="image" accept="image/*" />
  <br/><br/>
  <button type='submit'>Submit</button>
  </form>
  <img className='guideImage' src={GuideImage} alt='Guide Profile Image' />
    </div>
    </div>
  );
}

export default GuideEditProfile;