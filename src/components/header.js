import { useEffect, useState } from "react";
import HeaderUpper from "./header-upper";
import classes from "./header.module.css";
import MenuMain from "./menu-main";
import GalleryUnderMenu from "./galleryMenu";



function Header(props) {
    const [gum, setGum] = useState("");
    
    /* useEffect(() => {
    function galleryMenuHandler() {
        setGum(<GalleryUnderMenu />);
    }
    function galleryMenuLeaveHandler() {
        setGum("");
    } [galleryMenuHandler,galleryMenuLeaveHandler]}); */

    return (
        <>
            <div className={classes.header_main}>
                <HeaderUpper />
                <MenuMain gallerySelectionHandlerPr={props.gallerySelectionHandlerPpr} aboutHandlerPr={props.aboutHandlerPpr} contactHandlerPr={props.contactHandlerPpr} galleryThematicHandlerPr={props.galleryThematicHandlerPpr} printsHandlerPr={props.printsHandlerPpr} /* galleryMenuPr={galleryMenuHandler} galleryMenuLeavePr={galleryMenuLeaveHandler} */ />
            </div>
        </>
    )
}

export default Header;