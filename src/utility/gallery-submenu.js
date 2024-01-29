import classes from "./gallery-submenu.module.css";
import { motion } from "framer-motion";


function GallerySubMenu(props) {
    /* const [slideDown, setSlideDown] = useState(false);

    function galleryMenuPr() {
        setSlideDown(true);
    }
    function galleryMenuLeavePr() {
        setSlideDown(false);
    } */

    return (
        <>
            <motion.div initial={{ x: "-900%" }} animate={{ x: 0 }} transition={{ delay: 0.5, duration: 1.5, type: "spring", bounce: 0.1 }} exit={{ x: "900%" }} className={classes.menu_main}>
                <li ><div className={classes.menuMain__links} onClick={props.GallerySubMenu__AzoresHandler} >Pictures of Azores</div></li>
                <li ><div className={classes.menuMain__links} onClick={props.GallerySubMenu__OceanHandler} >Oceans and views</div></li>
                <li ><div className={classes.menuMain__links} onClick={props.GallerySubMenu__NatureHandler} >Nature</div></li>
                <li ><div className={classes.menuMain__links} onClick={props.GallerySubMenu__CitiscapeHandler}>Cityscapes</div></li>
            </motion.div>
        </>
    )
}

export default GallerySubMenu;