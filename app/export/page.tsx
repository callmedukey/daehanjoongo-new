import Ship from "@/public/img/ship.jpeg";
import React from "react";
import Image from "next/image";
import VectorShape from "@/public/img/vector-shape.svg";
import SalesMan from "@/public/img/sales-man-3.png";
import SalesMan2 from "@/public/img/sales-man-4.png";
import Broken1 from "@/public/img/broken-1.svg";
import Broken2 from "@/public/img/broken-2.svg";
import Broken3 from "@/public/img/broken-3.svg";
import FinalShip from "@/public/img/final-ship.png";
import Transport from "@/public/img/transport.png";

import { cn } from "@/lib/utils";
import InquiryForm from "@/components/InquiryForm";

const list = [
  "해외바이어오더 및 현장오더",
  "차량 매입",
  "수출 차량 말소",
  "바이어와 차량 매매",
  "차량선적후 수출",
];

const secondList = [
  {
    title: "연식이 오래된 차량도 OK",
    text: "연식이 오래되어도 국내 대비 감가폭이 크지 않음",
    src: Broken1,
  },
  {
    title: "폐차를 고민하는 차량도 OK",
    text: "연식이 오래되어도 국내 대비 감가폭이 크지 않음",
    src: Broken2,
  },
  {
    title: "국내 시세 비교도 OK",
    text: "중고차 직수출 시세와 국내 시세를 투명하게 비교해 드립니다, 숨김없이 전부 공개합니다",
    src: Broken3,
  },
];

