import {Footer} from "./components/Footer";
import {News} from "./components/news";
import {Raffles} from "./components/raffles";
import "./scss/index.scss";

function App() {
  return (
    <>
      <Raffles />
      <News />
      <Footer />
    </>
  );
}

export default App;