import React from "react";
import LoremIpsum from 'lorem-ipsum';
import abc from "./images/abc.jpg";
// import { Form } from "react-bootstrap";
import "./Guide.css";

const Guide = () => {
  return (
    <div className="Guide">
      <h1>Guide Information</h1>
      <br></br>
      <div className="Container">
        <div className="GuideInformation">
          <p>Name: Nabin Rokaya</p>
          <p>Gender: Female</p>
          <p>Experience: 50 Years</p>
          <p>Email: nabenarokaya123@gmail.com</p>
          <p>Phone No.: +977 98364732647</p>
          <p>
            Completed Trek: Chandragiri, Pachpokhari, Bethanchowk, Khaptad, etc.
          </p>
          <button type="onclick">Edit</button>
        </div>
        <div className="GuideIntro">
          <img className="ProfilePicture"src={abc} alt="" />
            <h2>Nabin Rokaya</h2>

            <p>
              fgjkdgbdfhou ghrrut <br />
              gruytbrhbt gfsjsgdfgduv
              <br />
              rvtebu
            </p>
        </div>
      </div>
      <h3 className="fw-bold">Services Offered :</h3>
      <h5 className="fw-bold">Guided Tours: </h5>
      <p>sfghdsfvdbsvjdsbkvbvdbvkjdsg  gruhrghkfjhgkjdfhgf udgsfuhekugureh hjdvbjhdgvjhsdgbjhvbsdjhvbjhsdbvjhsdbjhv<br/>
      dvjsdbkjvdvbkjdsbvkjbsdkjvb dgvjhsdgbjhvbsdjhvbjhsdbvjhsdbjhvdvjsdbkjvdvbkjdsbvkjbsdkjvbvkbsdkvbkjdsbvkjbdkv<br/>
      kbdskbvskjbvkd</p>
      <h5 className="fw-bold">Nature Execution: </h5>
    </div>
  );
};

export default Guide;
