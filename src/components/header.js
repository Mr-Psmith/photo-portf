import { useEffect, useState } from "react";
import HeaderUpper from "./header-upper";
import /* classes from */ "./header.css";
import MenuMain from "./menu-main";
//import GalleryUnderMenu from "./galleryMenu";
import { motion } from "framer-motion";


function Header(props) {
    //const [gum, setGum] = useState("");
    const [glideUp, setGlideUp] = useState(false);
    const [prevOffset, setPrevOffset] = useState(0);

    /* function scrollupHandler() {
        if (document.body.scrollTop || document.documentElement.scrollY || document.window.scrollY || document.getElementsByClassName("header_main").scrollY > 10) {
            setGlideUp(true);
        } else {
            setGlideUp(false);
        }
    } */

    function scrollupHandler ()  {
        let scrollY = window.scrollY
        if (scrollY > prevOffset && scrollY > 5) {
            setGlideUp(true);
        } else if (scrollY < prevOffset && scrollY > 5) {
            setGlideUp(false);
        } else {
            setGlideUp('');
        }
        setPrevOffset(scrollY);
    }



    /* function scrollupHandler() {
        if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
            setGlideUp(true);
        } else {
            setGlideUp(false);
        }
    } */
    /* useEffect(() => {
    function galleryMenuHandler() {
        setGum(<GalleryUnderMenu />);
    }
    function galleryMenuLeaveHandler() {
        setGum("");
    } [galleryMenuHandler,galleryMenuLeaveHandler]}); */

    return (
        <>
            <div className= /*{glideUp ? "header__NoWrapper" :*/ "header__wrapper"/* } */>
                {/* <div className= { glideUp ? "header_main header_main__glide" : "header_main" }  onScroll={scrollupHandler}> */}
                <motion.div animate={{ y: glideUp ? "-110%" : 0/* , opacity: glideUp ? 1 : 0 */ }} transition={{ duration: 0.4, type: "spring", bounce: 0.2 }} /* exit={{ x: "110%" }} */ className= /* { glideUp ? "header_main header_main__glide" : */ "header_main" /* }  */ onScroll={scrollupHandler}>
                    <HeaderUpper />
                    <MenuMain gallerySelectionHandlerPr={props.gallerySelectionHandlerPpr} aboutHandlerPr={props.aboutHandlerPpr} contactHandlerPr={props.contactHandlerPpr} galleryThematicHandlerPr={props.galleryThematicHandlerPpr} printsHandlerPr={props.printsHandlerPpr} /* galleryMenuPr={galleryMenuHandler} galleryMenuLeavePr={galleryMenuLeaveHandler} */ />
                </motion.div>
            </div>
        </>
    )
}

export default Header;