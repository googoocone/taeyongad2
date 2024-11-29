import styles from "./section2.module.css";
import circleCheck from "../assets/circleCheck.png";

export default function Section2() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.point}></div>
        <div className={styles.title}>
          개인회생ㆍ파산 <span className={styles.span}>왜?</span> 해야하나요?
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.box}>
          <img src={circleCheck.src}></img>
          원금의 최대 <span className={styles.span2}> 90% </span> 까지 탕감이
          가능합니다.
        </div>
        <div className={styles.box}>
          {" "}
          <img src={circleCheck.src}></img>
          <span className={styles.span2}>모든 이자가</span> 사라집니다(대출,
          카드, 사채 등).
        </div>
        <div className={styles.box}>
          {" "}
          <img src={circleCheck.src}></img>
          추심, 독촉이 법으로 <span className={styles.span2}>금지</span>됩니다.
        </div>
        <div className={styles.box}>
          {" "}
          <img src={circleCheck.src}></img>
          <span className={styles.span2}>전화로 접수</span>하고 개인회생 진행
          가능.
        </div>
        <div className={styles.box}>
          {" "}
          <img src={circleCheck.src}></img>
          가족 모르게 <span className={styles.span2}>비밀리에</span> 진행할 수
          있습니다.
        </div>
      </div>
    </div>
  );
}
