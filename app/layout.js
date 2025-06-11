"use client"; // 3분 체류 이벤트(useEffect)를 위해 클라이언트 컴포넌트로 전환

import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import * as ChannelService from "@channel.io/channel-web-sdk-loader";
import Script from "next/script";
import Footer from "./components/Footer";
import { useEffect } from "react"; // useEffect 임포트

ChannelService.loadScript();

const noto_sans_kr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

// export const metadata = {
//   title: "법무법인 에이파트 김태용변호사",
//   description:
//     "안녕하세요 개인회생파산 전문 김태용변호사입니다. 여러분들이 채무를 해결하고 다시 인생을 설계할 수 있도록 지금 가지고 계신 채무를 해결해드리겠습니다.",
// };

export default function RootLayout({ children }) {
  // 3분 체류 이벤트 스크립트
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window.gtag === "function") {
        window.gtag("event", "conversion", {
          send_to: "AW-16722031338/5FwMCLuS2dYaEOrl16U-",
        });
        console.log("3분 체류 이벤트 전송 완료");
      }
    }, 180000); // 3분 = 180,000 밀리초

    return () => clearTimeout(timer); // 페이지를 떠날 때 타이머 제거
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager 스크립트 (기존 코드 유지) */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T9WVRCKP');
            `,
          }}
        />

        {/* --- START: 새로 추가된 Google Ads Tag (gtag.js) --- */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16722031338"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16722031338');
            `,
          }}
        />
        {/* --- END: 새로 추가된 Google Ads Tag (gtag.js) --- */}

        {/* 보라웨어 로그 스크립트 시작 (기존 코드 유지) */}
        <Script
          id="boraware-protect-id"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var protect_id = 'i367';
            `,
          }}
        />
        <Script
          id="boraware-protect-script"
          strategy="afterInteractive"
          src="//script.boraware.kr/protect_script_v2.js"
        />
        {/* 보라웨어 로그 스크립트 끝 */}
      </head>
      <body className={noto_sans_kr.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T9WVRCKP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
