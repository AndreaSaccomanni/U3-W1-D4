import { Alert, Container } from "react-bootstrap";

const Welcome = () => (
  <Container>
    <div className="text-center mt-4">
      <Alert variant="primary">
        <h1>Welcome to Book Shop!</h1>
        <p>Your one-stop destination for amazing books.</p>
      </Alert>
      <h2 className="my-4">Find your next favorite story with us!</h2>
    </div>
  </Container>
);

export default Welcome;
