import { Col, Row, Container, Navbar, NavbarBrand } from "reactstrap";
import "../App.css";

const Header = () => {
    return (
      <Navbar className="NavBar" dark color="primary" sticky="top" expand="md">
        <Container>
          <NavbarBrand href="/">
            <h1 id="header-title" className="col col-ms-8">
              ☕️ Coffee for a Cause 🇬🇹
            </h1>
          </NavbarBrand>
        </Container>
      </Navbar>
    );
}

export default Header;