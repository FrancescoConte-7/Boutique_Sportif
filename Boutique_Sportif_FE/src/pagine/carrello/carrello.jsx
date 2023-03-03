import "./carrello.css";
import { Link } from "react-router-dom";
import BoutiqueCard from "../../componenti/BoutiqueCard";
import { useEffect, useState } from "react";

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
    <div>
      {}{" "}
      <div className="carrello d-flex mx-5 my-3 justify-content-between">
        {carrello.map((item) => (
          <BoutiqueCard item={item} hideButton={true} />
        ))}
      </div>
      <div className=" totprodotti bg-white  ">
        <p>TOTALE : {totale}€</p>
      </div>
      <div>
        <Link className=" carrbtn btn btn-dark" id="link" to={"/pagamento"}>
          VAI AL PAGAMENTO
        </Link>
      </div>
    </div>
  );
};
