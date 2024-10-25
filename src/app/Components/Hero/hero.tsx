"use client";
import Image from "next/image";
import styles from "./hero.module.css";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  weight: ["400", "600", "900"],
  subsets: ["latin"],
});

const hero = () => {
  return (
    <>
      <div
        className={`${styles.main} pt-28 h-full flex justify-evenly items-center `}
      >
        {/* background - img */}
        <div className={`${styles.img}`}>
          <Image
            src="/images/Ellipse 1.png"
            alt="Scooter"
            width={250}
            height={250}
          />
        </div>

        {/* TEXT */}
        <div className={`${styles.text_content} `}>
          <h1
            className={`${urbanist.className} text-6xl  text-[#364547] leading-tight `}
          >
            <span className="font-extrabold text-[#EF8D21]">R</span>ent
            <span className="font-extrabold text-[#EF8D21]"> O</span>ur
            <span className="font-extrabold text-[#EF8D21]"> S</span>cooter
          </h1>
          <h2
            className={`${urbanist.className} text-5xl text-[#364547] font-normal`}
          >
            Fair ride prices
          </h2>
          <p
            className={`${urbanist.className} text-sm leading-relaxed tracking-widest  first-letter:text-4xl`}
          >
            Lorem Ipsum has been the industry's standard dummy text ever
            <br /> since the 1500s, when an unknown printer took a galley of
            type
            <br /> and scrambled it to make a type specimen book.{" "}
          </p>
        </div>

        {/* main-image */}

        <div className={`${styles.imageBox}`}>
          <div className={`${styles.img2}`}> </div>
          <div className={styles.img3}> </div>
          <div className={`${styles.img4}`}> </div>
        </div>
      </div>
    </>
  );
};

export default hero;

// #FFFCF9
