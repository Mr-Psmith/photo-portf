//import { useState } from "react";
import classes from './App.module.css';
//import Footer from './components/footer';
import GallerySelection from "./pages/picture-gallery-selection";
import GalleryThematic from "./pages/picture-gallery-thematic";
import About from "./pages/about";
import Contact from "./pages/contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import GalleryThematicAzores from "./pages/GalleryThematicAzores";
import GalleryThematicOceanic from "./pages/GalleryThematicOceanic";
import GalleryThematicGreenery from "./pages/GalleryThematicGreenery";
import GalleryThematicCitiscape from "./pages/GalleryThematicCitiscape";
//import Header from "./components/header";



const router = createBrowserRouter([
  {
    path: "/", element: <RootLayout />, children: [
      { index: true, element: <GallerySelection /> },
      {
        path: "galleries", element: <GalleryThematic />, children: [
          { path: "gallery-azores", element: <GalleryThematicAzores /> },
          { path: "gallery-oceanic", element: <GalleryThematicOceanic /> },
          { path: "gallery-greenery", element: <GalleryThematicGreenery /> },
          { path: "gallery-citiscape", element: <GalleryThematicCitiscape /> }
        ]
      },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> }
    ],
  },
]);

function App() {

  /* const [pgs, setPgs] = useState(true);
  const [pgt, setPgt] = useState(false);
  const [about, setAbout] = useState(false);
  const [contacts, setContacts] = useState(false);
 */

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
          <Outlet />
          {/* <RootLayout /* gallerySelectionHandlerPpr={gallerySelectionHandler} aboutHandlerPpr={aboutHandler} contactHandlerPpr={contactHandler} galleryThematicHandlerPpr={galleryThematicHandler} */ /* onScroll={headerOnScrollPr} /> */}
          {/* {pgs ? GallerySelectionConst : ""}
          {pgt ? GalleryThematicConst : ""}
          {about ? AboutConst : ""}
          {contacts ? contactsConst : ""} */}
          {/* {emailCopyPopup ? <EmailCopyPopup /> : ""} */}

        </section>
        <section className={classes.section__footer}>

        </section>
      </RouterProvider>
    </div>
  );
}

export default App;