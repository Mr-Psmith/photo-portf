import {useState} from "react";
import './App.css';
import Footer from './components/footer';
import PGallerySelection from "./pages/picture-gallery-selection";

function App() {

  const [pgs, setPgs] = useState(true);



  

  return (
    <div>
      <section>

      </section>
      <section>
        {pgs ? <PGallerySelection /> : ""}
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
