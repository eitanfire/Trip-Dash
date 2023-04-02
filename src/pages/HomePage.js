import { Col, Row, Container, Card, CardBody, CardHeader, Button } from "reactstrap";
import logo from "../assets/img/trip-dash-logo.png";
import '../App.css';

const HomePage = () => {
    return (
      <Container>
        <Row>
          <h1></h1>
          <p>
            <Card>
              <CardHeader id="card-header">
                <h2>Guatemala is known for its exceptional coffee.</h2>
              </CardHeader>
            </Card>
          </p>
        </Row>
        <Row>
          <h3>
            <p>
              Let's use coffee to help make our trip to Guatemala inclusive
              regardless of financial status.
            </p>
            <img
              className="logo col col-md-4"
              src={logo}
              alt="trip dash logo"
            />
            <p>
              Here's the deal: Let our trip members bring you a drink or a treat
              and help send us to Guatemala!
            </p>
            <p>
              For the week of April 10th - April 14th buy a drink and/or a
              pastry and support our trip.
            </p>
          </h3>
        </Row>
        <Row>
            <Button id="order-button">Order Here</Button>
        </Row>
      </Container>
    );
};

export default HomePage;