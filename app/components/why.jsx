// components/Section2.jsx (또는 .tsx)
import Image from "next/image";

export default function Section2() {
  return (
    <div className="w-full bg-white h-[450px] flex flex-col items-center justify-center gap-10">
      <h2 className="text-[24px]">
        <span className="font-semibold">수원에서 개인회생</span>을 해야 한다면
      </h2>
      <div className="text-[18px] text-center">
        <h2>수원 개인회생 사건만 전문으로 하는</h2>
        <h2>
          {/* ✨ 여기에 새로운 span으로 밑줄 적용 영역 지정 ✨ */}
          <span className="reason-highlight">
            <span className="font-semibold">김태용</span> 변호사를 찾아야하는
            이유
          </span>
        </h2>
      </div>
      <div className="pointer-bounce mt-10">
        <Image src="/pointer.png" width={32} height={32} alt="pointer"></Image>
      </div>
    </div>
  );
}
