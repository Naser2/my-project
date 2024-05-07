"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// import { images } from "./constants";
import Description from "./Description";

const Slider = ({images}) => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    console.log("SLIDER-ACTIVE-IMAGE:", activeImage)
    const timer = setTimeout(() => {
      clickNext();
    }, 55000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);
  return (
    <div className="grid place-items-center grid-cols-1 w-full max-w-full md:grid-cols-3 !space-x-0 lg:grids-cols-3 shadow-2xl rounded-2xl">
      <div
        className={`w-full h-[70vh]  md:col-span-2  sm:h-[98vh] sm:col flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 md:p-0`}
      >
        {images.map((elem, idx) => (
          <div
            key={idx}
            className={`${
              idx === activeImage
                ? "block w-full h-full !aspect-[33/27] object-cover transition-all duration-500 ease-in-out"
                : "hidden"
            }`}
          >
            <Image
              src={elem.src}
              alt=""
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <Description
        activeImage={activeImage}
        clickNext={clickNext}
        clickPrev={clickPrev}
        imageTheme={images[activeImage].imageTheme} // Pass the background property
       />
    </div>
  );
};

// md:rounded-tl-3xl md:rounded-bl-3xl
export default Slider;