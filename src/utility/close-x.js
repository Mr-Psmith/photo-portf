import classes from "./closex.module.css";

import { motion } from "framer-motion";

function Close(props) {

    return (
        <>
            <motion.div initial={{ x: "900%" }} animate={{ x: props.closeXPr ? "0" : 0 }} transition={{ delay: 1, duration: 1, type: "spring", bounce: 0.3 }} exit={{x: "900%"}} className={classes.closeXMain} onClick={props.closeAllHandlerPr}></motion.div>
        </>
    );
};

export default Close;