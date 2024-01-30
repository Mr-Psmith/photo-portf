//these are a kind of menü, and gallery coop, so 6-8 thematic picture, which if clicked brings you to the page of the given theme
//the menu itself could let users go to the submenüs, the thematic gallerypieces, as a rolldown menu
import classes from "./picture-gallery-thematic.module.css";

import pictureAzores from "../img/picsResizedTo10/IMGP0806-1-3.jpg";
import pictureOceanic from "../img/picsResizedTo10/IMGP3835-1-3.jpg";
import pictureNature from "../img/picsResizedTo10/IMGP1781-1.jpg";
import pictureCity from "../img/picsResizedTo10/IMGP2413-1-2.jpg";
import { useState } from "react";
import GalleryThematicAzores from "./gallery-thematic-azores";
import GalleryThematicOceanic from "./gallery-thematic-oceanic";
import GalleryThematicGreenery from "./gallery-thematic-greenery";
import GalleryThematicCitiscape from "./gallery-thematic-citiscape";
import GallerySubMenu from "../utility/gallery-submenu";
import { AnimatePresence } from "framer-motion";


function GalleryThematic(props) {

    const [galleryAzores, setGalleryAzores] = useState(false);
    const [galleryOceanic, setGalleryOceanic] = useState(false);
    const [galleryNature, setGalleryNature] = useState(false);
    const [galleryCitiscape, setGalleryCitiscape] = useState(false);
    const [gallerySubMenu, setGallerySubMenu] = useState(false);
    const [pictureGalleryThematic, setpictureGalleryThematic] = useState(true);



    function galleryAzoresHandler() {
        setGalleryAzores(true);
        setpictureGalleryThematic(false);
        setGallerySubMenu(true);
    }
    function galleryOceanicHandler() {
        setGalleryOceanic(true);
        setpictureGalleryThematic(false);
        setGallerySubMenu(true);
    }
    function galleryNatureHandler() {
        setGalleryNature(true);
        setpictureGalleryThematic(false);
        setGallerySubMenu(true);
    }
    function galleryCitiesHandler() {
        setGalleryCitiscape(true);
        setpictureGalleryThematic(false);
        setGallerySubMenu(true);
    }

    function GallerySubMenu__AzoresHandler() {
        setGalleryAzores(true);
        setGalleryOceanic(false);
        setGalleryNature(false);
        setGalleryCitiscape(false);
        setpictureGalleryThematic(false);
    }
    function GallerySubMenu__OceanHandler() {
        setGalleryAzores(false);
        setGalleryOceanic(true);
        setGalleryNature(false);
        setGalleryCitiscape(false);
        setpictureGalleryThematic(false);
    }
    function GallerySubMenu__NatureHandler() {
        setGalleryAzores(false);
        setGalleryOceanic(false);
        setGalleryNature(true);
        setGalleryCitiscape(false);
        setpictureGalleryThematic(false);
    }
    function GallerySubMenu__CitiscapeHandler() {
        setGalleryAzores(false);
        setGalleryOceanic(false);
        setGalleryNature(false);
        setGalleryCitiscape(true);
        setpictureGalleryThematic(false);
    }
    const pictureGalleryThematicJsx = <><div className={classes.menuImages__wrapper}><img src={pictureAzores} onClick={galleryAzoresHandler} alt="" className={classes.menuImages}></img><p>My picture collection I shooted on Azores</p></div> 
    <div className={classes.menuImages__wrapper}><img src={pictureOceanic} onClick={galleryOceanicHandler} alt="" className={classes.menuImages}></img><p>Oceans and views</p></div>
    <div className={classes.menuImages__wrapper}><img src={pictureNature} onClick={galleryNatureHandler} alt="" className={classes.menuImages}></img><p>Nature</p></div>
    <div className={classes.menuImages__wrapper}><img src={pictureCity} onClick={galleryCitiesHandler} alt="" className={classes.menuImages}></img><p>Cityscapes</p></div></>;

    return (
        <>
            <div className={classes.galleryThematic__main}>
            {gallerySubMenu ? <AnimatePresence ><GallerySubMenu GallerySubMenu__AzoresHandler={GallerySubMenu__AzoresHandler} GallerySubMenu__OceanHandler={GallerySubMenu__OceanHandler} GallerySubMenu__NatureHandler={GallerySubMenu__NatureHandler} GallerySubMenu__CitiscapeHandler={GallerySubMenu__CitiscapeHandler} /></AnimatePresence> : ""}
            {galleryAzores ? <GalleryThematicAzores /> : ""}
            {galleryOceanic ? <GalleryThematicOceanic /> : ""}
            {galleryNature ? <GalleryThematicGreenery /> : ""}
            {galleryCitiscape ? <GalleryThematicCitiscape /> : ""}
            {pictureGalleryThematic ? pictureGalleryThematicJsx : ""}
            
        </div >
        </>
    );
};

export default GalleryThematic;