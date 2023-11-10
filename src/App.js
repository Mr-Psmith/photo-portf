import {useState} from "react";
import classes from'./App.module.css';
import Footer from './components/footer';
import GallerySelection from "./pages/picture-gallery-selection";
import Header from "./components/header";
import GalleryThematic from "./pages/picture-gallery-thematic";


function App() {
  const GallerySelectionConst = <GallerySelection /* Prbox16ClickHandler={box16ClickHandler}  *//>;
  const GalleryThematicConst = <GalleryThematic />;

  const [pgs, setPgs] = useState(true);
  const [pgt, setPgt] = useState(true);  

  function gallerySelectionHandler(){
    setPgs(true);
    setPgt(false);
  }
  function aboutHandler() {

  }
  function contactHandler() {

  }
  function galleryThematicHandler() {
    setPgt(true);
    setPgs(false);

  }
  function printsHandler() {

  }

  return (
    <div className={classes.main__App}>
      <section>
        <Header gallerySelectionHandlerPpr={gallerySelectionHandler} aboutHandlerPpr={aboutHandler} contactHandlerPpr={contactHandler} galleryThematicHandlerPpr={galleryThematicHandler} printsHandlerPpr={printsHandler} />
      </section>
      <section>
        {pgs ? GallerySelectionConst : ""}
        {pgt ? GalleryThematicConst : ""}
        


      </section>
      <section className={classes.section__footer}>
        <Footer />
      </section>
    </div>
  );
}

export default App;
