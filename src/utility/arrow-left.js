import classes from "./arrow-left.module.css";
import arrowLeftWhite from "../img/arrow-vector-white-left1400px.png";
import { motion } from "framer-motion";

function ArrowLeft(props) {

    return (
        <>
            <motion.img initial={{ x: "-900%" }} animate={{ x: props.closeXPr ? "0" : 0 }} transition={{ duration: 1, type: "spring", bounce: 0 }} exit={{x: "900%"}} className={classes.pictureSwitchLeft} src={arrowLeftWhite} alt="" onClick={props.pictureSwitchHandlerPr}></motion.img>
        </>
    );
};

export default ArrowLeft;