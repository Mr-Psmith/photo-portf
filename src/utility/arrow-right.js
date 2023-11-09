import classes from "./arrow-right.module.css";
import arrowRightWhite from "../img/arrow-vector-white-right1400px.png";
import { motion } from "framer-motion";

function ArrowRight(props) {

    return (
        <>
            <motion.img initial={{ x: "900%" }} animate={{ x: props.closeXPr ? "0" : 0 }} transition={{ duration: 1, type: "spring", bounce: 0 }} exit={{x: "900%"}} className={classes.pictureSwitchRight} src={arrowRightWhite} alt="" onClick={props.pictureSwitchHandlerPr}></motion.img>
        </>
    );
};

export default ArrowRight;