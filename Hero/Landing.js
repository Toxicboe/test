import backgroundImage from "../../assets/backgroundImage.jpg";
import './Landing.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

import NavbarLand from "../Navbar/NavbarLand";
const Landing = () => {
  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // Adjust the height as needed
    // Add other styles as needed
  };

  return (
    <div style={backgroundStyles}>
      <NavbarLand />
      <Container fluid className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <Row className="text-center">
        <Col>
          <div class="display-2 text-uppercase" style={{fontSize:"100px"}}>Explore Nepal</div>
          <div class="h5 mt-4">"Discover Nepal's beauty, culture, and adventure in every<br/> breathtaking corner."</div>
         
           {/* <button class=" mt-4 btn btn-primary outline-dark btn-lg" type="submit">Button</button> */}
           {/* <Button variant="outline-dark" size="lg" className="mt-5 px-5 py-3">Learn More</Button> */}
           {/* <button type="button">Dark</button> */}

           <button class="primary-btn">Learn More</button>



        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Landing;
