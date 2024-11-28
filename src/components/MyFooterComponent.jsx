import { Col, Container, Row } from "react-bootstrap";

const MyFooterComponent = () => {
  return (
    <footer>
      <footer className="bg-dark text-light py-4 ">
        <Container fluid>
          <Row className="justify-content-center">
            <Col xs={12} sm={6} md={3} className="mb-3">
              <h5>About Us</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non volutpat massa.</p>
            </Col>
            <Col xs={12} sm={6} md={3} className="mb-3">
              <h5>Useful Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-light">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={3} className="mb-3">
              <h5>Contact</h5>
              <ul className="list-unstyled">
                <li>Email: bookshop@example.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Address: 123 Main Street, City, State</li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={3} className="mb-3">
              <h5>Follow Us</h5>
              <div>
                <a href="#" className="text-light me-2">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-light me-2">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-light me-2">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-light">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-4">
            <Col className="text-center">
              <p>&copy; 2024 Book Shop. All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </footer>
  );
};

export default MyFooterComponent;
