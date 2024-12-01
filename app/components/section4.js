import styles from "./section4.module.css";

import price from "../assets/price.svg";
import Link from "next/link";
export default function Section4() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.point}></div>
        <div className={styles.title}>
          <span className={styles.span}>합리적인</span> 변호사 수임료
        </div>
        <div className={styles.description}>
          변호사 수임료 비쌀 이유가 없습니다.
        </div>
      </div>
      <div className={styles.bottom}>
        <img src={price.src}></img>
      </div>
      <div className={styles.footer}>
        <button className={styles.button}>
          {" "}
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf3lG2n0bb2k6DmK4sXD3NARJ-eufGeOeppfiGw7OoRg7khIQ/viewform">
            상담신청
          </Link>
        </button>
        <button className={styles.button}>
          <Link href="tel:070-4138-0508">전화상담</Link>
        </button>
      </div>
    </div>
  );
}
