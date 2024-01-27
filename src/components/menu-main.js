//import { useState } from "react";
import classes from "./menu-main.module.css";
//import GalleryUnderMenu from "./galleryMenu";
//import { motion } from "framer-motion";
import { Link } from "react-router-dom";


function MenuMain(props) {
    /* const [slideDown, setSlideDown] = useState(false);

    function galleryMenuPr() {
        setSlideDown(true);
    }
    function galleryMenuLeavePr() {
        setSlideDown(false);
    } */

    return (
        <>
            {/* <motion.div initial={{ x: "900%" }} animate={{ x: slideDown ? "0" : 0 }} transition={{ delay: 1, duration: 1, type: "spring", bounce: 0.3 }} exit={{x: "900%"}} className={classes.menu_main}> */}
            <div className={classes.menu_main}>
                <li /* onClick={props.gallerySelectionHandlerPr} */><Link className={classes.menuMain__links} to="">Selected Showcase</Link></li>
                <li /* onClick={props.aboutHandlerPr} */><Link className={classes.menuMain__links} to="about">About Me</Link></li>
                <li /* onClick={props.galleryThematicHandlerPr *//*  onMouseEnter={galleryMenuPr} onMouseLeave={galleryMenuLeavePr} */><Link className={classes.menuMain__links} to="galleries">Galleries</Link></li>
                {/* {slideDown ? <GalleryUnderMenu /> : ""} */}
                <li /* onClick={props.contactHandlerPr} */><Link className={classes.menuMain__links} to="contact">Contact</Link></li>
                {/* <li onClick={props.printsHandlerPr}>Prints!</li> */}
            </div>
            {/* </motion.div> */}
        </>
    )
}

export default MenuMain;