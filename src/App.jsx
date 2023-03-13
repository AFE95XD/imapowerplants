import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import SecCardsInfo from "./components/SecCardsInfo";
import SecContacto from "./components/SecContacto";
import SecParallax from "./components/SecParallax";

import SecSliderInfinito from "./components/SecSliderInfinito";
import SecVideo from "./components/SecVideo";

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
          <Hero />
          {/* <SecParallax /> */}
          <SecCardsInfo />
          <SecSliderInfinito />
          <SecVideo />
          {/* <SecInfo1 />*/}
          <SecContacto />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
