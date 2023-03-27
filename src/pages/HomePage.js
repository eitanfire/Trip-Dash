import { Col, Row, Container, Card, CardBody, CardHeader, Button } from "reactstrap";
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
            <p>
For the week of April 10th - April 14th buy a drink and/or a pastry and support our trip.
            </p>
          </h3>
        </Row>
        <Button 
        >
        Order Here</Button>
      </Container>
    );
};

export default HomePage;