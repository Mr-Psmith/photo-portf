import {useState} from "react";
import classes from'./App.module.css';
import Footer from './components/footer';
import PGallerySelection from "./pages/picture-gallery-selection";
import Header from "./components/header";


function App() {

  const [pgs, setPgs] = useState(true);



  

  return (
    <div className={classes.main__App}>
      <section>
        <Header />
      </section>
      <section>
        {pgs ? <PGallerySelection /> : ""}
      </section>
      <section className={classes.section__footer}>
        <Footer />
      </section>
    </div>
  );
}

export default App;
