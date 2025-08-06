import Image from "next/image";
import Link from "next/link";
import React from "react";
import WhitePhone from "@/public/img/white-phone.svg";
const Footer = () => {
  return (
    <footer className="px-[clamp(1rem,5vw,6rem)] py-4 bg-footerColor text-sm">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex gap-12 text-footerText">
          <Link href="/terms">이용약관</Link>
          <Link href="/privacy">개인정보취급방침</Link>
        </div>
        <div className="flex lg:gap-12 gap-6 text-white flex-wrap py-12 px-2">
          <ul className="lg:border-r border-white flex-1 basis-[6rem] space-y-2">
            <li>{`상호명: 오케이(OK)무역`}</li>
            <li>{`대표: 문창균`}</li>
            <li>{`사이트명: OK중고차수출`}</li>
          </ul>
          <ul className="flex-1 basis-[12rem] space-y-2">
            <li>{`주소: 인천광역시 부평구 안남로 62, 5층 501호(부평동, 해담빌딩)`}</li>
            <li>대표번호: 0508-4265-3822</li>
            <li>{`사업자등록번호: 314-76-00485`}</li>
          </ul>
          <div className="flex-1 basis-[15rem] ml-auto mr-0 w-full">
            <p className="flex items-center lg:justify-end gap-2">
              <Image
                src={WhitePhone}
                width={24}
                height={24}
                alt="고객센터 전화번호 0508-4265-3822"
              />
              <span>고객센터 전화번호 0508-4265-3822</span>
            </p>
          </div>
        </div>
      </div>
      <div className="text-center text-white text-xs">
        <p>
          광고 영업 전화 시 업무방해 관련, 네이버/카카오 본사 영업사원 및 대행사
          신고합니다.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
