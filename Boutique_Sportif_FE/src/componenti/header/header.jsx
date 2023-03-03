import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import "./header.css";

export const Header = () => {
  return (
    <header className=" navbar d-flex justify-content-between align-items-center px-3 py-3">
      <h1 className="titolo">BOUTIQUE SPORTIF</h1>
      <Link to={"/home"}>
        <img
          style={{ maxWidth: "75px", maxHeight: "90px" }}
          src="./src/risorse/img/LogoProgetto2.png"
          alt="logo"
        />
      </Link>
      <div className="link-container">
        <Link className=" link-container px-3" to={"/abb_misto"}>
          ABBIGLIAMENTO
        </Link>
        <Link className="link-container px-3" to={"/calz_miste"}>
          CALZATURE
        </Link>
        <Link to={"/carrello"}>
          <BsCart4 className="link-container" />
        </Link>
      </div>
    </header>
  );
};
