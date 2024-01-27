import { useState } from "react";
import classes from "./footer.module.css";
import EmailCopyPopup from "../utility/email-copy-popup";

function Footer(props) {

    const [text] = useState('psancthus@gmail.com');
    const [emailCopyPopup, setEmailCopyPopup] = useState(false);

    const emailCopyPopupHandler = async () => {
        setEmailCopyPopup(true);
        setTimeout(() => {
            setEmailCopyPopup(false);
        }, 2500);
        await navigator.clipboard.writeText(text);
    }

    
    return (
        <>
            <div className={classes.footer}>
                <li className={classes.mainFooter__link}>
                    <button className={classes.link} onClick={emailCopyPopupHandler}>
                        psancthus@gmail.com
                    </button>
                    {emailCopyPopup ? <EmailCopyPopup /> : ""}
                </li>
            </div>
        </>
    );
}

export default Footer;
