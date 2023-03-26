import { Container, Navbar, NavbarBrand } from "reactstrap";
import logo from '../assets/img/trip-dash-logo.png'
import "../App.css";

const Header = () => {
    return (
    <Navbar className="NavBar" dark color="primary" sticky="top" expand="md">
      <Container>
        <NavbarBrand href="/">
          <img className="logo" src={logo} alt="trip dash logo" />
        </NavbarBrand>
      </Container>
    </Navbar>
    );
}

export default Header;