import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./componenti/header/header";
import { Footer } from "./componenti/footer/footer";
import { Home } from "./pagine/home/home";
import { AbbigliamentoMisto } from "./pagine/abbigliamento/abb_misto";
import { CalzatureMiste } from "./pagine/calzature/calz_miste";
import { Carrello } from "./pagine/carrello/carrello";
import { Pagamento } from "./pagine/pagamento/pagamento";
import { Recensioni } from "./pagine/recensioni/recensioni";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

export const App = () => {
  const [carrello, setCarrello] = useState([]);

  const addToCart = (item) => {
    setCarrello((prev) => (prev = [...prev, item]));
  };

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: "white",
            color: "black",
            textAlign: "center",
            margin: "6rem",
          },
          position: "top-center",
        }}
      />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/abb_misto"
            element={<AbbigliamentoMisto addToCart={addToCart} />}
          />
          <Route
            path="/calz_miste"
            element={<CalzatureMiste addToCart={addToCart} />}
          />
          <Route path="/carrello" element={<Carrello carrello={carrello} />} />
          <Route path="/pagamento" element={<Pagamento />} />
          <Route path="/recensioni" element={<Recensioni />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
