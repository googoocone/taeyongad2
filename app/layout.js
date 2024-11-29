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
        {/* <script>
        (function(){var w=window;if(w.ChannelIO){return w.console.error("ChannelIO script included twice.");}var ch=function(){ch.c(arguments);};ch.q=[];ch.c=function(args){ch.q.push(args);};w.ChannelIO=ch;function l(){if(w.ChannelIOInitialized){return;}w.ChannelIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";var x=document.getElementsByTagName("script")[0];if(x.parentNode){x.parentNode.insertBefore(s,x);}}if(document.readyState==="complete"){l();}else{w.addEventListener("DOMContentLoaded",l);w.addEventListener("load",l);}})();

        ChannelIO('boot', {
          "pluginKey": "fa51cdd3-be1a-4b4b-a3f0-fa259994e5ac"
        });
      </script> */}
      </head>
      <body className={noto_sans_kr.className}>{children}</body>
    </html>
  );
}
