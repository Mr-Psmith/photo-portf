//these are a kind of menü, and gallery coop, so 6-8 thematic picture, which if clicked brings you to the page of the given theme
//the menu itself could let users go to the submenüs, the thematic gallerypieces, as a rolldown menu
import classes from "./picture-gallery-thematic.module.css";
//import { motion } from "framer-motion";
//import { Link } from "react-router-dom";

import pictureAzores from "../img/picsResizedTo10/IMGP0806-1-3.jpg";
import pictureOceanic from "../img/picsResizedTo10/IMGP3835-1-3.jpg";
import pictureNature from "../img/picsResizedTo10/IMGP1781-1.jpg";
import pictureCity from "../img/picsResizedTo10/IMGP2413-1-2.jpg";
import { Link } from "react-router-dom";
//import pictureCanada from "../img/picsResizedTo10/IMGP6593.jpg";


function GalleryThematic(props) {

    return (
        <>
                <div className={classes.galleryThematic__main}>
                    <Link to="gallery-azores" className={classes.menuImages__wrapper}><img src={pictureAzores} alt="" className={classes.menuImages}></img><p>My picture collection I shooted on Azores</p></Link>
                    <Link to="gallery-oceanic" className={classes.menuImages__wrapper}><img src={pictureOceanic} alt="" className={classes.menuImages}></img><p>Oceans and views</p></Link>
                    <Link to="gallery-greenery" className={classes.menuImages__wrapper}><img src={pictureNature} alt="" className={classes.menuImages}></img><p>Nature</p></Link>
                    <Link to="gallery-citiscape" className={classes.menuImages__wrapper}><img src={pictureCity} alt="" className={classes.menuImages}></img><p>Cityscapes</p></Link>
                    {/* <div className={classes.menuImages__wrapper}><img src={pictureCanada} alt="" className={classes.menuImages}></img><p>From Canada with love</p></div> */}
                </div>
        </>
    );
};

export default GalleryThematic;