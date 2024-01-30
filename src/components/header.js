import { useState } from "react";
import HeaderUpper from "./header-upper";
import classes from "./header.module.css";
import MenuMain from "./menu-main";
import { motion } from "framer-motion";


function Header(props) {
    const [glideUp, setGlideUp] = useState(false);
    const [prevOffset, setPrevOffset] = useState(0);

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

    return (
        <>
            <div className={classes.header__wrapper}/>
                <motion.div animate={{ y: glideUp ? "-110%" : 0}} transition={{ duration: 0.4, type: "spring", bounce: 0.2 }} className={classes.header_main}  onScroll={scrollupHandler}>
                    <HeaderUpper />
                    <MenuMain galleryBackToNormalHandler={props.galleryBackToNormalHandler}/>
                </motion.div>
        </>
    )
}

export default Header;