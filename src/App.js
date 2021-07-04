
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";
import { News } from "./components/news";
import { Raffles } from "./components/raffles";
import { Gallery } from "./components/gallery";
import { Choice } from "./components/choice";
import { WhatIs } from "./components/WhatIs";
import { SlideShow } from "./components/slideShow";
import { Header } from "./components/Header";
import "./scss/index.scss";

function App() {
  return (
    <>
      <Menu />
      <Header />
      <SlideShow />
      <WhatIs />
      <Choice />
      <Gallery />
      <Raffles />
      <News />
      <Footer />
    </>
  );
}

export default App;