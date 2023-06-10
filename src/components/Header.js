import { Col, Row, Container, Navbar, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <Navbar className="NavBar" dark color="primary" sticky="top" expand="md">
      <Container>
        <Row>
          <Col>
            <NavbarBrand href="/">
              <h1 id="header-title" className="col col-ms-8">
                ☕️ Coffee for a Cause 🇬🇹
              </h1>
            </NavbarBrand>
          </Col>
          <Col className="order-link">
            <Link to="order">
              <h3>Order</h3>
            </Link>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
