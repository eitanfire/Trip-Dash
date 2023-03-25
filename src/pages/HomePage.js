import { Col, Row, Container, Card, CardBody, CardHeader } from "reactstrap";
import '../App.css';

const HomePage = () => {
    return (
      <Container>
        <Row className="text-center">
          <h1>Coffee for a Cause</h1>
          <p>
            <h2>Guatemala is known for its exceptional coffee.</h2>
          </p>
        </Row>
        <Row>
          <h3>
            <p>
              It seems apropriate then to use coffee to help make our trip to
              Guatemala inclusive regardless of financial status.
            </p>
            <p>
              Here's the deal: Let our trip members bring you a drink or a treat
              and help send us to Guatemala!
            </p>
          </h3>
        </Row>
      </Container>
    );
};

export default HomePage;