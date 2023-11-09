import classes from "./backdrop.module.css";
import {motion} from "framer-motion";

function Backdrop (props) {


return (
    <>
        <motion.div animate={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", bounce: 0.2 }} exit={{ opacity:0 }} className={classes.backdrop} onClick={props.PrbackdropHandler}></motion.div>
    </>
)
}

export default Backdrop;