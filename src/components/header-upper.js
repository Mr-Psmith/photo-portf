import Logo from "./logo";
import classes from "./header-upper.module.css";
import {motion} from "framer-motion";

function HeaderUpper() {


    return (
        <>
            <div className={classes.headerUpper}>
                <div className={classes.headerUpper__left}>
                    <h1>Hi, I am Pal Szenthe this is my photographer portfolio, please enjoy</h1>
                </div>
                <div className={classes.HeaderUpper__right}>
                    <Logo />
                </div>

            </div>
        </>
    )
}

export default HeaderUpper;