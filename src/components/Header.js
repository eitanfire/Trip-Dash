import { Col, Row, Container, Navbar, NavbarBrand } from "reactstrap";
import logo from '../assets/img/trip-dash-logo.png'
import "../App.css";

const Header = () => {
    return (
      <Navbar className="NavBar" dark color="primary" sticky="top" expand="md">
        <Container>
          <Row>
            <Col>
              <NavbarBrand href="/">
                <img className="logo" src={logo} alt="trip dash logo" />
              </NavbarBrand>
            </Col>
            <Col>
              <h1>☕️ Coffee for a Cause 🇬🇹</h1>
            </Col>
          </Row>
        </Container>
      </Navbar>
    );
}

export default Header;