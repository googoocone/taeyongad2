import styles from "./section6.module.css";

import text from "../assets/text.svg";

export default function Section6() {
  return (
    <div className={styles.container}>
      <img src={text.src} className={styles.img}></img>
    </div>
  );
}
