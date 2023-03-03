import "./carrello.css";
import { Link } from "react-router-dom";
import BoutiqueCard from "../../componenti/BoutiqueCard";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

export const Carrello = (props) => {
  const [totale, setTotale] = useState(0);

  const { carrello } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let tot = 0;
    carrello.forEach((item) => {
      tot += item.prezzo;
    });
    setTotale(tot);
  }, [carrello]);

  return (
    <div className="carrello">
      <Row className="d-flex ">
        {carrello.map((item, index) => {
          return (
            <Col key={index}>
              <BoutiqueCard key={index} item={item} hideButton={true} />
            </Col>
          );
        })}
      </Row>
      <div className="carrello-footer">
        <div className=" totprodotti bg-white ">
          <p>TOTALE : {totale}€</p>
        </div>
        <div className="carrbtn">
          <Link className=" btn btn-dark my-3" id="link" to={"/pagamento"}>
            VAI AL PAGAMENTO
          </Link>
        </div>
      </div>
    </div>
  );
};
