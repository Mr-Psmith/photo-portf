//these are a kind of menü, and gallery coop, so 6-8 thematic picture, which if clicked brings you to the page of the given theme
//the menu itself could let users go to the submenüs, the thematic gallerypieces, as a rolldown menu
import classes from "./picture-gallery-thematic.module.css";
//import { motion } from "framer-motion";

import pictureAzores from "../img/picsResizedTo10/IMGP0806-1-3.jpg";
import pictureOceanic from "../img/picsResizedTo10/IMGP3835-1-3.jpg";
import pictureNature from "../img/picsResizedTo10/IMGP1781-1.jpg";
import pictureCity from "../img/picsResizedTo10/IMGP2413-1-2.jpg";
//import pictureCanada from "../img/picsResizedTo10/IMGP6593.jpg";


function GalleryThematic(props) {

    return (
        <>
            <div className={classes.galleryThematic__main}>
                <div className={classes.menuImages__wrapper}><img src={pictureAzores} alt="" className={classes.menuImages}></img><p>My picture collection I shooted on Azores</p></div>
                <div className={classes.menuImages__wrapper}><img src={pictureOceanic} alt="" className={classes.menuImages}></img><p>Pictures focusing on oceanic landscapes</p></div>
                <div className={classes.menuImages__wrapper}><img src={pictureNature} alt="" className={classes.menuImages}></img><p>Green, lush, and chaotic</p></div>
                <div className={classes.menuImages__wrapper}><img src={pictureCity} alt="" className={classes.menuImages}></img><p>From Cities to people</p></div>
                {/* <div className={classes.menuImages__wrapper}><img src={pictureCanada} alt="" className={classes.menuImages}></img><p>From Canada with love</p></div> */}
            </div>
        </>
    );
};

export default GalleryThematic;