const ExportPage = () => {
  return (
    <main className="px-4 max-w-screen-8xl mx-auto text-secondaryText">
      <article className="relative min-h-[min(80dvh,600px)] pt-12 sm:pt-16 xl:pt-24 text-center">
        <div className="mx-auto leading-relaxed flex gap-12 items-center">
          <div className="flex-1 basis-[40%] shrink-0">
            <h1 className="text-primary threeRem font-bold border-primaryFormText">
              중고차 직수출을 왜 하나요?
            </h1>
            <p className="mt-12 text-left max-w-lg mx-auto">
              중고차 수출은{" "}
              <span className="font-bold twenty">
                국내에서 판매하기 힘든 차량을
              </span>{" "}
              해외로 판매하는 효과적인 방법입니다. 해외 바이어와 직접 연결되어
              중간 마진을 제거하고, 차량 종류에 따라{" "}
              <span className="font-bold twenty">
                국내 시장보다 더 높은 가격에
              </span>{" "}
              판매할 수 있는 기회를 제공합니다. 더불어, 서류 절차가 간소화되어
              중고차 거래를 신속하고 편리하게 진행할 수 있습니다.
            </p>
          </div>
          <Image
            src={Transport}
            alt="중고차"
            quality={100}
            loading="eager"
            priority
            width={1896}
            height={1748}
            className="basis-[40%] shrink-[2] w-[40%] hidden lg:block"
          />
        </div>
        <div className="flex justify-center mt-[clamp(4rem,20vw,12rem)] items-center isolate lg:flex-row flex-col gap-8 lg:gap-0 relative pt-12 lg:pt-0 mx-[-1rem] px-4">
          <p className="shadow-xl border py-2 lg:p-4 bg-white z-10 max-w-[25rem] lg:min-w-[25rem] w-full rounded-lg lg:translate-x-60 xl:translate-x-40 2xl:translate-x-24 order-1">
            <span className="font-bold twenty text-primary">
              국내보다 높은 판매가
            </span>
            <br />
            <span>최대한의 이익을 만들어 낼 수 있는 매매 방법</span>
          </p>
          <Image
            src={SalesMan}
            alt="영업원"
            width={600}
            priority
            quality={100}
            className="shrink-0 order-3 lg:order-2"
          />
          <p className="shadow-xl border py-2 lg:p-4 bg-white z-10 max-w-[25rem] lg:min-w-[25rem] w-full rounded-lg lg:-translate-x-60 xl:-translate-x-40 2xl:-translate-x-24 order-2 lg:order-3">
            <span className="font-bold twenty text-primary">
              간편한 서류와 빠르고 편리한 거래
            </span>
            <br />
            <span>주행거리와 사고 이력에 대해 자유로운 매매 방법</span>
          </p>
          <Image
            src={Ship}
            alt="배"
            fill
            placeholder="blur"
            priority
            quality={100}
            loading="eager"
            className="object-cover object-[80%_0] -z-20 lg:hidden"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-10 lg:hidden" />
        </div>
      </article>
      <article className="shadow-lg py-12 rounded-lg relative max-w-4xl mx-auto border isolate px-4 mt-12 lg:mt-0">
        <Image
          src={VectorShape}
          alt="벡터 모양"
          className="object-fill object-top"
          fill
        />
        <h2 className="font-bold text-primary text-center thirty">
          중고차 직수출이란, 이렇게 진행됩니다!
        </h2>
        <ul className="flex flex-col gap-4 sm:gap-4 py-12">
          {list.map((item, index) => (
            <li
              key={index}
              className="shadow-md max-w-2xl mx-auto py-2 sm:px-6 px-2 md:px-12 w-full flex justify-center items-center bg-white z-10 rounded-lg"
            >
              <div className="w-16 h-24 rounded-lg bg-primaryBlue mr-auto ml-2 md:ml-12 flex items-center justify-center font-bold scale-[80%] sm:scale-100 text-white thirty relative overflow-clip shrink-0">
                <span className="-translate-y-4">{index + 1}</span>
                <span className="absolute top-[4.85rem] left-0 right-0 size-12 rounded-md bg-white rotate-45 mx-auto" />
              </div>
              <span className="grow text-left ml-2 sm:ml-24  font-bold sm:twenty text-base">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </article>
      {/* <div
        className="h-4 lg:h-4 w-full hidden md:block max-w-4xl mx-auto relative z-20 shadow-lg bg-white border border-t-0 rounded-lg rounded-t-none rounded-b-lg"
        aria-disabled={true}
      /> */}
      <article className="mt-[clamp(4rem,20vw,10rem)]">
        <h3 className="threeRem text-center font-bold">
          왜 중고차 <span className="text-primary">직수출</span>을 해야할까요?
        </h3>
        <ul className="flex items-start justify-center gap-12 mt-12 max-w-7xl mx-auto flex-wrap">
          {secondList.map((item, index) => (
            <li
              key={index}
              className={cn(
                "flex flex-col gap-4 flex-1 basis-[20rem]",
                index === 1 && "-mt-12 sm:mt-0",
                index === 2 && "mt-12 sm:mt-0"
              )}
            >
              <p className="text-center thirty flex-1 lg:basis-[5rem] font-bold">
                {item.title}
              </p>
              <p className="text-center flex-1 max-w-[13.5rem] mx-auto">
                {item.text}
              </p>
              <Image
                src={item.src}
                alt={item.title}
                width={index === 0 ? 200 : 150}
                className={cn(
                  "flex-1 self-center xl:mt-16 lg:mt-12",
                  index === 1 && "translate-y-6",
                  index === 2 && "-translate-y-2"
                )}
              />
            </li>
          ))}
        </ul>
      </article>
      <article className="mt-[clamp(4rem,20vw,10rem)] relative rounded-lg max-w-7xl mx-auto overflow-clip pt-20 md:pb-0 isolate md:px-24 px-4 flex justify-center items-center flex-col lg:flex-row">
        <div className="absolute inset-0 bg-black/50" />
        <Image
          src={FinalShip}
          alt="최종 배송"
          fill
          placeholder="blur"
          quality={100}
          className="object-cover object-left -z-10"
          sizes="(max-width: 768px) 95vw, (max-width: 1200px) 80vw, 60vw"
        />
        <div className="bg-white max-w-[34rem] p-4 sm:p-8 space-y-4 rounded-lg z-30 self-start xl:translate-x-12 md:-translate-y-4 mx-auto">
          <h3 className="thirty text-center font-bold text-primary">
            NO! 이제는 수출의 시대입니다!
          </h3>
          <p className="text-black">
            주행거리가 많은 차량은 중고차 시장에서 감가 요인이 될 수 있지만,
            수출에서는 큰 영향을 받지 않습으며 수동 변속기 차량도 해외에서는
            국내와 달리 인기가 낮지 않습니다.
          </p>
        </div>
        <Image
          src={SalesMan2}
          alt="영업원"
          width={500}
          className="z-10 xl:-translate-x-12 self-end shrink-0"
          quality={100}
        />
      </article>
      <div className="bg-white z-10 lg:my-12 mt-6 mx-auto mb-12 sm:px-6 px-4 py-6 flex-1 max-w-[40rem] rounded-xl order-1 w-full border border-[#FFE5E5] ">
        <h2 className="thirty text-center font-extrabold">
          차량 수출 <span className="text-primary">최고가 견적</span>
        </h2>
        <p className="text-center sm:twenty text-footerColor font-medium">
          연식, 주행거리, 사고 유무 상관없이 최고가 매입
        </p>
        <InquiryForm />
      </div>
    </main>
  );
};

export default ExportPage;
