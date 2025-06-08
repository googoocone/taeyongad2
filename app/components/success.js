import React from "react";
// Swiper React 컴포넌트 임포트
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper 모듈 임포트 (필요에 따라 추가 또는 제거)
import { Navigation, Pagination, Autoplay, Scrollbar } from "swiper/modules";
import styles from "./success.module.css";
// Swiper 기본 CSS 임포트
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay"; // Autoplay 사용 시

// 성공사례 데이터
const successData = [
  {
    id: 1,
    title: "전세사기 피해자 개인회생 성공사례",
    desc: "탕감률 84% 변제기간 2년",
    url: "https://blog.naver.com/taeyong-lawyer/223803633547",
    img: "./success1.png", // public 폴더에 이미지가 있다고 가정 (경로 확인 필요)
  },
  {
    id: 2,
    title: "전세사기 피해자 개인회생 성공사례",
    desc: "탕감률 76% 변제기간 2년",
    url: "https://blog.naver.com/taeyong-lawyer/223816008715",
    img: "./success2.png",
  },
  {
    id: 3,
    title: "전세사기 피해자 개인회생 성공사례",
    desc: "탕감률 84% 변제기간 2년",
    url: "https://blog.naver.com/taeyong-lawyer/223842459106",
    img: "./success3.png",
  },
  {
    id: 4,
    title: "차상위계층 개인파산 성공사례",
    desc: "파산관재인 비용 면제",
    url: "https://blog.naver.com/taeyong-lawyer/223844776024",
    img: "./success4.png",
  },
  {
    id: 5,
    title: "팀미션 사기피해 개인회생 성공사례",
    desc: "법원의 변제금 상향 요구 방어 성공",
    url: "https://blog.naver.com/taeyong-lawyer/223851181938",
    img: "./success5.png",
  },
  {
    id: 6,
    title: "생활비 부족 개인회생 성공사례",
    desc: "자녀 모두 부양가족으로 인정, 탕감률 88%",
    url: "https://blog.naver.com/taeyong-lawyer/223782916539",
    img: "./success6.png",
  },
  {
    id: 7,
    title: "사업실패 개인회생 성공사례",
    desc: "탕감률 85%",
    url: "https://blog.naver.com/taeyong-lawyer/223764114107",
    img: "./success7.png",
  },
];

const SuccessSlider = () => {
  return (
    <div className="w-full  sm:h-[1000px] py-10">
      <div className={styles.top}>
        <div className={styles.point}></div>
        <div className={styles.title}>
          오직
          <span className={styles.span}>수원 개인회생</span>
          사건만 처리합니다.
        </div>
        <div className="text-gray-700 text-sm">
          클릭하시면 변호사의 조력 내용을 볼 수 있습니다.
        </div>
      </div>
      <div className="h-12"></div>
      {/* 부모 div에 적절한 패딩이나 마진을 줄 수 있습니다. */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Scrollbar]}
        spaceBetween={30} // 슬라이드 간 간격
        slidesPerView={1} // 한 번에 보여줄 슬라이드 개수 (기본값)
        loop={true} // 무한 루프
        autoplay={{
          delay: 5000, // 자동 재생 딜레이 (3초)
          disableOnInteraction: false, // 사용자 상호작용 후 자동 재생 계속
        }}
        // pagination={{ clickable: true }} // 페이지네이션 버튼 클릭 가능
        navigation // 네비게이션 화살표
        scrollbar={{ draggable: true }} // 스크롤바 (선택 사항)
        breakpoints={{
          // 화면 크기별 설정 (반응형)
          640: {
            // sm
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            // lg
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mySwiper w-full h-full" // 커스텀 스타일링을 위한 클래스
      >
        {successData.map((item) => (
          <SwiperSlide key={item.id} className="px-2">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[554px] h-[658px] object-cover" // 이미지 크기 및 비율 조절
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SuccessSlider;
