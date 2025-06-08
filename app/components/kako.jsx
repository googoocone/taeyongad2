import styles from "./section4.module.css";
import Image from "next/image";

export default function Kakao() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.point}></div>
        <div className={styles.title}>
          <span className={styles.span}>1:1</span>전담 직원 배정
        </div>
        <div className={styles.description}>
          진행사항, 궁금하신 점 즉시 해결해 드립니다.
        </div>
      </div>
      <div className="w-full h-[1100px] bg-gray-50 mt-10 flex items-center justify-center">
        <Image src="/kakao.svg" width={323} height={996}></Image>
      </div>
    </div>
  );
}
