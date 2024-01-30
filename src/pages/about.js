import classes from "./about.module.css";

import { motion } from "framer-motion";

function About(props) {

    return (
        <>
            <motion.div /* initial={{ x: "900%" }} animate={{ x: props.closeXPr ? "0" : 0 }} transition={{ delay: 1, duration: 1, type: "spring", bounce: 0.3 }} exit={{x: "900%"}} */ className={classes.aboutMain}>
                <h1>Welcome</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                <p>do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                <p>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </motion.div>
        </>
    );
};

export default About;