import { Footer } from "./components/Footer";
import { News } from "./components/news";
import { Raffles } from "./components/raffles";
import { Gallery } from "./components/gallery";
import { Header } from "./components/Header";
import "./scss/index.scss";

function App() {
  return (
    <>
      <Header />
      <Gallery />
      <Raffles />
      <News />
      <Footer />
    </>
  );
}

export default App;