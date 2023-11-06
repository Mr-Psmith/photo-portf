import classes from "./picture-gallery-selection.module.css";
import { useState } from "react";
import "../index.css";

//import pictureSelect1 from "../img/GallerySelection/IMGP0320-1.jpg";
//import pictureSelect2 from "../img/GallerySelection/IMGP0512-1.jpg";
//import pictureSelect4 from "../img/GallerySelection/IMGP0630.jpg";
//import pictureSelect5 from "../img/GallerySelection/IMGP0664.jpg";
//import pictureSelect8 from "../img/GallerySelection/IMGP0806-1-3.jpg";
//import pictureSelect9 from "../img/GallerySelection/IMGP1102.jpg";
//import pictureSelect10 from "../img/GallerySelection/IMGP1535-1-2.jpg";
//import pictureSelect11 from "../img/GallerySelection/IMGP1639.jpg";
//import pictureSelect12 from "../img/GallerySelection/IMGP1640-1-2.jpg";
//import pictureSelect17 from "../img/GallerySelection/IMGP2118-1-2.jpg";
//import pictureSelect21 from "../img/GallerySelection/IMGP2690-1.jpg";
//import pictureSelect27 from "../img/GallerySelection/IMGP3158-1-2.jpg";
//import pictureSelect25 from "../img/GallerySelection/IMGP3083-1.jpg";
//import pictureSelect29 from "../img/GallerySelection/IMGP3258-1.jpg";
//import pictureSelect30 from "../img/GallerySelection/IMGP3275-1.jpg";
import pictureSelect7 from "../img/GallerySelection/IMGP0749-1.jpg";
import pictureSelect3 from "../img/GallerySelection/IMGP2106-1.jpg";
import pictureSelect13 from "../img/GallerySelection/IMGP1651-WP.jpg";
import pictureSelect14 from "../img/GallerySelection/IMGP1781-1.jpg";
import pictureSelect15 from "../img/GallerySelection/IMGP1880-1-4.jpg";
import pictureSelect16 from "../img/GallerySelection/IMGP2030-1-3.jpg";
import pictureSelect18 from "../img/GallerySelection/IMGP2346-1.jpg";
import pictureSelect19 from "../img/GallerySelection/IMGP2413-1-2.jpg";
import pictureSelect20 from "../img/GallerySelection/IMGP2447-1.jpg";
import pictureSelect22 from "../img/GallerySelection/IMGP2694-1.jpg";
import pictureSelect23 from "../img/GallerySelection/IMGP2986-1-2.jpg";
import pictureSelect24 from "../img/GallerySelection/IMGP3055-1-3.jpg";
import pictureSelect26 from "../img/GallerySelection/IMGP3144-1.jpg";
import pictureSelect6 from "../img/GallerySelection/IMGP0734.jpg";
import pictureSelect28 from "../img/GallerySelection/IMGP3248-1.jpg";
import pictureSelect31 from "../img/GallerySelection/IMGP3608-1.jpg";
import pictureSelect32 from "../img/GallerySelection/IMGP3835-1-3.jpg";
import pictureSelect33 from "../img/GallerySelection/IMGP6593.jpg";
import pictureSelect34 from "../img/GallerySelection/IMGP6894.jpg";
import pictureSelect35 from "../img/GallerySelection/IMGP6901.jpg";
import pictureSelect36 from "../img/GallerySelection/IMGP7352.jpg";
import pictureSelect37 from "../img/GallerySelection/IMGP7655.jpg";

