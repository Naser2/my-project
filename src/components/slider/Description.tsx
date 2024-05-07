import React from "react";
import { images } from "@/data";
import left from "./left.svg";
import right from "./right.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import {classNames} from "@/utils/classNames";
type Props = {
  activeImage: any;
  clickNext: any;
  clickPrev: any;

  imageTheme: object; // Add background prop
};



const Description = ({ activeImage, clickNext, clickPrev, imageTheme }: Props) => {
  // md:rounded-br-3xl md:rounded-tr-3xl
  return (
    <div className={`grid place-items-start md:w-[33.3vw] md:px-[3%] relative h-full gap-x-0  !space-x-0 ${(imageTheme && imageTheme.background) ?? "bg-[#e7dfd9]"}`}>
      <div className="uppercase text-sm absolute right-[2vw]  top-2 underline-offset-4 underline">
        Paradigm
      </div>
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "block w-full h-full md:w-[30.3vw] md:h-[80vh] py-20 md:px-20 px-10 lg:px-[6em] text-left"
              : "hidden"
          }`}
        >
          <motion.div
            initial={{
              opacity: idx === activeImage ? 0 : 0.5,
              scale: idx === activeImage ? 0.5 : 0.3,
            }}
            animate={{
              opacity: idx === activeImage ? 1 : 0.5,
              scale: idx === activeImage ? 1 : 0.3,
            }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
            className="md:max-w-[30em] md:mr-[120px]"
          >
          <div className={classNames((imageTheme && imageTheme.text ) ?? "text-black " , "py-16 text-5xl font-extrabold")}>{elem.title}</div>
            <div className={classNames(imageTheme && imageTheme.text, "leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-gray-600 !overflow-wrap text-ellipsis")}>
              {elem.desc}
            </div>
          </motion.div>

          <button className="themeBtn !py-4 text-white uppercase px-4 py-2  my-10 xl:mt-[4vh]">
           BOOK NOW
          </button>
          <div className="absolute md:bottom-[30vh] bottom-[10vw] right-[31vw]   w-full flex justify-center items-center">
            <div
              className="absolute bottom-2 right-[5vw] cursor-pointer"
              onClick={clickPrev}
            >
              <Image src={left} alt="" className="sm:h-12 sm:w-12"/>
            </div>

            <div
              className="absolute bottom-2   right-2 cursor-pointer"
              onClick={clickNext}
            >
              <Image src={right} alt="" className="sm:h-12 sm:w-12" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;