import styles from "./section3.module.css";

import consult from "../assets/consult.png";
import manage from "../assets/manage.png";

import consultText from "../assets/consultText.svg";
import manageText from "../assets/manageText.svg";
import Link from "next/link";

export default function Section3() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.point}></div>
        <div className={styles.title}>
          개인회생ㆍ파산 <span className={styles.span}>누구한테?</span>{" "}
          맡길까요?
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.leftContainer}>
          <div className={styles.imgContainer}>
            <img src={consult.src}></img>
          </div>
          <div className={styles.textContainer}>
            <img src={consultText.src} className={styles.consultText}></img>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.rightTextContainer}>
            <div className={styles.textContainer}>
              <img src={manageText.src} className={styles.manageText}></img>
            </div>
            <button className={styles.button}>상담신청</button>
          </div>
          <div className={styles.imgContainer}>
            <img src={manage.src}></img>
          </div>
        </div>
        <div className={styles.mobileRightContainer}>
          <div className={styles.imgContainer}>
            <img src={manage.src}></img>
          </div>
          <div className={styles.rightTextContainer}>
            <div className={styles.textContainer}>
              <img src={manageText.src} className={styles.manageText}></img>
            </div>
            <button className={styles.button}>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf3lG2n0bb2k6DmK4sXD3NARJ-eufGeOeppfiGw7OoRg7khIQ/viewform">
                상담신청
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
