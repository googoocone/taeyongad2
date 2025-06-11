"use client"; // onClick 이벤트를 사용하기 위해 클라이언트 컴포넌트로 전환

import styles from "./section3.module.css";

import consult from "../assets/consult.png";
import manage from "../assets/manage.png";

import consultText from "../assets/consultText.svg";
import manageText from "../assets/manageText.svg";
import Link from "next/link";

export default function Section3() {
  // '남색상담신청버튼' 클릭 시 실행될 이벤트 핸들러 함수
  const handleConsultationClick = () => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-16722031338/A4LlCKqQ2dYaEOrl16U-",
      });
      console.log("남색상담신청버튼 클릭: 전환 이벤트 전송 완료");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.point}></div>
        <div className={styles.title}>
          <span className={styles.span}>김태용 변호사와</span> <br />
          직접 상담할 수 있습니다.
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
            {/* 데스크톱용 버튼에 onClick 이벤트 연결 */}
            <button className={styles.button} onClick={handleConsultationClick}>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf3lG2n0bb2k6DmK4sXD3NARJ-eufGeOeppfiGw7OoRg7khIQ/viewform">
                상담신청
              </Link>
            </button>
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
            {/* 모바일용 버튼에 동일한 onClick 이벤트 연결 */}
            <button className={styles.button} onClick={handleConsultationClick}>
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
