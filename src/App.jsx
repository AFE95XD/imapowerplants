import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import SecCardsInfo from "./components/SecCardsInfo";
import SecContacto from "./components/SecContacto";
import SecInfo1 from "./components/SecInfo1";
import SecParallax from "./components/SecParallax";

function showLoader() {
  try {
    var loader = document.getElementById("loader");
    if (loader) {
      loader.style.display = "flex";
    }
  } catch (err) {
    console.log("Error al mostrar el loader: " + err);
  }
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular una carga de 2 segundos
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <SecParallax />
          <SecCardsInfo />
          <SecInfo1 />
          <SecContacto />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
