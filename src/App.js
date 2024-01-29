//import { useState } from "react";
import classes from './App.module.css';
//import Footer from './components/footer';
import GallerySelection from "./pages/picture-gallery-selection";
import GalleryThematic from "./pages/picture-gallery-thematic";
import About from "./pages/about";
import Contact from "./pages/contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import GalleryThematicAzores from "./pages/gallery-thematic-azores";
import GalleryThematicOceanic from "./pages/gallery-thematic-oceanic";
import GalleryThematicGreenery from "./pages/gallery-thematic-greenery";
import GalleryThematicCitiscape from "./pages/gallery-thematic-citiscape";
import { useState } from 'react';
import GallerySubMenu from './utility/gallery-submenu';
//import Header from "./components/header";


function App() {

  const router = createBrowserRouter([
    {
      path: "/", element: <RootLayout />, children: [
        { index: true, element: <GallerySelection /> },
        { path: "galleries", element: <GalleryThematic /* galleryAzoresHandler={galleryAzoresHandler} galleryOceanicHandler={galleryOceanicHandler} galleryNatureHandler={galleryNatureHandler} galleryCitiesHandler={galleryCitiesHandler} */ /> },
        /* {
          path: "/galleries", element: <Outlet />, children: [
            { index: true, element: <GalleryThematic /> },
            { path: "/galleries/gallery-azores", element: <GalleryThematicAzores /> },
            { path: "/galleries/gallery-oceanic", element: <GalleryThematicOceanic /> },
            { path: "/galleries/gallery-greenery", element: <GalleryThematicGreenery /> },
            { path: "/galleries/gallery-citiscape", element: <GalleryThematicCitiscape /> }
          ]
        }, */
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> }
      ],
    },
  ]);

  /* const [galleryAzores, setGalleryAzores] = useState(false);
  const [galleryOceanic, setGalleryOceanic] = useState(false);
  const [galleryNature, setGalleryNature] = useState(false);
  const [galleryCitiscape, setGalleryCitiscape] = useState(false);
  const [pictureGalleryThematic, setpictureGalleryThematic] = useState(true);

  function galleryAzoresHandler() {
    setGalleryAzores(true);
    setpictureGalleryThematic(false);
  }
  function galleryOceanicHandler() {
    setGalleryOceanic(true);
    setpictureGalleryThematic(false);
  }
  function galleryNatureHandler() {
    setGalleryNature(true);
    setpictureGalleryThematic(false);
  }
  function galleryCitiesHandler() {
    setGalleryCitiscape(true);
    setpictureGalleryThematic(false);
  }
 */

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
          <GallerySubMenu />
          {/* <RootLayout /* gallerySelectionHandlerPpr={gallerySelectionHandler} aboutHandlerPpr={aboutHandler} contactHandlerPpr={contactHandler} galleryThematicHandlerPpr={galleryThematicHandler} */ /* onScroll={headerOnScrollPr} /> */}
          {/* {pgs ? GallerySelectionConst : ""}
          {pgt ? GalleryThematicConst : ""}
          {about ? AboutConst : ""}
          {contacts ? contactsConst : ""} */}
          {/* {emailCopyPopup ? <EmailCopyPopup /> : ""} */}
          {/* {galleryAzores ? <GalleryThematicAzores /> : ""}
          {galleryOceanic ? <GalleryThematicOceanic /> : ""}
          {galleryNature ? <GalleryThematicGreenery /> : ""}
          {galleryCitiscape ? <GalleryThematicCitiscape /> : ""}
          {pictureGalleryThematic ? <GalleryThematic /> : ""} */}
        </section>
        <section className={classes.section__footer}>

        </section>
      </RouterProvider>
    </div>
  );
}

export default App;