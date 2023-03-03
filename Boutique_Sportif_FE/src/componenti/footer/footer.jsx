import { Link } from "react-router-dom";
import NavDropup from "react-bootstrap/NavDropdown";
import { BiRegistered } from "react-icons/bi";
import "./footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="d-flex justify-content-center align-items-center px-2 py-2 footer">
        <div className="d-flex justify-content-center align-items-center px-2 py-2 footer">
          <p>All rights reserved </p>
          <BiRegistered />

          <NavDropup className="f-link-container px-3" title="Contatti">
            <NavDropup.Item>Tel. 037 88 257</NavDropup.Item>
            <NavDropup.Divider />
            <NavDropup.Item>E-mail: boutiquesportif@contacts.it</NavDropup.Item>
          </NavDropup>
          <Link
            preventScrollReset={false}
            className="f-link-container"
            to={"/recensioni"}
          >
            Recensioni
          </Link>
        </div>
      </footer>
    </>
  );
};
