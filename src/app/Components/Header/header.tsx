"use client";
import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import { useState } from "react";
// lib/fontawesome.ts
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Manually import the CSS
config.autoAddCss = false; // Disable auto-adding CSS
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

// TO import different fonts
import { Nunito } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const nuniton = Nunito({
  weight: ["500"],
  subsets: ["latin"],
});

const Header = () => {
  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu((prevsVal) => !prevsVal);
  }

  return (
    <>
      <div
        className={`${nuniton.className} ${styles.main}  h-20 bg-[#FFFCF9] shadow-xl size-full flex justify-evenly items-center fixed flex-wrap`}
      >
        {/* img */}
        <div className={`${styles.img}`}>
          <Image src="/Images/Logo.png" alt="Logo" width={60} height={60} />
        </div>

        {/*-----------------------------------------------------------------------------------------------------------------------------------------------*/}

        {/* This section will appear for small screen from 900px to 300px but anchor div will appear for both large and small screens in different styling */}

        {/* Brand Name */}

        <div className={`${styles.scooter}`}>
          <h1 className="text-6xl font-bold tracking-wide text-[#364547]">
            <span className="font-extrabold text-[#EF8D21]">R</span>ev
            <span className="font-extrabold text-[#EF8D21]">U</span>p
            <span className="font-extrabold text-[#EF8D21]"> S</span>cooters
          </h1>
        </div>

        {/* barIcon*/}

        <div className={`${styles.barsIcon}`}>
          <button onClick={toggleMenu} className="text-[#364547]">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        {/* nav */}
        <div
          className={`
    ${styles.anchorDiv} flex justify-evenly w-2/4 font-semibold
    ${menu ? styles.toggleRight : styles.hideMenu}
   `}
        >
          <div className={`${styles.crossIcon}`}>
            <button onClick={toggleMenu} className="text-[#364547]">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          <Link className={styles.homeA} href="">
            Home
          </Link>
          <Link className={styles.h} href="../Aboutus">
            About us
          </Link>
          <Link className={styles.h} href="">
            Services
          </Link>
          <Link className={styles.h} href="">
            Contact us
          </Link>
          <Link className={`${styles.log} ${styles.h}`} href="#">
            {" "}
            Login
          </Link>
        </div>

        {/* --------------------------------------------------------------------------------------------- */}

        {/* button */}
        <div className={` ${styles.buttonsDiv} flex justify-around w-1/5`}>
          <button
            className={` ${styles.login} font-bold  hover:border-2 border-[#EF8D21] w-24`}
          >
            Login
          </button>
          <button
            className={`${styles.button2} bg-[#EF8D21] text-lg text-[#FFFCF9] rounded-3xl h-10 w-48  p-1`}
          >
            <Link href="">Book Scooter</Link>
          </button>
        </div>

        {/* bottom-border */}
        <div className={`h-3 w-full bg-[#EF8D21]  shadow-xl`}></div>
      </div>
    </>
  );
};

export default Header;

{
  /*
NOTE:

 Ham ne shoro main menu ki value ko false rkha howa hay jiss ki wajah se hide Menu wali styling apply hu rahi hay
 jesy he bars ke icon per click kren gey to menu ki value true hu jaye ge, jiss ki wajah se
  hamari toogleMenu vali styling apply hu ge to menu show hu ga or jesy he corssIcon per click kren gy to
  again menu ki value false hu jaye ge jiss ski wajah se hamari hideMenu vali class again apply hu jaye ge
           or ye sara kam jab hu ga jab ham 300 to 900 ki range main hu ge 
*/
}

// .toggleRight{
//   right: 0;
// }

// .hideMenu{
//    right: -300px;

// -300px ese leye Q ke  ham ne width menu ko 300px de the to osko right -300px de kr initallya andr krdiya jess se wo hide hu gaya hay

// }
