import styles from "./section4.module.css";
import Image from "next/image";

export default function Map() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.point}></div>
        <div className={styles.title}>
          수원회생법원
          <span className={styles.span}>관할 지역</span>
          <br />
          이라면 자신있습니다.
        </div>
        <div className="text-[16px] mt-6 text-center">
          해당 지역에 거주하신다면 꼭 한번은 상담 받아보세요.
        </div>
      </div>
      <div className="w-full h-[295px] relative bg-gray-50 mt-10 flex items-center justify-center">
        <Image src="/map.svg" fill alt="수원회생법원 관할지역"></Image>
      </div>
    </div>
  );
}
