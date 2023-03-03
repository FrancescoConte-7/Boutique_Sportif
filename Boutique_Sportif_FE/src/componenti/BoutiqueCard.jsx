import React from "react";
import { Button, Card } from "react-bootstrap";

const BoutiqueCard = (props) => {
  const { item, addToCart, hideButton } = props;

  return (
    <Card style={{ width: "25rem", marginBottom: "50px", marginLeft: "30px" }}>
      <Card.Img style={{ height: "30rem" }} src={item.immagine} />
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>{item.nome}</Card.Title>
        <Card.Text style={{ textAlign: "center", marginBottom: "10px" }}>
          {item.prezzo + "€"}
        </Card.Text>
        {!hideButton && (
          <Button
            style={{ marginLeft: "70px" }}
            variant="dark"
            onClick={() => addToCart(item)}
          >
            AGGIUNGI AL CARRELLO
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default BoutiqueCard;
