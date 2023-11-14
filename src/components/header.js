import { useEffect, useState } from "react";
import HeaderUpper from "./header-upper";
import classes from "./header.module.css";
import MenuMain from "./menu-main";
import GalleryUnderMenu from "./galleryMenu";



function Header(props) {
    const [gum, setGum] = useState("");
    const [glideUp, setGlideUp] = useState(false);

    useEffect (() => {
        function scrollupHandler() {
            if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
                setGlideUp(true);
            } else {
                setGlideUp(false);
            }
        }
    }, scrollupHandler)
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
            {/* <div className={ glideUp ? {classes.header__wrapper} : `${classes.header__wrapper} ${classes.header__wrapper}`}> */}
            <div className= {glideUp ? "header__wrapper header__NoWrapper" : "header__wrapper"} /* {glideUp ? "header__wrapper" : "header__NoWrapper"} */>
                <div className={classes.header_main} onScroll={scrollupHandler}>
                    <HeaderUpper />
                    <MenuMain gallerySelectionHandlerPr={props.gallerySelectionHandlerPpr} aboutHandlerPr={props.aboutHandlerPpr} contactHandlerPr={props.contactHandlerPpr} galleryThematicHandlerPr={props.galleryThematicHandlerPpr} printsHandlerPr={props.printsHandlerPpr} /* galleryMenuPr={galleryMenuHandler} galleryMenuLeavePr={galleryMenuLeaveHandler} */ />
                </div>
            </div>
        </>
    )
}

export default Header;