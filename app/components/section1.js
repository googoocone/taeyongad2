import apartLogo from "../assets/apartLogo.png";
import styles from "./section1.module.css";
import kakao from "../assets/kakao.svg";
import tel from "../assets/tel.svg";
import check from "../assets/check.svg";
import lawyer from "../assets/lawyer.svg";
import Link from "next/link";

export default function Section1() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.imgContainer}>
          <img src={apartLogo.src} className={styles.logo}></img>
        </div>
        <div className={styles.description}>
          <h3>전문 변호사와 직접 확인하는</h3>
        </div>
        <div className={styles.title}>
          <h1 className={styles.titleTop}>개인회생ㆍ개인파산</h1>
          <h1>무료상담</h1>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.chatButton}>
            <img src={kakao.src} className={styles.kakaoImg}></img>
            <Link href="http://pf.kakao.com/_gxiDhn/chat">채팅상담</Link>
          </button>
          <button className={styles.telButton}>
            <img src={tel.src} className={styles.telImg}></img>
            <Link href="tel:070-4138-0508">전화상담</Link>
          </button>
        </div>
        <div className={styles.tagContainer}>
          <div className={styles.tag1}>
            <img src={check.src}></img>김태용 전문 변호사 상담
          </div>
          <div className={styles.tag2}>
            <img src={check.src}></img>합리적인 수임료
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <img src={lawyer.src} className={styles.lawyerImg}></img>
      </div>
    </div>
  );
}
