import backgroundImage from "../../assets/backgroundImage.jpg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const Contact = () => {
  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // Adjust the height as needed
    // Add other styles as needed
  };

  return (
    <>
    <div style={backgroundStyles}>
      <Navbar />
      <div className="container-fluid d-flex align-items-center justify-content-center">
        <div class="row mb-5">
          <h3 class="h3">You can reach us at saipalmessi@gmail.com</h3>
          <span>
            Have questions about your upcoming trek? Call us and our Experts
            will guide you with trek information.
          </span>
          <h3 class="h3 mt-lg-5 ">
            If you do need to speak with someone
            <br />
            please call 01264 773850 between 10am and 4pm.
          </h3>
        </div>
      </div>
      <div class="container  bg-danger rounded-5 p-5 m-5 ">
        <div class="h3">Contact US</div>
        <form action="/action_page.php">
          <div class="mb-3 mt-3">
            <input
              type="text"
              class="form-control"
              id="fullName"
              placeholder="Enter your Full Name"
              name="fullName"
            />
          </div>
          <div class="mb-3 mt-3">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter your email"
              name="email"
            />
          </div>
          <div class="mb-3 mt-3">
            <textarea
              type="text"
              class="form-control"
              id="textArea"
              placeholder="How can we help you?"
              name="textArea"
            />
          </div>
          <button type="submit" class="btn btn-lg btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>

    <Footer/>
    </>
  );
};

export default Contact;
