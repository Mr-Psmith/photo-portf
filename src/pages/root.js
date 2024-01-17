import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { useState } from "react";
//import { useState } from "react";

export default function RootLayout(props) {

    /* const [pgs, setPgs] = useState(true);
    const [pgt, setPgt] = useState(false);
    const [about, setAbout] = useState(false);
    const [contacts, setContacts] = useState(false);

    function gallerySelectionHandler() {
        setPgs(true);
        setPgt(false);
        setAbout(false);
        setContacts(false);
    }
    function aboutHandler() {
        setAbout(true);
        setPgs(false);
        setPgt(false);
        setContacts(false);
    }
    function contactHandler() {
        setContacts(true);
        setPgt(false);
        setPgs(false);
        setAbout(false);
    }
    function galleryThematicHandler() {
        setPgt(true);
        setPgs(false);
        setAbout(false);
        setContacts(false);
    } */

    const [text] = useState('psancthus@gmail.com');
    const [emailCopyPopup, setEmailCopyPopup] = useState(false);

    const emailButtonHandler = async () => {
        setEmailCopyPopup(true);
        setTimeout(() => {
            setEmailCopyPopup(false);
        }, 2500);
        await navigator.clipboard.writeText(text);
    }

    const emailCopyPopupHandler = async () => {
        setEmailCopyPopup(true);
        setTimeout(() => {
            setEmailCopyPopup(false);
        }, 2500);
        await navigator.clipboard.writeText(text);
    }

    return <>
        <main>
            <Outlet />
            <Header /* gallerySelectionHandlerPpr={props.gallerySelectionHandlerPpr} aboutHandlerPpr={props.aboutHandlerPpr} contactHandlerPpr={props.contactHandlerPpr} galleryThematicHandlerPpr={props.galleryThematicHandlerPpr} */ /* onScroll={headerOnScrollPr} */ />
            <Footer emailCopyHandler={emailCopyPopupHandler} />
        </main>
    </>
}