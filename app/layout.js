import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import * as ChannelService from "@channel.io/channel-web-sdk-loader";

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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16722031338"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16722031338');
          `}
        </Script>
      </head>
      <body className={noto_sans_kr.className}>{children}</body>
    </html>
  );
}
