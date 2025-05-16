"use client";

import styles from "./section5.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import data1 from "../assets/data1.png";
import data2 from "../assets/data2.png";
import data3 from "../assets/data3.png";
import data4 from "../assets/data4.png";
import arrow from "../assets/arrow.png";
import Link from "next/link";

export default function Section5() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.point}></div>
        <div className={styles.title}>
          좀 더 <span className={styles.span}>궁금한</span> 내용은?
        </div>
        <div className={styles.description}>
          성공사례, 개인회생, 개인파산, 유튜브
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.topButtonContainer}>
          <button className={styles.button}>#코인, 도박</button>
          <button className={styles.button}>#주식</button>
          <button className={styles.button}>#사기피해</button>
        </div>
        <div className={styles.bottomButtonContainer}>
          <button className={styles.button}>#사업실패</button>
          <button className={styles.button}>#사치</button>
          <button className={styles.button}>#생활비</button>
        </div>
        <div className={styles.dataContainer}>
          <div className={styles.data1}>
            <Link href="https://blog.naver.com/PostList.naver?blogId=taeyong-lawyer&from=postList&categoryNo=7">
              <div>
                <img src={data1.src}></img>
              </div>
              <div className={styles.dataDescription}>정말 자세하고 꼼꼼한</div>
              <div className={styles.dataTitle}>성공사례</div>
              <div className={styles.dataTag}>바로가기</div>
            </Link>
          </div>
          <div className={styles.data2}>
            <Link href="https://blog.naver.com/PostList.naver?blogId=taeyong-lawyer&from=postList&categoryNo=1">
              <div>
                <img src={data2.src}></img>
              </div>
              <div className={styles.dataDescription}>
                풍부한 노하우와 전문성
              </div>
              <div className={styles.dataTitle}>개인회생</div>
              <div className={styles.dataTag}>바로가기</div>
            </Link>
          </div>
          <div className={styles.data3}>
            <Link href="https://blog.naver.com/PostList.naver?blogId=taeyong-lawyer&from=postList&categoryNo=1">
              <div>
                <img src={data3.src}></img>
              </div>
              <div className={styles.dataDescription}>확실한 파산면책결정</div>
              <div className={styles.dataTitle}>개인파산</div>
              <div className={styles.dataTag}>바로가기</div>
            </Link>
          </div>
          <div className={styles.data4}>
            <Link href="https://www.youtube.com/@%EA%B0%9C%EC%9D%B8%ED%9A%8C%EC%83%9D%EB%A9%94%EC%9D%B4%ED%8A%B8">
              <div>
                <img src={data4.src}></img>
              </div>
              <div className={styles.dataDescription}>
                누구보다 자신있는 전문성
              </div>
              <div className={styles.dataTitle}>유튜브</div>
              <div className={styles.dataTag}>바로가기</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
