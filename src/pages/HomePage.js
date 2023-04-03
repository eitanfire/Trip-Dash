import { Col, Row, Container, Card, CardBody, CardHeader, Button } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../assets/img/trip-dash-logo.png";
import '../App.css';

const HomePage = () => {
    return (
      <Container>
        <CardHeader id="card-header">
          <p>
            <h2>
              Let our trip members bring you a drink or a treat and help send us
              to Guatemala!
            </h2>
          </p>
        </CardHeader>
        <CardHeader id="card-body">
          <p>
            <h1>
              For the week of April 10th - April 14th buy a drink and/or a
              pastry and support our trip.
            </h1>
          </p>
        </CardHeader>
        <Link to="order">
          <Button id="order-button">Order Here</Button>
        </Link>
        <p>
          <Card>
            <CardHeader id="card-header">
              <h2>Guatemala is known for its exceptional coffee.</h2>
            </CardHeader>
          </Card>
        </p>{" "}
        <Row></Row>
        <Row>
          <Card>
            <CardHeader id="card-body">
              <Col className="col col-md-4">
                <h3>
                  Let's use coffee to help make our trip to Guatemala inclusive
                  regardless of financial status.
                </h3>
              </Col>

              <Col className="col col-md-8">
                <img
                  className="logo col col-md-4"
                  src={logo}
                  alt="trip dash logo"
                />
              </Col>
            </CardHeader>
          </Card>
        </Row>
      </Container>
    );
};

export default HomePage;