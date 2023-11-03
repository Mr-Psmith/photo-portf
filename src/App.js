import {useState} from "react";
import classes from'./App.module.css';
import Footer from './components/footer';
import PGallerySelection from "./pages/picture-gallery-selection";
import Header from "./components/header";


function App() {
  const PGallerySelectionConst = <PGallerySelection Prbox16ClickHandler={box16ClickHandler} />;


  const [pgs, setPgs] = useState(true);
  const [box16Picture, setBox16Picture] = useState(false);


  function box16ClickHandler() {

  }

  return (
    <div className={classes.main__App}>
      <section>
        <Header />
      </section>
      <section>
        {pgs ? PGallerySelectionConst : ""}
      </section>
      <section className={classes.section__footer}>
        <Footer />
      </section>
    </div>
  );
}

export default App;
