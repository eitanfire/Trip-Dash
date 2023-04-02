// import { Container, Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
  return (
    <footer className="site-footer">
      <p className="text-center">
        © Trip Dash <span style={{ color: "orange" }}>{year}</span>
        <span id="heart"> ☕️ </span>
      </p>
    </footer>
  );
    }

    export default Footer;