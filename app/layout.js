import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import * as ChannelService from "@channel.io/channel-web-sdk-loader";
import Script from "next/script"; // next/script 임포트 확인
import Footer from "./components/Footer";

ChannelService.loadScript();

const noto_sans_kr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata = {
  title: "법무법인 에이파트 김태용변호사",
  description:
    "안녕하세요 개인회생파산 전문 김태용변호사입니다. 여러분들이 채무를 해결하고 다시 인생을 설계할 수 있도록 지금 가지고 계신 채무를 해결해드리겠습니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager 스크립트 */}
        <Script
          id="gtm-script" // 고유한 ID를 부여하여 식별
          strategy="afterInteractive" // 페이지 상호작용 후 로드하여 성능 최적화
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

        {/* 보라웨어 로그 스크립트 시작 */}
        <Script
          id="boraware-protect-id" // 첫 번째 보라웨어 스크립트에 고유한 ID 부여
          strategy="beforeInteractive" // 페이지 상호작용 전에 로드
          dangerouslySetInnerHTML={{
            __html: `
              var protect_id = 'i367';
            `,
          }}
        />
        <Script
          id="boraware-protect-script" // 두 번째 보라웨어 스크립트에 고유한 ID 부여
          strategy="afterInteractive" // 페이지 상호작용 후 로드
          src="//script.boraware.kr/protect_script_v2.js"
        />
        {/* 보라웨어 로그 스크립트 끝 */}
      </head>
      <body className={noto_sans_kr.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T9WVRCKP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
