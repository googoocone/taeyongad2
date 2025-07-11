"use client";
import Image from "next/image";

import * as ChannelService from "@channel.io/channel-web-sdk-loader";
import Link from "next/link";
ChannelService.loadScript();
import { useEffect, useState } from "react";

import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Success from "./components/success";
import Section5 from "./components/section5";
import Section6 from "./components/section6";
import Short from "./components/short";
import Kakao from "./components/kako";
import Why from "./components/why";
import Map from "./components/map";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  // useEffect(() => {
  //   // 홈페이지가 로드되었을 때 팝업을 띄운다.
  //   setModalOpen(true);
  // }, []);

  ChannelService.boot({
    pluginKey: "fa51cdd3-be1a-4b4b-a3f0-fa259994e5ac", // fill your plugin key
  });
  return (
    <>
      {/* <TrackingPage></TrackingPage> */}

      <main className="main">
        <button className="z-10 w-[80px] h-[80px] cursor-pointer text-white bg-red-500 fixed right-16 bottom-1/3 flex items-center justify-center rounded-full shadow-lg hover:scale-110 animate-bounce">
          <Link href="tel:070-4238-0508">상담신청</Link>
        </button>
        <div className="top-nav">
          전문변호사와 확실한 개인회생ㆍ개인파산 상담, 지금 바로 받아보세요
        </div>
        <Short></Short>
        <div className="main-container">
          {/* <Section1></Section1> */}
          <Success></Success>
        </div>
        <div className="section2-container">
          <Section2></Section2>
        </div>
        <div className="section3-container">
          <Section3></Section3>
        </div>
        {/* <div className="section2-container">
          <Section4></Section4>
        </div> */}
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
        <div className="top-nav">전문변호사와 개인회생ㆍ개인파산 상담</div>

        <Short></Short>
        <Why></Why>
        <div className="main-container">
          <Success></Success>
        </div>
        <div className="section3-container">
          <Section3></Section3>
        </div>
        <Kakao></Kakao>
        <Map></Map>
        <div className="section2-container">
          <Section2></Section2>
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
