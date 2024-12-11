"use client";
import Image from "next/image";

import * as ChannelService from "@channel.io/channel-web-sdk-loader";
import Link from "next/link";
ChannelService.loadScript();
import { useEffect } from "react";
import TrackingPage from "./trackerReact";

import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Section5 from "./components/section5";
import Section6 from "./components/section6";
import Short from "./components/short";

export default function Home() {
  ChannelService.boot({
    pluginKey: "fa51cdd3-be1a-4b4b-a3f0-fa259994e5ac", // fill your plugin key
  });
  return (
    <>
      <TrackingPage></TrackingPage>
      <main className="main">
        <button className="z-10 w-[80px] h-[80px] cursor-pointer text-white bg-[#172959] fixed right-16 bottom-1/3 flex items-center justify-center rounded-full shadow-lg hover:scale-110 animate-bounce">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf3lG2n0bb2k6DmK4sXD3NARJ-eufGeOeppfiGw7OoRg7khIQ/viewform">
            상담신청
          </Link>
        </button>

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
        <div className="top-nav">전문변호사와 개인회생ㆍ개인파산 상담</div>
        <button className="z-10 w-[65px] h-[65px] text-sm cursor-pointer text-white bg-[#172959] fixed right-2 bottom-1/4 flex items-center justify-center rounded-full shadow-lg hover:scale-110 animate-bounce">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf3lG2n0bb2k6DmK4sXD3NARJ-eufGeOeppfiGw7OoRg7khIQ/viewform">
            상담신청
          </Link>
        </button>
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
