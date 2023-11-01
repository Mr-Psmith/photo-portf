import classes from "./header-upper.module.css";
import {motion} from "framer-motion";

function HeaderUpper() {


    return (
        <>
            <div className={classes.headerUpper}>
                <div className={classes.headerUpper__left}>
                    <h1>Hi, I am Pal Szenthe this is my photographer portfolio, please enjoy</h1>
                    <h2>Obvious placeholder</h2>
                </div>
                <div className={classes.HeaderUpper__right}>
                    <motion.div initial={{ x: "300%" }} animate={{ x: "-100%" }} transition={{ delay: 4, duration: 1, type: "spring", bounce: 0.2 }}>
                        <h1 className={classes.pWord}>P</h1>
                    </motion.div>
                    <motion.div initial={{ x: "-300%" }} animate={{ x: "-100%" }} transition={{ delay: 4, duration: 1, type: "spring", bounce: 0.2 }}>
                        <h1 className={classes.sWord}>S</h1>
                    </motion.div>
                </div>

            </div>
        </>
    )
}

export default HeaderUpper;