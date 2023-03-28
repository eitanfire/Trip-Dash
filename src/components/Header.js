import { Col, Container, Navbar, NavbarBrand } from "reactstrap";
import logo from '../assets/img/trip-dash-logo.png'
import "../App.css";

const Header = () => {
    return (
      <Navbar className="NavBar" dark color="primary" sticky="top" expand="md">
        <Container>
          <Col>
            <NavbarBrand href="/">
              <img className="logo" src={logo} alt="trip dash logo" />
            </NavbarBrand>
          </Col>
          <Col>
            <h1 className="text-center">☕️ Coffee for a Cause 🇬🇹</h1>
          </Col>
        </Container>
      </Navbar>
    );
}

export default Header;