import picture30Select7 from "../img/picsResized30/IMGP0749-1.jpg";
import picture30Select3 from "../img/picsResized30/IMGP2106-1.jpg";
import picture30Select13 from "../img/picsResized30/IMGP1651-WP.jpg";
import picture30Select14 from "../img/picsResized30/IMGP1781-1.jpg";
import picture30Select15 from "../img/picsResized30/IMGP1880-1-4.jpg";
import picture30Select16 from "../img/picsResized30/IMGP2030-1-3.jpg";
import picture30Select18 from "../img/picsResized30/IMGP2346-1.jpg";
import picture30Select19 from "../img/picsResized30/IMGP2413-1-2.jpg";
import picture30Select20 from "../img/picsResized30/IMGP2447-1.jpg";
import picture30Select22 from "../img/picsResized30/IMGP2694-1.jpg";
import picture30Select23 from "../img/picsResized30/IMGP2986-1-2.jpg";
import picture30Select24 from "../img/picsResized30/IMGP3055-1-3.jpg";
import picture30Select26 from "../img/picsResized30/IMGP3144-1.jpg";
import picture30Select6 from "../img/picsResized30/IMGP0734.jpg";
import picture30Select28 from "../img/picsResized30/IMGP3248-1.jpg";
import picture30Select31 from "../img/picsResized30/IMGP3608-1.jpg";
import picture30Select32 from "../img/picsResized30/IMGP3835-1-3.jpg";
import picture30Select33 from "../img/picsResized30/IMGP6593.jpg";
import picture30Select34 from "../img/picsResized30/IMGP6894.jpg";
import picture30Select35 from "../img/picsResized30/IMGP6901.jpg";
import picture30Select36 from "../img/picsResized30/IMGP7352.jpg";
import picture30Select37 from "../img/picsResized30/IMGP7655.jpg";

import arrowRightWhite from "../img/arrow-vector-white-right-4200px.png";
import arrowLeftWhite from "../img/arrow-vector-white-left-4200px.png";

import Backdrop from "../utility/backdrop";



