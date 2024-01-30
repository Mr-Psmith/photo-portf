import React, { useState } from 'react';
import "./image-slider.css";
import arrowRightWhite from "../img/arrow-vector-white-right1400px.png";
import arrowLeftWhite from "../img/arrow-vector-white-left1400px.png";
import { motion } from "framer-motion";

import picture30Select7 from "../img/picsResized30/IMGP0749-1.jpg";
// import picture30Select3 from "../img/picsResized30/IMGP2106-1.jpg";
// import picture30Select13 from "../img/picsResized30/IMGP1651-WP.jpg";
// import picture30Select14 from "../img/picsResized30/IMGP1781-1.jpg";
// import picture30Select15 from "../img/picsResized30/IMGP1880-1-4.jpg";
import picture30Select16 from "../img/picsResized30/IMGP2030-1-3.jpg";
// import picture30Select18 from "../img/picsResized30/IMGP2346-1.jpg";
import picture30Select19 from "../img/picsResized30/IMGP2413-1-2.jpg";
import picture30Select20 from "../img/picsResized30/IMGP2447-1.jpg";
// import picture30Select22 from "../img/picsResized30/IMGP2694-1.jpg";
import picture30Select23 from "../img/picsResized30/IMGP2986-1-2.jpg";
// import picture30Select24 from "../img/picsResized30/IMGP3055-1-3.jpg";
// import picture30Select26 from "../img/picsResized30/IMGP3144-1.jpg";
import picture30Select6 from "../img/picsResized30/IMGP0734.jpg";
import picture30Select28 from "../img/picsResized30/IMGP3248-1.jpg";
// import picture30Select31 from "../img/picsResized30/IMGP3608-1.jpg";
// import picture30Select32 from "../img/picsResized30/IMGP3835-1-3.jpg";
// import picture30Select33 from "../img/picsResized30/IMGP6593.jpg";
// import picture30Select34 from "../img/picsResized30/IMGP6894.jpg";
// import picture30Select35 from "../img/picsResized30/IMGP6901.jpg";
// import picture30Select36 from "../img/picsResized30/IMGP7352.jpg";
// import picture30Select37 from "../img/picsResized30/IMGP7655.jpg";

const sliderData = [
  {
    image: picture30Select7
  },
  /* {
    image: picture30Select3
  },
  {
    image: picture30Select13
  }, */
  /* {
    image: picture30Select14
  },
  {
    image: picture30Select15
  }, */
  {
    image: picture30Select16
  },
  // {
  //   image: picture30Select18
  // },
  {
    image: picture30Select19
  },
  {
    image: picture30Select20
  },
  /* {
    image: picture30Select22
  }, */
  {
    image: picture30Select23
  },
  /* {
    image: picture30Select24
  },
  {
    image: picture30Select26
  }, */
  {
    image: picture30Select6
  },
  {
    image: picture30Select28
  },
  /* {
    image: picture30Select31
  },
  {
    image: picture30Select32
  },
  {
    image: picture30Select33
  },
  {
    image: picture30Select34
  },
  {
    image: picture30Select35
  },
  {
    image: picture30Select36
  },
  {
    image: picture30Select37
  }, */
]

const ImageSliderAzores = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (slides === "1") {
    setCurrent(current + 1);
  }

  return (
    <>
      <section className="slider">
        <img src={arrowLeftWhite} alt="" className="left-arrow" onClick={prevSlide} />
        <img src={arrowRightWhite} alt="" className="right-arrow" onClick={nextSlide} />
        {sliderData.map((slide, index) => {
          return (
            <motion.div initial={{ y: "-110vh" }} animate={{ y:0 }} transition={{ duration: 0.5, type: "spring", bounce: 0 }} exit={{ x: "-90%" }}>
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="" className="image" />
              )}
              </div>
            </motion.div>
          );
        })}
      </section>
    </>
  );
};

export default ImageSliderAzores;