export default function Consult() {
  return (
    <div className="consult-box z-20 bg-black p-4 rounded-lg shadow-md fixed w-full text-white bottom-0">
      <h2 className="text-md font-bold mb-4 text-center">
        딱 한번의 상담으로 채무를 해결해보세요. 상담 전화 : 070-4138-0508
      </h2>
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
  );
}
