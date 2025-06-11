"use client"; // onClick 이벤트를 사용하기 위해 클라이언트 컴포넌트로 전환합니다.

import Link from "next/link";

export default function Footer() {
  // 전환 이벤트를 처리할 함수를 정의합니다.
  const handleConversionClick = () => {
    // gtag 함수가 로드되었는지 확인하고 전환 이벤트를 전송합니다.
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-16722031338/s0gXCKSQ2dYaEOrl16U-",
      });
      console.log("즉시 전화 상담 버튼 클릭: 전환 이벤트 전송 완료");
    }
  };

  return (
    // Link 컴포넌트에 onClick 이벤트를 추가합니다.
    <Link
      href="tel:070-4138-0508"
      className="z-150"
      onClick={handleConversionClick}
    >
      <div className="w-full h-[40px] flex items-center justify-center font-semibold fixed bottom-0 bg-white border-blue-900 border text-blue-900">
        즉시 전화 상담{" "}
      </div>
    </Link>
  );
}
