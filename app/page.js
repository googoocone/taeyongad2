"use client";
import Image from "next/image";

import * as ChannelService from "@channel.io/channel-web-sdk-loader";
import Link from "next/link";
ChannelService.loadScript();
import Script from "next/script";

import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Section5 from "./components/section5";
import Section6 from "./components/section6";
import Short from "./components/short";

import { sendEmail } from "@/lib/action";

export default function Home() {
  const gtag_report_conversion = () => {
    if (typeof window !== "undefined" && typeof gtag === "function") {
      gtag("event", "conversion", {
        send_to: "AW-16722031338/cGQFCIa3quYZEOrl16U-",
      });
    }
  };

  ChannelService.boot({
    pluginKey: "fa51cdd3-be1a-4b4b-a3f0-fa259994e5ac", // fill your plugin key
  });
  return (
    <>
      <main className="main">
        <div className="consult-box z-20 bg-black p-4 rounded-lg shadow-md fixed w-full text-white bottom-0">
          {/* <h2 className="text-md font-bold mb-4 text-center">
            딱 한번의 상담으로 채무를 해결해보세요. 상담 전화 : 070-4138-0508
          </h2> */}
          <form
            className="flex items-center justify-center gap-2"
            onSubmit={async (e) => {
              e.preventDefault(); // 폼 제출 시 새로고침 방지
              const name = e.target.name.value.trim();
              const phone = e.target.phone.value.trim();

              if (name.length < 2) {
                alert("이름은 최소 2글자 이상이어야 합니다.");
                return;
              }

              if (!/^\d{10,11}$/.test(phone)) {
                alert("올바른 전화번호를 입력하세요 (10~11자리 숫자).");
                return;
              }
              try {
                // 폼 데이터를 서버에 전송
                alert("상담 신청이 접수되었습니다. 곧 연락드리겠습니다");

                const result = await sendEmail(new FormData(e.target));
                gtag_report_conversion();
              } catch (error) {
                alert("이메일 전송에 실패했습니다. 다시 시도해주세요.");
                console.error(error);
              }
            }}
          >
            {/* 이름 입력 */}

            <input
              type="text"
              id="name"
              name="name"
              placeholder="이름"
              className="border border-gray-300 rounded-md p-2 w-1/7 text-black"
            />

            {/* 전화번호 입력 */}
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="전화번호"
              className="border border-gray-300 rounded-md p-2 w-1/6 text-black"
            />

            {/* 제출 버튼 */}
            <button
              type="submit"
              className="bg-[#172959] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition w-[150px]"
            >
              즉시 상담신청
            </button>
            <div>
              <input
                type="checkbox"
                id="agree"
                name="agree"
                className="border border-gray-300 rounded-md p-2 mr-2 w-[18px]"
              ></input>
              개인정보 수집 동의
            </div>
          </form>
        </div>

        <div className="top-nav">
          전문변호사와 확실한 개인회생ㆍ개인파산 상담, 지금 바로 받아보세요
        </div>

        <Short></Short>

        <div className="main-container">
          <Section1></Section1>
        </div>
        <div className="section2-container">
          <Section2></Section2>
        </div>
        <div className="section3-container">
          <Section3></Section3>
        </div>
        <div className="section2-container">
          <Section4></Section4>
        </div>
        <div className="section3-container">
          <Section5></Section5>
        </div>
        <div className="section6-container">
          <Section6></Section6>
        </div>
        <footer className="footer">
          <div className="footer-container pb-[80px]">
            {" "}
            <div>
              사업자명 : 법무법인 에이파트 수원 사업자 번호 : 247-85-02735
            </div>
            <div>광고책임변호사 : 김태용 </div>
            <div>주소 : 경기 수원시 영통구 광교중앙로248번길 7-2 317,318호</div>
            <div>070-4138-0508</div>
          </div>
        </footer>
      </main>
      <div className="mobile-main">
        <div className="consult-box z-20 bg-black px-2 py-2 rounded-lg  fixed w-full text-white bottom-0">
          <form
            className="flex items-center flex-col justify-center gap-2 pb-2"
            onSubmit={async (e) => {
              e.preventDefault(); // 폼 제출 시 새로고침 방지
              const name = e.target.name.value.trim();
              const phone = e.target.phone.value.trim();

              if (name.length < 2) {
                alert("이름은 최소 2글자 이상이어야 합니다.");
                return;
              }

              if (!/^\d{10,11}$/.test(phone)) {
                alert("올바른 전화번호를 입력하세요 (10~11자리 숫자).");
                return;
              }
              try {
                // 폼 데이터를 서버에 전송
                alert("상담 신청이 접수되었습니다. 곧 연락드리겠습니다");

                const result = await sendEmail(new FormData(e.target));
                gtag_report_conversion();
              } catch (error) {
                alert("이메일 전송에 실패했습니다. 다시 시도해주세요.");
                console.error(error);
              }

              alert("상담 신청이 완료되었습니다!");
            }}
          >
            {/* 이름 입력 */}
            <div className="flex gap-2">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="이름"
                className="border border-gray-300 rounded-md p-2 w-1/3 text-black"
              />
              {/* 전화번호 입력 */}
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="전화번호"
                className="border border-gray-300 rounded-md p-2 w-2/3 text-black"
              />

              {/* 제출 버튼 */}
            </div>
            <button
              type="submit"
              className="bg-[#172959] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition w-full"
            >
              즉시 상담신청
            </button>
            {/* <div>
              <input
                type="checkbox"
                id="agree"
                name="agree"
                className="border border-gray-300 rounded-md p-2 mr-2 w-[18px]"
              ></input>
              개인정보 수집 동의
            </div> */}
          </form>
        </div>
        <div className="top-nav">전문변호사와 개인회생ㆍ개인파산 상담</div>
        <Short></Short>
        <div className="main-container">
          <Section1></Section1>
        </div>
        <div className="section2-container">
          <Section2></Section2>
        </div>
        <div className="section3-container">
          <Section3></Section3>
        </div>
        <div className="section2-container">
          <Section4></Section4>
        </div>
        <div className="section3-container">
          <Section5></Section5>
        </div>
        <div className="section6-container">
          <Section6></Section6>
        </div>
        <footer className="footer">
          <div className="footer-container">
            {" "}
            <div>
              사업자명 : 법무법인 에이파트 수원 사업자 번호 : 247-85-02735
            </div>
            <div>광고책임변호사 : 김태용 </div>
            <div>주소 : 경기 수원시 영통구 광교중앙로248번길 7-2 317,318호</div>
            <div>전화 : 070-4138-0508</div>
          </div>
        </footer>
      </div>
    </>
  );
}
