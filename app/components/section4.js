import styles from "./section4.module.css";

import price from "../assets/price.svg";

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
        <button className={styles.button}>상담 하기</button>
        <button className={styles.button}>전화 상담</button>
      </div>
    </div>
  );
}
