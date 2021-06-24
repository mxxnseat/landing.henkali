import {Footer} from "./components/Footer";
import {News} from "./components/news";
import {Raffles} from "./components/raffles";
import {Gallery} from "./components/gallery";
import "./scss/index.scss";

function App() {
  return (
    <>
      <Gallery />
      <Raffles />
      <News />
      <Footer />
    </>
  );
}

export default App;