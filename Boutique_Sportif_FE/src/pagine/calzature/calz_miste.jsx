import "./calz_miste.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import BoutiqueCard from "../../componenti/BoutiqueCard";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

export const CalzatureMiste = (props) => {
  const [prodotti, setProdotti] = React.useState([]);
  const [genere, setGenere] = useState("all");

  const { addToCart } = props;

  useEffect(() => {
    async function getCalzature() {
      const backend_url = "http://localhost:8080/";
      const res = await fetch(backend_url + "api/prodotti/all");
      const prodotti = await res.json();
      setProdotti(prodotti);
    }

    getCalzature();
  }, []);

  if (prodotti.length === 0 || !prodotti) {
    return <div>Loading...</div>;
  }

  return (
    <div className="calz_miste">
      <div className="centrarea">
        <NavDropdown className=" selettore py-3 mx-5" title="SELEZIONA GENERE">
          <NavDropdown.Item onClick={() => setGenere("Uomo")}>
            UOMO
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => setGenere("Donna")}>
            DONNA
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => setGenere("all")}>
            TUTTO
          </NavDropdown.Item>
        </NavDropdown>
      </div>
      <div className="mx-5">
        <Row className=" d-flex ">
          {prodotti
            .filter((item) => {
              if (genere === "all") {
                return item.tipo === "Calzature";
              } else {
                return item.genere === genere && item.tipo === "Calzature";
              }
            })
            .map((item, index) => {
              return (
                <Col key={index}>
                  <BoutiqueCard key={index} item={item} addToCart={addToCart} />
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
};
