import classes from './App.module.css';
import GallerySelection from "./pages/picture-gallery-selection";
import GalleryThematic from "./pages/picture-gallery-thematic";
import About from "./pages/about";
import Contact from "./pages/contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import GallerySubMenu from './utility/gallery-submenu';
import Loader from './utility/loader';
import { useState } from 'react';


function App() {

  const [loader, setLoader] = useState(true);

  const router = createBrowserRouter([
    {
      path: "/", element: <RootLayout />, children: [
        { index: true, element: <GallerySelection /> },
        { path: "galleries", element: <GalleryThematic /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> }
      ],
    },
  ]);

  //To unmount the loader after firing
  setTimeout(() => {
    setLoader(false);
  }, 5700);

  return (

    <div className={classes.main__App} >
      {loader ? <Loader /> : ""}
      <RouterProvider router={router} >
        <GallerySubMenu />
      </RouterProvider>
    </div>
  );
}

export default App;