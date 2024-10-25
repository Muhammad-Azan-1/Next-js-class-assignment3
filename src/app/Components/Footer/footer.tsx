"use client";
import Image from "next/image";
import Link from "next/link";
import style from "./footer.module.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Manually import the CSS
config.autoAddCss = false;
import { faPhone, faMailForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"; // Brand icons

import { Nunito } from "next/font/google";
const nunito = Nunito({
  weight: ["500", "600", "800"],
  subsets: ["latin"],
});

const footer = () => {
  return (
    <>
      <div className="w-[100%]">
        <div
          className={` ${nunito.className} ${style.div} w-[100%] bg-[#EF8D21] h-[60vh] flex justify-evenly flex-wrap gap-4 pt-12`}
        >
          <ul className={` leading-7`}>
            <li className="mb-1">
              <Image
                src="/Images/logo.png"
                alt="Logo"
                width={100}
                height={100}
              />
            </li>
            <li className="mb-5 mt-2">Moving Pakistan Forward</li>
            <li>
              <Link href="tel:+923101285239">
                <FontAwesomeIcon icon={faPhone} className="text-black" />{" "}
                0310-1285239
              </Link>
            </li>
            <li>
              {" "}
              <Link href="https://www.linkedin.com/in/muhammad-azan-/">
                <FontAwesomeIcon icon={faMailForward} /> info@Scooter.com
              </Link>
            </li>
          </ul>

          <ul className="pt-4">
            <li className={style.topList}>About</li>
            <li>Company</li>
            <li>Team</li>
            <li> Mission, Vision & Values</li>
            <li> Social Impact</li>
            <li>Press & Media</li>
            <li>Careers</li>
            <li>Franchise</li>
            <li>Security</li>
          </ul>

          <ul className={` ${style.ul3} pt-4`}>
            <li className={style.topList}>Products</li>
            <li>Ride</li>
            <li>Insurance</li>
            <li>Shops</li>
            <li>Delivery</li>
            <li>RevUp Scooter For Bussiness</li>
          </ul>

          <ul className={` ${style.ul4} pt-4`}>
            <li className={style.topList}>RevUp Scooter Partner</li>
            <li>About Partner</li>
            <li>Help Center</li>
            <li>FAQs</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="border-solid border-[2px] border-[#222d2e] "></div>

        <div
          className={` ${nunito.className} flex justify-between h-[10vh] bg-[#EF8D21] items-center`}
        >
          <div className={` ${style.p} ml-3`}>
            <p className={` ${style.ptag} font-normal text-[#222d2e]`}>
              All Rights Reserved RevUp Scooter Pakistan
            </p>
          </div>

          <div
            className={` ${style.links} ml-[-2rem] w-[30%] flex justify-evenly font-normal text-[#222d2e]`}
          >
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Accessibility</Link>
            <Link href="#">Safety</Link>
            <Link href="#">Terms</Link>
          </div>

          <div
            className={`${style.a} w-[15%] flex justify-evenly text-[#222d2e] `}
          >
            <Link className="text-[#1877F2]" href="">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link className="text-[#DD2A7B]" href="">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link className="text-[#0077B5]" href="">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link className="text-[#1DA1F2]" href="">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
