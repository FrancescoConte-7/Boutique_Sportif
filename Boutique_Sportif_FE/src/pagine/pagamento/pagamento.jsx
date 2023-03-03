import { Button } from "react-bootstrap";
import "./pagamento.css";
import toast from "react-hot-toast";

export const Pagamento = () => {
  return (
    <div class="container p-0 pagamento">
      <div class="card px-4 my-4">
        <div class="row gx-3 mt-3">
          <div class="col-12">
            <div class="d-flex flex-column">
              <p class="text mb-1">Nome Cognome</p>
              <input
                class="form-control mb-3"
                type="text"
                placeholder="Inserisci il tuo nome"
              />
            </div>
          </div>
          <div class="col-12">
            <div class="d-flex flex-column">
              <p class="text mb-1">Numero carta</p>
              <input
                class="form-control mb-3"
                type="number"
                placeholder="1234 5678 435678"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="d-flex flex-column">
              <p class="text mb-1">Scadenza carta</p>
              <input
                class="form-control mb-3"
                type="month"
                placeholder="MM/YYYY"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="d-flex flex-column">
              <p class="text mb-1">CVV/CVC</p>
              <input
                class="form-control mb-3 pt-2 "
                type="number"
                placeholder="---"
              />
            </div>
          </div>
          <div class="col-12 mb-3 w-100">
            <Button
              className="pay w-100"
              variant="dark"
              onClick={() => toast.success("PAGAMENTO AVVENUTO CON SUCCESSO")}
            >
              PAGA
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
