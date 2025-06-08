import Link from "next/link";

export default function Footer() {
  return (
    <Link href="tel:070-4138-0508">
      <div className="w-full h-[40px] flex items-center justify-center font-semibold fixed bottom-0 bg-white border-blue-900 border text-blue-900">
        즉시 상담신청
      </div>
    </Link>
  );
}
