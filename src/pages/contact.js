import classes from "./contact.module.css";
import facPic from "../img/fac.jpg";
import inst from "../img/insta.png";
import twit from "../img/twit.png";
import gith from "../img/github.png";
import pic from "../img/picsResizedTo10/IMGP1102.jpg";
//import "./transition.css"
import { motion } from "framer-motion";

function Contact(props) {
return (
    <>
        <motion.div /* animate={{ x: props.contactSlidePr ? "-90%" : 0, opacity: props.contactSlidePr ? 1 : 0 }} transition={{ duration: 0.4, type: "spring", bounce: 0.2 }} exit={{ x: "90%" }} */>
            <div className={classes.contactMain}>
                <div className={classes.contactUnvisibleblock1}>
                    <h1>You can write me on my email address!</h1>
                    <div className={classes.contactFormButtons}>
                            <button onClick={props.emailButtonHandlerPr}>psancthus@gmail.com</button>
                        </div> 
                </div>
                <div className={classes.contactUnvisibleblock2}>
                    <div className={classes.picPlus__wrap}>
                        <img src={pic} alt="" className={classes.picPlus}></img>
                    </div>
                    <div className={classes.contactUnvisibleblock2__icons}>
                        <div className={classes.contactUnvisibleblock2__icons__h1}>
                            <h1 >Or you can find me on: </h1>
                        </div>
                        <div className={classes.contactUnvisibleblock2__icon_iconsSry}>
                            <a href="https://github.com/Mr-Psmith" target="_blank" rel="noreferrer">
                                <img src={gith} alt="Gith" className={classes.github}></img>
                            </a>
                            <a href="https://www.facebook.com/messages/t/100000633126813" target="_blank" rel="noreferrer">
                                <img src={facPic} alt="Face" className={classes.fac}></img>
                            </a>
                            <a href="https://instagram.com/..." target="_blank" rel="noreferrer">
                                <img src={inst} alt="Inst" className={classes.inst}></img>
                            </a>
                            <a href="https://twitter.com/messages/1581314633595494400-1581314633595494400?text=" target="_blank" rel="noreferrer">
                                <img src={twit} alt="Twit" className={classes.twitter}></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
        {/* </CSSTransition> */}
    </>
);
}

export default Contact;
