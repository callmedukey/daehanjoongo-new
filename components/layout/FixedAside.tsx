import Link from "next/link";
import React from "react";

const FixedAside = () => {
  return (
    <>
      <aside className="fixed right-0 bottom-0 w-full md:h-20 h-16 bg-primary text-[1.125rem] md:text-[1.25rem] md:flex md:items-center md:justify-center text-secondaryText md:gap-12 font-bold grid grid-cols-2 items-stretch z-50">
        <p className="text-white hidden md:block">
          내 차 수출하면 얼마 받을 수 있을까?
        </p>
        <Link
          href="/#inquiry-form"
          className="md:bg-white px-6 py-2 rounded-lg flex items-center md:text-[1.125rem] text-white md:text-secondaryText justify-self-center"
        >
          비교견적 받기
        </Link>
        <a
          className="text-white bg-secondaryText items-center md:hidden flex justify-center w-full blinking-call-btn"
          href="tel:050-8202-1309"
        >
          전화 상담하기
        </a>
      </aside>
      <div className="h-16 md:h-20" />
    </>
  );
};

export default FixedAside;
