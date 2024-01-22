import { useState } from "react";
import classes from './App.module.css';
//import Footer from './components/footer';
import GallerySelection from "./pages/picture-gallery-selection";
import GalleryThematic from "./pages/picture-gallery-thematic";
import About from "./pages/about";
import Contact from "./pages/contact";
import EmailCopyPopup from "./utility/email-copy-popup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import GalleryThematicAzores from "./pages/GalleryThematicAzores";
import GalleryThematicOceanic from "./pages/GalleryThematicOceanic";
import GalleryThematicGreenery from "./pages/GalleryThematicGreenery";
import GalleryThematicCitiscape from "./pages/GalleryThematicCitiscape";
//import Header from "./components/header";



const GallerySelectionConst = <GallerySelection /* Prbox16ClickHandler={box16ClickHandler}  */ />;
  const GalleryThematicConst = <GalleryThematic />;
  const AboutConst = <About />;
  const contactsConst = <Contact /* emailButtonHandlerPr={emailButtonHandler} */ />;

const router = createBrowserRouter([
  {
    path: "/", element: <RootLayout emailCopyPopup={emailCopyPopup} />, children: [
      { index: true, element: <GallerySelection /> },
      {
        path: "/Galleries", element: <GalleryThematic />, children: [
          { path: "/Galleries/Gallery-Azores", element: <GalleryThematicAzores /> },
          { path: "/Galleries/Gallery-Oceanic", element: <GalleryThematicOceanic /> },
          { path: "/Galleries/Gallery-Greenery", element: <GalleryThematicGreenery /> },
          { path: "/Galleries/Gallery-Citiscape", element: <GalleryThematicCitiscape /> }
        ]
      },
      { path: "About", element: <About /> },
      { path: "Contact", element: contactsConst }
    ],
  },
]);

function App() {

  /* const [pgs, setPgs] = useState(true);
  const [pgt, setPgt] = useState(false);
  const [about, setAbout] = useState(false);
  const [contacts, setContacts] = useState(false); */
  

  /* function gallerySelectionHandler() {
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
  } */

  /* const emailButtonHandler = async () => {
    setEmailCopyPopup(true);
    setTimeout(() => {
      setEmailCopyPopup(false);
    }, 2500);
    await navigator.clipboard.writeText(text);
  } */

  /* const emailCopyPopupHandler = async () => {
    setEmailCopyPopup(true);
    setTimeout(() => {
      setEmailCopyPopup(false);
    }, 2500);
    await navigator.clipboard.writeText(text);
  } */

  /* const GallerySelectionConst = <GallerySelection  />;
  const GalleryThematicConst = <GalleryThematic />;
  const AboutConst = <About />;
  const contactsConst = <Contact emailButtonHandlerPr={emailButtonHandler} />; */




  return (

    <div className={classes.main__App} >
      {/* <RootLayout /* gallerySelectionHandlerPpr={gallerySelectionHandler} aboutHandlerPpr={aboutHandler} contactHandlerPpr={contactHandler} galleryThematicHandlerPpr={galleryThematicHandler} */ /* onScroll={headerOnScrollPr} /> */}
      <RouterProvider router={router} /* gallerySelectionHandlerPpr={gallerySelectionHandler} aboutHandlerPpr={aboutHandler} contactHandlerPpr={contactHandler} galleryThematicHandlerPpr={galleryThematicHandler} */ >
        <section>
          {/* <Header gallerySelectionHandlerPpr={gallerySelectionHandler} aboutHandlerPpr={aboutHandler} contactHandlerPpr={contactHandler} galleryThematicHandlerPpr={galleryThematicHandler} /* onScroll={headerOnScrollPr} /> */}
        </section>
        <section>

          {/* <RootLayout /* gallerySelectionHandlerPpr={gallerySelectionHandler} aboutHandlerPpr={aboutHandler} contactHandlerPpr={contactHandler} galleryThematicHandlerPpr={galleryThematicHandler} */ /* onScroll={headerOnScrollPr} /> */}
          {/* {pgs ? GallerySelectionConst : ""}
          {pgt ? GalleryThematicConst : ""}
          {about ? AboutConst : ""}
          {contacts ? contactsConst : ""} */}
          {emailCopyPopup ? <EmailCopyPopup /> : ""}

        </section>
        <section className={classes.section__footer}>
          
        </section>
      </RouterProvider>
    </div>
  );
}

export default App;