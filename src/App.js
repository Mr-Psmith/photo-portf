import classes from './App.module.css';
import GallerySelection from "./pages/picture-gallery-selection";
import GalleryThematic from "./pages/picture-gallery-thematic";
import About from "./pages/about";
import Contact from "./pages/contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import GallerySubMenu from './utility/gallery-submenu';


function App() {

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


  return (

    <div className={classes.main__App} >
      <RouterProvider router={router} >
        <section>
        </section>
        <section>
          <GallerySubMenu />
        </section>
        <section className={classes.section__footer}>

        </section>
      </RouterProvider>
    </div>
  );
}

export default App;