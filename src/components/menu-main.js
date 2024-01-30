import classes from "./menu-main.module.css";
import { Link } from "react-router-dom";


function MenuMain(props) {

    return (
        <>
            <div className={classes.menu_main}>
                <li><Link className={classes.menuMain__links} to="">Selected Showcase</Link></li>
                <li><Link className={classes.menuMain__links} to="about">About Me</Link></li>
                <li><Link className={classes.menuMain__links} onClick={props.galleryBackToNormalHandler} to="galleries">Galleries</Link></li>
                <li><Link className={classes.menuMain__links} to="contact">Contact</Link></li>
            </div>
        </>
    )
}

export default MenuMain;