import classes from "./galleryMenu.module.css";

import { motion } from "framer-motion";

function GalleryUnderMenu(props) {

    return (
        <>
            <motion.div initial={{ x: "900%" }} animate={{ x: props.closeXPr ? "0" : 0 }} transition={{ delay: 1, duration: 1, type: "spring", bounce: 0.3 }} exit={{x: "900%"}} className={classes.galleryMenuMain}>
                <li>Azores</li>
                <li>Oceans</li>
                <li>Greenery</li>
                <li>Cities</li>
                <li>Canada</li>
            </motion.div>
        </>
    );
};

export default GalleryUnderMenu;