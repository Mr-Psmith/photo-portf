import classes from "./logo.module.css";
import { motion } from "framer-motion";

function Logo() {
    return (
        <>
            <div className={classes.wrapper__logo}>
                <motion.div initial={{x: "-110vw"}} animate={{ x: "0" }} transition={{ delay:6, duration: 1, type: "spring", bounce: 0.2 }}>
                    <h1 className={classes.pWord}>P</h1>
                </motion.div>
                <motion.div initial={{x: "110vw"}} animate={{ x: "0" }} transition={{ delay:6, duration: 1, type: "spring", bounce: 0.2 }}>
                    <h1 className={classes.sWord}>S</h1>
                </motion.div>
            </div>
        </>
    );
};

export default Logo;