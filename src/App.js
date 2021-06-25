import {Footer} from "./components/Footer";
import {News} from "./components/news";
import {Raffles} from "./components/raffles";
import {Gallery} from "./components/gallery";
import {Choice} from "./components/choice";
import "./scss/index.scss";

function App() {
  return (
    <>
      <Choice/>
      <Gallery />
      <Raffles />
      <News />
      <Footer />
    </>
  );
}

export default App;