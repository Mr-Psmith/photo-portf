import { useState } from "react";
import classes from './App.module.css';
import Footer from './components/footer';
import GallerySelection from "./pages/picture-gallery-selection";
import Header from "./components/header";
import GalleryThematic from "./pages/picture-gallery-thematic";
import About from "./pages/about";
import Contact from "./pages/contact";
import EmailCopyPopup from "./utility/email-copy-popup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";



const router = createBrowserRouter([
  { path: "", element: <GallerySelection /> },
  { path: "", element: <RootLayout /> },
  { path: "Galleries", element: <GalleryThematic /> },
  { path: "About", element: <About /> },
  { path: "Contact", element: <Contact /> }
]);

function App() {

  const [pgs, setPgs] = useState(true);
  const [pgt, setPgt] = useState(false);
  const [about, setAbout] = useState(false);
  const [contacts, setContacts] = useState(false);
  const [text] = useState('psancthus@gmail.com');
  const [emailCopyPopup, setEmailCopyPopup] = useState(false);

  function gallerySelectionHandler() {
    setPgs(true);
    setPgt(false);
    setAbout(false);
    setContacts(false);
  }
  function aboutHandler() {
    setAbout(true);
    setPgs(false);
    setPgt(false);
    setContacts(false);
  }
  function contactHandler() {
    setContacts(true);
    setPgt(false);
    setPgs(false);
    setAbout(false);
  }
  function galleryThematicHandler() {
    setPgt(true);
    setPgs(false);
    setAbout(false);
    setContacts(false);
  }

  const emailButtonHandler = async () => {
    setEmailCopyPopup(true);
    setTimeout(() => {
      setEmailCopyPopup(false);
    }, 2500);
    await navigator.clipboard.writeText(text);
  }

  const emailCopyPopupHandler = async () => {
    setEmailCopyPopup(true);
    setTimeout(() => {
      setEmailCopyPopup(false);
    }, 2500);
    await navigator.clipboard.writeText(text);
  }

  const GallerySelectionConst = <GallerySelection /* Prbox16ClickHandler={box16ClickHandler}  */ />;
  const GalleryThematicConst = <GalleryThematic />;
  const AboutConst = <About />;
  const contactsConst = <Contact emailButtonHandlerPr={emailButtonHandler} />;


  



  return (
    <RouterProvider router={router}>
      <div className={classes.main__App} >
        <section>
          <RootLayout gallerySelectionHandlerPpr={gallerySelectionHandler} aboutHandlerPpr={aboutHandler} contactHandlerPpr={contactHandler} galleryThematicHandlerPpr={galleryThematicHandler} /* onScroll={headerOnScrollPr} */ />
        </section>
        <section>

          {pgs ? GallerySelectionConst : ""}
          {pgt ? GalleryThematicConst : ""}
          {about ? AboutConst : ""}
          {contacts ? contactsConst : ""}

          {emailCopyPopup ? <EmailCopyPopup /> : ""}

        </section>
        <section className={classes.section__footer}>
          <Footer emailCopyHandler={emailCopyPopupHandler} />
        </section>
      </div>
    </RouterProvider>
  );
}

export default App;