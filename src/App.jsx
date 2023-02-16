import CardsP from "./components/cards_p";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SecCardsInfo from "./components/SecCardsInfo";
import SecInfo1 from "./components/SecInfo1";
import SecParallax from "./components/SecParallax";

function App() {
  return (
    <>
      <Header />
      <SecParallax />
      {/* <Hero /> */}
      <SecCardsInfo />
      {/* <CardsP /> */}
      <SecInfo1 />
      <Footer />
    </>
  );
}

export default App;
