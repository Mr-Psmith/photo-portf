import classes from "./galleryMenu.module.css";

import { motion } from "framer-motion";

function GalleryUnderMenu(props) {

    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity:1 }} transition={{ duration: 1, type: "spring", bounce: 0.3 }} exit={{opacity:0}} className={classes.galleryMenuMain}>
                <li>Galleries</li>
                <li>Azores</li>
                <li>Oceans</li>
                <li>Nature</li>
                <li>Cities</li>
                <li>Canada</li>
            </motion.div>
        </>
    );
};

export default GalleryUnderMenu;