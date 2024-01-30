import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

export default function RootLayout(props) {


    return <>
        <main>
            <Outlet />
            <Header galleryBackToNormalHandler={props.galleryBackToNormalHandler}/>
            <Footer/>
        </main>
    </>
}