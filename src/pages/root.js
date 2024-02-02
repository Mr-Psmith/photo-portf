import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import classes from "../App.module.css";

export default function RootLayout(props) {


    return <>
        <main className={classes.router}>
            <Header galleryBackToNormalHandler={props.galleryBackToNormalHandler} />
            <Outlet />
            <Footer />
        </main>
    </>
}