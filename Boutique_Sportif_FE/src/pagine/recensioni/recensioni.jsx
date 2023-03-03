import "./recensioni.css";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useEffect } from "react";

export const Recensioni = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="recensioni my-5">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Ancora non sono presenti recensioni.</Form.Label>
          <Form.Control
            type="text"
            placeholder="Scrivi qui la tua recensione..."
          />
          <Form.Text className="text-muted">
            Invia una recensione totalmente anonima.
          </Form.Text>
        </Form.Group>
        <Button className="recbutt" href="#" variant="dark" type="submit">
          INVIA
        </Button>
      </Form>
    </div>
  );
};
