import backgroundImage from "../../assets/backgroundImage.jpg";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Navbar from "../Navbar/Navbar";
const Header = () => {
  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // Adjust the height as needed
    // Add other styles as needed
  };

  return (
    <div style={backgroundStyles}>
      <Navbar />
      <Container fluid className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <Row className="text-center">
        <Col>
          <div class="display-2 text-uppercase" style={{fontSize:"100px"}}>Explore Nepal</div>
          <div class="h5 mt-4">"Discover Nepal's beauty, culture, and adventure in every<br/> breathtaking corner."</div>
          <Button variant="outline-dark" size="lg" className="mt-5 px-5 py-3">Learn More</Button>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Header;