function PGallerySelection(props) {


    const [backdrop, setBackdrop] = useState(false);
    const [box16Picture, setBox16Picture] = useState(false);
    const [box18Picture, setBox18Picture] = useState(false);
    const [box19Picture, setBox19Picture] = useState(false);
    const [box6Picture, setBox6Picture] = useState(false);
    const [box22Picture, setBox22Picture] = useState(false);
    const [box3Picture, setBox3Picture] = useState(false);
    const [box7Picture, setBox7Picture] = useState(false);
    const [box13Picture, setBox13Picture] = useState(false);
    const [box14Picture, setBox14Picture] = useState(false);
    const [box15Picture, setBox15Picture] = useState(false);
    const [box20Picture, setBox20Picture] = useState(false);
    const [box26Picture, setBox26Picture] = useState(false);
    const [box28Picture, setBox28Picture] = useState(false);
    const [box31Picture, setBox31Picture] = useState(false);
    const [box32Picture, setBox32Picture] = useState(false);
    const [box33Picture, setBox33Picture] = useState(false);
    const [box34Picture, setBox34Picture] = useState(false);
    const [box24Picture, setBox24Picture] = useState(false);
    const [box35Picture, setBox35Picture] = useState(false);
    const [box36Picture, setBox36Picture] = useState(false);
    const [box37Picture, setBox37Picture] = useState(false);
    const [box23Picture, setBox23Picture] = useState(false);

    function backdropHandler() {
        setBox16Picture(false);
        setBackdrop(false);
        setBox18Picture(false);
        setBox19Picture(false);
        setBox6Picture(false);
        setBox22Picture(false);
        setBox3Picture(false);
        setBox7Picture(false);
        setBox13Picture(false);
        setBox14Picture(false);
        setBox15Picture(false);
        setBox20Picture(false);
        setBox26Picture(false);
        setBox28Picture(false);
        setBox31Picture(false);
        setBox32Picture(false);
        setBox33Picture(false);
        setBox34Picture(false);
        setBox24Picture(false);
        setBox35Picture(false);
        setBox36Picture(false);
        setBox37Picture(false);
        setBox23Picture(false);
        
        document.body.style.overflowY = "scroll";
    }
    function wrapperCloseHandler() {
        setBox16Picture(false);
        setBackdrop(false);
        setBox18Picture(false);
        setBox19Picture(false);
        setBox6Picture(false);
        setBox22Picture(false);
        setBox3Picture(false);
        setBox7Picture(false);
        setBox13Picture(false);
        setBox14Picture(false);
        setBox15Picture(false);
        setBox20Picture(false);
        setBox26Picture(false);
        setBox28Picture(false);
        setBox31Picture(false);
        setBox32Picture(false);
        setBox33Picture(false);
        setBox34Picture(false);
        setBox24Picture(false);
        setBox35Picture(false);
        setBox36Picture(false);
        setBox37Picture(false);
        setBox23Picture(false);
        
        document.body.style.overflowY = "scroll";
    }


    function box16ClickHandler() {
        setBox16Picture(true);
        setBackdrop(true);
        document.body.style.overflowY = "hidden";
    }
    function box18ClickHandler() {
        setBox18Picture(true);
        setBackdrop(true);
        document.body.style.overflowY = "hidden";
    }
    function box19ClickHandler() {
        setBox19Picture(true);
        setBackdrop(true);
        document.body.style.overflowY = "hidden";
    }
    function box6ClickHandler() {
        setBox6Picture(true);
        setBackdrop(true);
        document.body.style.overflowY = "hidden";
    }
    function box22ClickHandler() {
        setBox22Picture(true);
        setBackdrop(true);
        document.body.style.overflowY = "hidden";
    }
    function box3ClickHandler() {
        setBox3Picture(true);
        setBackdrop(true);
        document.body.style.overflowY = "hidden";
    }
    function box7ClickHandler() {
        setBox7Picture(true);
        setBackdrop(true);
        document.body.style.overflowY = "hidden";
    }
    function box13ClickHandler() {
        setBox13Picture(true);
        setBackdrop(true);
        document.body.style.overflowY = "hidden";
    }
    function box14ClickHandler() {
        setBox14Picture(true);
        setBackdrop(true);
        document.body.style.overflowY = "hidden";
    }
    function box15ClickHandler() {
        setBox15Picture(true);
        setBackdrop(true);
        document.body.style.overflowY = "hidden";
    }
    function box20ClickHandler() {
        setBox20Picture(true);
        setBackdrop(true);
        document.body.style.overflowY = "hidden";
    }
    function box26ClickHandler() {
        setBox26Picture(true);
        setBackdrop(true);
        document.body.style.overflowY = "hidden";
    }
    function box28ClickHandler() {
        setBox28Picture(true);
        setBackdrop(true);
        document.body.style.overflowY = "hidden";
    }
    function box31ClickHandler() {
        setBox31Picture(true);
        setBackdrop(true);
        document.body.style.overflowY = "hidden";
    }
    function box32ClickHandler() {
        setBox32Picture(true);
        setBackdrop(true);
        document.body.style.overflowY = "hidden";
    }
    function box33ClickHandler() {
        setBox33Picture(true);
        setBackdrop(true);
        document.body.style.overflowY = "hidden";
    }
    function box34ClickHandler() {
        setBox34Picture(true);
        setBackdrop(true);
        document.body.style.overflowY = "hidden";
    }
    function box24ClickHandler() {
        setBox24Picture(true);
        setBackdrop(true);
        document.body.style.overflowY = "hidden";
    }
    function box35ClickHandler() {
        setBox35Picture(true);
        setBackdrop(true);
        document.body.style.overflowY = "hidden";
    }
    function box36ClickHandler() {
        setBox36Picture(true);
        setBackdrop(true);
        document.body.style.overflowY = "hidden";
    }
    function box37ClickHandler() {
        setBox37Picture(true);
        setBackdrop(true);
        document.body.style.overflowY = "hidden";
    }
    function box23ClickHandler() {
        setBox23Picture(true);
        setBackdrop(true);
        document.body.style.overflowY = "hidden";
    }

    //PictureSlide:

    let slideIndex = 1;
    showSlides(slideIndex);

    function pictureSwitchHandler(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("pictureViewersPicture");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";  
      }


      

    const box16PictureFull = <div><div className={classes.pictureSwitchLeft}><img src={arrowLeftWhite} alt="" onClick={pictureSwitchHandler(-1)}></img></div><div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select16} alt="" className={classes.pictureViewersPicture}></img></div><div className={classes.pictureSwitchRight}><img src={arrowRightWhite} alt="" onClick={pictureSwitchHandler(1)}></img></div></div>;
    const box18PictureFull = <div><div className={classes.pictureSwitchLeft}><img src={arrowLeftWhite} alt="" onClick={pictureSwitchHandler(-1)}></img></div><div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select18} alt="" className={`${classes.pictureViewersPicture__Speshul18} ${classes.pictureViewersPicture}`}></img></div><div className={classes.pictureSwitchRight}><img src={arrowRightWhite} alt="" onClick={pictureSwitchHandler(1)}></img></div></div>;
    const box19PictureFull = <div><div className={classes.pictureSwitchLeft}><img src={arrowLeftWhite} alt="" onClick={pictureSwitchHandler(-1)}></img></div><div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select19} alt="" className={classes.pictureViewersPicture}></img></div><div className={classes.pictureSwitchRight}><img src={arrowRightWhite} alt="" onClick={pictureSwitchHandler(1)}></img></div></div>;
    const box6PictureFull = <div><div className={classes.pictureSwitchLeft}><img src={arrowLeftWhite} alt="" onClick={pictureSwitchHandler(-1)}></img></div><div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select6} alt="" className={classes.pictureViewersPicture}></img></div><div className={classes.pictureSwitchRight}><img src={arrowRightWhite} alt="" onClick={pictureSwitchHandler(1)}></img></div></div>;
    const box22PictureFull = <div><div className={classes.pictureSwitchLeft}><img src={arrowLeftWhite} alt="" onClick={pictureSwitchHandler(-1)}></img></div><div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select22} alt="" className={classes.pictureViewersPicture}></img></div><div className={classes.pictureSwitchRight}><img src={arrowRightWhite} alt="" onClick={pictureSwitchHandler(1)}></img></div></div>;
    const box3PictureFull = <div><div className={classes.pictureSwitchLeft}><img src={arrowLeftWhite} alt="" onClick={pictureSwitchHandler(-1)}></img></div><div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select3} alt="" className={classes.pictureViewersPicture}></img></div><div className={classes.pictureSwitchRight}><img src={arrowRightWhite} alt="" onClick={pictureSwitchHandler(1)}></img></div></div>;
    const box7PictureFull = <div><div className={classes.pictureSwitchLeft}><img src={arrowLeftWhite} alt="" onClick={pictureSwitchHandler(-1)}></img></div><div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select7} alt="" className={classes.pictureViewersPicture}></img></div><div className={classes.pictureSwitchRight}><img src={arrowRightWhite} alt="" onClick={pictureSwitchHandler(1)}></img></div></div>;
    const box13PictureFull = <div><div className={classes.pictureSwitchLeft}><img src={arrowLeftWhite} alt="" onClick={pictureSwitchHandler(-1)}></img></div><div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select13} alt="" className={classes.pictureViewersPicture}></img></div><div className={classes.pictureSwitchRight}><img src={arrowRightWhite} alt="" onClick={pictureSwitchHandler(1)}></img></div></div>;
    const box14PictureFull = <div><div className={classes.pictureSwitchLeft}><img src={arrowLeftWhite} alt="" onClick={pictureSwitchHandler(-1)}></img></div><div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select14} alt="" className={classes.pictureViewersPicture}></img></div><div className={classes.pictureSwitchRight}><img src={arrowRightWhite} alt="" onClick={pictureSwitchHandler(1)}></img></div></div>;
    const box15PictureFull = <div><div className={classes.pictureSwitchLeft}><img src={arrowLeftWhite} alt="" onClick={pictureSwitchHandler(-1)}></img></div><div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select15} alt="" className={classes.pictureViewersPicture}></img></div><div className={classes.pictureSwitchRight}><img src={arrowRightWhite} alt="" onClick={pictureSwitchHandler(1)}></img></div></div>;
    const box20PictureFull = <div><div className={classes.pictureSwitchLeft}><img src={arrowLeftWhite} alt="" onClick={pictureSwitchHandler(-1)}></img></div><div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select20} alt="" className={classes.pictureViewersPicture}></img></div><div className={classes.pictureSwitchRight}><img src={arrowRightWhite} alt="" onClick={pictureSwitchHandler(1)}></img></div></div>;
    const box26PictureFull = <div><div className={classes.pictureSwitchLeft}><img src={arrowLeftWhite} alt="" onClick={pictureSwitchHandler(-1)}></img></div><div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select26} alt="" className={classes.pictureViewersPicture}></img></div><div className={classes.pictureSwitchRight}><img src={arrowRightWhite} alt="" onClick={pictureSwitchHandler(1)}></img></div></div>;
    const box28PictureFull = <div><div className={classes.pictureSwitchLeft}><img src={arrowLeftWhite} alt="" onClick={pictureSwitchHandler(-1)}></img></div><div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select28} alt="" className={classes.pictureViewersPicture}></img></div><div className={classes.pictureSwitchRight}><img src={arrowRightWhite} alt="" onClick={pictureSwitchHandler(1)}></img></div></div>;
    const box31PictureFull = <div><div className={classes.pictureSwitchLeft}><img src={arrowLeftWhite} alt="" onClick={pictureSwitchHandler(-1)}></img></div><div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select31} alt="" className={classes.pictureViewersPicture}></img></div><div className={classes.pictureSwitchRight}><img src={arrowRightWhite} alt="" onClick={pictureSwitchHandler(1)}></img></div></div>;
    const box32PictureFull = <div><div className={classes.pictureSwitchLeft}><img src={arrowLeftWhite} alt="" onClick={pictureSwitchHandler(-1)}></img></div><div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select32} alt="" className={classes.pictureViewersPicture}></img></div><div className={classes.pictureSwitchRight}><img src={arrowRightWhite} alt="" onClick={pictureSwitchHandler(1)}></img></div></div>;
    const box33PictureFull = <div><div className={classes.pictureSwitchLeft}><img src={arrowLeftWhite} alt="" onClick={pictureSwitchHandler(-1)}></img></div><div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select33} alt="" className={classes.pictureViewersPicture}></img></div><div className={classes.pictureSwitchRight}><img src={arrowRightWhite} alt="" onClick={pictureSwitchHandler(1)}></img></div></div>;
    const box34PictureFull = <div><div className={classes.pictureSwitchLeft}><img src={arrowLeftWhite} alt="" onClick={pictureSwitchHandler(-1)}></img></div><div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select34} alt="" className={classes.pictureViewersPicture}></img></div><div className={classes.pictureSwitchRight}><img src={arrowRightWhite} alt="" onClick={pictureSwitchHandler(1)}></img></div></div>;
    const box24PictureFull = <div><div className={classes.pictureSwitchLeft}><img src={arrowLeftWhite} alt="" onClick={pictureSwitchHandler(-1)}></img></div><div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select24} alt="" className={classes.pictureViewersPicture}></img></div><div className={classes.pictureSwitchRight}><img src={arrowRightWhite} alt="" onClick={pictureSwitchHandler(1)}></img></div></div>;
    const box35PictureFull = <div><div className={classes.pictureSwitchLeft}><img src={arrowLeftWhite} alt="" onClick={pictureSwitchHandler(-1)}></img></div><div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select35} alt="" className={classes.pictureViewersPicture}></img></div><div className={classes.pictureSwitchRight}><img src={arrowRightWhite} alt="" onClick={pictureSwitchHandler(1)}></img></div></div>;
    const box36PictureFull = <div><div className={classes.pictureSwitchLeft}><img src={arrowLeftWhite} alt="" onClick={pictureSwitchHandler(-1)}></img></div><div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select36} alt="" className={classes.pictureViewersPicture}></img></div><div className={classes.pictureSwitchRight}><img src={arrowRightWhite} alt="" onClick={pictureSwitchHandler(1)}></img></div></div>;
    const box37PictureFull = <div><div className={classes.pictureSwitchLeft}><img src={arrowLeftWhite} alt="" onClick={pictureSwitchHandler(-1)}></img></div><div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select37} alt="" className={classes.pictureViewersPicture}></img></div><div className={classes.pictureSwitchRight}><img src={arrowRightWhite} alt="" onClick={pictureSwitchHandler(1)}></img></div></div>;
    const box23PictureFull = <div><div className={classes.pictureSwitchLeft}><img src={arrowLeftWhite} alt="" onClick={pictureSwitchHandler(-1)}></img></div><div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select23} alt="" className={classes.pictureViewersPicture}></img></div><div className={classes.pictureSwitchRight}><img src={arrowRightWhite} alt="" onClick={pictureSwitchHandler(1)}></img></div></div>;
    
    
    /* const box18PictureFull = <div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select18} alt="" className={classes.pictureViewersPicture__Speshul18}></img></div>;
    const box19PictureFull = <div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select19} alt="" className={classes.pictureViewersPicture}></img></div>;
    const box6PictureFull = <div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select6} alt="" className={classes.pictureViewersPicture}></img></div>;
    const box22PictureFull = <div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select22} alt="" className={classes.pictureViewersPicture}></img></div>;
    const box3PictureFull = <div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select3} alt="" className={classes.pictureViewersPicture}></img></div>;
    const box7PictureFull = <div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select7} alt="" className={classes.pictureViewersPicture}></img></div>;
    const box13PictureFull = <div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select13} alt="" className={classes.pictureViewersPicture}></img></div>;
    const box14PictureFull = <div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select14} alt="" className={classes.pictureViewersPicture}></img></div>;
    const box15PictureFull = <div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select15} alt="" className={classes.pictureViewersPicture}></img></div>;
    const box20PictureFull = <div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select20} alt="" className={classes.pictureViewersPicture}></img></div>;
    const box26PictureFull = <div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select26} alt="" className={classes.pictureViewersPicture}></img></div>;
    const box28PictureFull = <div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select28} alt="" className={classes.pictureViewersPicture}></img></div>;
    const box31PictureFull = <div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select31} alt="" className={classes.pictureViewersPicture}></img></div>;
    const box32PictureFull = <div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select32} alt="" className={classes.pictureViewersPicture}></img></div>;
    const box33PictureFull = <div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select33} alt="" className={classes.pictureViewersPicture}></img></div>;
    const box34PictureFull = <div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select34} alt="" className={classes.pictureViewersPicture}></img></div>;
    const box24PictureFull = <div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select24} alt="" className={classes.pictureViewersPicture}></img></div>;
    const box35PictureFull = <div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select35} alt="" className={classes.pictureViewersPicture}></img></div>;
    const box36PictureFull = <div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select36} alt="" className={classes.pictureViewersPicture}></img></div>;
    const box37PictureFull = <div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select37} alt="" className={classes.pictureViewersPicture}></img></div>;
    const box23PictureFull = <div className={classes.picture30Select__wrapper} onClick={wrapperCloseHandler}><img src={picture30Select23} alt="" className={classes.pictureViewersPicture}></img></div>; */
    
    return (
        <>
            <div></div>

            {box16Picture ? box16PictureFull : ""}
            {box18Picture ? box18PictureFull : ""}
            {box19Picture ? box19PictureFull : ""}
            {box6Picture ? box6PictureFull : ""}
            {box22Picture ? box22PictureFull : ""}
            {box3Picture ? box3PictureFull : ""}
            {box7Picture ? box7PictureFull : ""}
            {box13Picture ? box13PictureFull : ""}
            {box14Picture ? box14PictureFull : ""}
            {box15Picture ? box15PictureFull : ""}
            {box20Picture ? box20PictureFull : ""}
            {box26Picture ? box26PictureFull : ""}
            {box28Picture ? box28PictureFull : ""}
            {box31Picture ? box31PictureFull : ""}
            {box32Picture ? box32PictureFull : ""}
            {box33Picture ? box33PictureFull : ""}
            {box34Picture ? box34PictureFull : ""}
            {box24Picture ? box24PictureFull : ""}
            {box35Picture ? box35PictureFull : ""}
            {box36Picture ? box36PictureFull : ""}
            {box37Picture ? box37PictureFull : ""}
            {box23Picture ? box23PictureFull : ""}

            {backdrop ? <Backdrop PrbackdropHandler={backdropHandler} /> : ""}

            <div>

            </div>

            <div className={classes.PGallerySelection_main}>

                <div className={classes.PGallerySelection__Box16}>
                    <img src={pictureSelect16} alt="" onClick={box16ClickHandler}></img>
                </div>
                <div className={classes.PGallerySelection__Box18}>
                    <img src={pictureSelect18} alt="" onClick={box18ClickHandler}></img>
                </div>
                <div className={classes.PGallerySelection__Box19}>
                    <img src={pictureSelect19} alt="" onClick={box19ClickHandler}></img>
                </div>
                <div className={classes.PGallerySelection__Box6}>
                    <img src={pictureSelect6} alt="" onClick={box6ClickHandler}></img>
                </div>
                <div className={classes.PGallerySelection__Box22}>
                    <img src={pictureSelect22} alt="" onClick={box22ClickHandler}></img>
                </div>
                {/* <div className={classes.PGallerySelection__Box1}>
                    <img src={pictureSelect1} alt=""></img>
                </div> */}
                {/* <div className={classes.PGallerySelection__Box2}>
                    <img src={pictureSelect2} alt=""></img>
                </div> */}
                <div className={classes.PGallerySelection__Box3}>
                    <img src={pictureSelect3} alt="" onClick={box3ClickHandler}></img>
                </div>
                {/* <div className={classes.PGallerySelection__Box4}>
                    <img src={pictureSelect4} alt=""></img>
                </div> */}
                {/* <div className={classes.PGallerySelection__Box5}>
                    <img src={pictureSelect5} alt=""></img>
                </div> */}

                <div className={classes.PGallerySelection__Box7}>
                    <img src={pictureSelect7} alt="" onClick={box7ClickHandler}></img>
                </div>
                {/* <div className={classes.PGallerySelection__Box8}>
                    <img src={pictureSelect8} alt=""></img>
                </div>
                <div className={classes.PGallerySelection__Box9}>
                    <img src={pictureSelect9} alt=""></img>
                </div> */}
                {/* <div className={classes.PGallerySelection__Box10}>
                    <img src={pictureSelect10} alt=""></img>
                </div> */}
                {/* <div className={classes.PGallerySelection__Box11}>
                    <img src={pictureSelect11} alt=""></img>
                </div> */}
                {/* <div className={classes.PGallerySelection__Box12}>
                    <img src={pictureSelect12} alt=""></img>
                </div> */}
                <div className={classes.PGallerySelection__Box13}>
                    <img src={pictureSelect13} alt="" onClick={box13ClickHandler}></img>
                </div>
                <div className={classes.PGallerySelection__Box14}>
                    <img src={pictureSelect14} alt="" onClick={box14ClickHandler}></img>
                </div>
                <div className={classes.PGallerySelection__Box15}>
                    <img src={pictureSelect15} alt="" onClick={box15ClickHandler}></img>
                </div>

                {/* <div className={classes.PGallerySelection__Box17}>
                    <img src={pictureSelect17} alt=""></img>
                </div> */}

                <div className={classes.PGallerySelection__Box20}>
                    <img src={pictureSelect20} alt="" onClick={box20ClickHandler}></img>
                </div>
                {/* <div className={classes.PGallerySelection__Box21}>
                    <img src={pictureSelect21} alt=""></img>
                </div> */}



                {/* <div className={classes.PGallerySelection__Box25}>
                    <img src={pictureSelect25} alt=""></img>
                </div> */}
                <div className={classes.PGallerySelection__Box26}>
                    <img src={pictureSelect26} alt="" onClick={box26ClickHandler}></img>
                </div>
                {/* <div className={classes.PGallerySelection__Box27}>
                    <img src={pictureSelect27} alt=""></img>
                </div> */}
                <div className={classes.PGallerySelection__Box28}>
                    <img src={pictureSelect28} alt="" onClick={box28ClickHandler}></img>
                </div>
                {/* <div className={classes.PGallerySelection__Box29}>
                    <img src={pictureSelect29} alt=""></img>
                </div>
                <div className={classes.PGallerySelection__Box30}>
                    <img src={pictureSelect30} alt=""></img>
                </div> */}
                <div className={classes.PGallerySelection__Box31}>
                    <img src={pictureSelect31} alt="" onClick={box31ClickHandler}></img>
                </div>
                <div className={classes.PGallerySelection__Box32}>
                    <img src={pictureSelect32} alt="" onClick={box32ClickHandler}></img>
                </div>
                <div className={classes.PGallerySelection__Box33}>
                    <img src={pictureSelect33} alt="" onClick={box33ClickHandler}></img>
                </div>

                <div className={classes.PGallerySelection__Box34}>
                    <img src={pictureSelect34} alt="" onClick={box34ClickHandler}></img>
                </div>
                <div className={classes.PGallerySelection__Box24}>
                    <img src={pictureSelect24} alt="" onClick={box24ClickHandler}></img>
                </div>
                <div className={classes.PGallerySelection__Box35}>
                    <img src={pictureSelect35} alt="" onClick={box35ClickHandler}></img>
                </div>
                <div className={classes.PGallerySelection__Box36}>
                    <img src={pictureSelect36} alt="" onClick={box36ClickHandler}></img>
                </div>
                <div className={classes.PGallerySelection__Box37}>
                    <img src={pictureSelect37} alt="" onClick={box37ClickHandler}></img>
                </div>

                <div className={classes.PGallerySelection__Box23}>
                    <img src={pictureSelect23} alt="" onClick={box23ClickHandler}></img>
                </div>
            </div>
        </>
    )
}

export default PGallerySelection;