import { Button } from "react-bootstrap";
import "./pagamento.css";
import toast from "react-hot-toast";

export const Pagamento = () => {
  return (
    <div className="pagamento align-items-center">
      <div className="my-3 d-flex ">
        <input type="number" placeholder="N° CARTA" className="numcarta" />
      </div>
      <p className="text-white">SCADENZA CARTA</p>
      <div className=" my-3 d-flex ">
        <input type="month" />
        <input className="mx-4" type="number" placeholder="CVV" />
      </div>
      <div className=" my-3 d-flex ">
        <input type="text" placeholder="NOME" className="" />
        <input type="text" placeholder="COGNOME" className="mx-4" />
      </div>
      <Button
        className="pay"
        variant="dark"
        onClick={() => toast.success("PAGAMENTO AVVENUTO CON SUCCESSO")}
      >
        PAGA
      </Button>
    </div>
  );
};
