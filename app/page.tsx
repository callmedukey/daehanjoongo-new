import Image from "next/image";
import Ship from "@/public/img/ship.jpeg";

import RotatedShip from "@/public/img/damned-ship.jpeg";
import PhoneScreen from "@/public/img/screen-new.png";
import SalesMan from "@/public/img/salesman.png";
import InquiryForm from "@/components/InquiryForm";
import Morning from "@/public/img/carousel-cars/1.png";
import Avante from "@/public/img/carousel-cars/2.png";
import K3 from "@/public/img/carousel-cars/3.png";
import NewRey from "@/public/img/carousel-cars/4.png";
import SecondShip from "@/public/img/second-ship.jpeg";
import VectorShip from "@/public/img/vector-ship.svg";
import Phone from "@/public/img/phone.svg";
import Office from "@/public/img/office.svg";
import Step1 from "@/public/img/stage-1.jpeg";
import Step2 from "@/public/img/stage-2.jpeg";
import Step3 from "@/public/img/stage-3.png";
import Step4 from "@/public/img/stage-4.jpeg";
import Step5 from "@/public/img/stage-5.jpeg";
import Step6 from "@/public/img/stage-6.png";
import SecondBackground from "@/public/img/second-background.png";
import Diagram from "@/public/img/diagram-new.png";

import Link from "next/link";
import NonCarouselCarList from "@/components/NonCarouselCarList";
import CarouselCarList from "@/components/CarouselCarList";

const carList: Car[] = [
  {
    src: Morning,
    car: "올 뉴 모닝 디럭스 스페셜",
    year: "2013년식",
    buy: "499 만 원",
    export: "699 만 원",
    markup: "200만 원 UP",
  },
  {
    src: Avante,
    car: "아반떼 MD M16 GDI",
    year: "2013년식",
    buy: "490 만 원",
    export: "640 만 원",
    markup: "150만 원 UP",
  },
  {
    src: K3,
    car: "K3 1.6 GDI 프레스티지",
    year: "2015년식",
    buy: "630 만 원",
    export: "750 만 원",
    markup: "120만 원 UP",
  },
  {
    src: NewRey,
    car: "더 뉴 레이",
    year: "2015년식",
    buy: "759 만 원",
    export: "929 만 원",
    markup: "170만 원 UP",
  },
];

const stages: Stages[] = [
  {
    src: Step1,
    title: "상담 신청",
  },
  {
    src: Step2,
    title: "접수 후 상담사 연결",
  },
  {
    src: Step3,
    title: "견적 받기",
  },
  {
    src: Step4,
    title: "계약서 작성/차량 대금 송금",
  },
  {
    src: Step5,
    title: "탁송 배정 / 차량 이동",
  },
  {
    src: Step6,
    title: "당일 말소처리",
  },
];

export default function Home() {
  return (
    <main className="text-secondaryText">
      <article className="relative xl:min-h-[min(80dvh,600px)] isolate bg-black">
        <div className="absolute inset-0 bg-black/50" />
        <Image
          src={Ship}
          alt="화물선"
          className="object-cover xl:object-left object-[55%_0%] -z-10 lg:block hidden"
          quality={100}
          priority
          fill
        />
        <Image
          src={RotatedShip}
          alt="화물선"
          className="object-cover object-[40%_10%] -z-10 block lg:hidden"
          quality={100}
          priority
          fill
        />
        <div className="flex justify-center xl:gap-24 h-full max-w-screen-8xl mx-auto lg:flex-row flex-col px-2 sm:px-0">
          <div className="flex flex-col lg:section-top-padding relative flex-1 order-2">
            <h1 className="text-white font-bold thirty flex flex-col w-full xl:gap-6">
              <span className="text-primary self-center text-center xl:self-start threeRem">
                투명한 가격과 프로세스로
              </span>
              <span className="self-center text-center twoTwoFive">
                신뢰할 수 있는 중고차 수출 솔루션
              </span>
            </h1>
            <div className="lg:absolute bottom-0 mx-auto">
              <Image src={SalesMan} alt="영업원" height={300} priority />
            </div>
          </div>
          <div className="bg-white z-10 lg:m-12 mt-6 mx-auto mb-12 sm:px-6 px-4 py-6 flex-1 max-w-[40rem] rounded-xl order-1 w-full">
            <h2 className="thirty text-center font-extrabold">
              차량 수출 <span className="text-primary">최고가 견적</span>
            </h2>
            <p className="text-center sm:twenty text-footerColor font-medium">
              연식, 주행거리, 사고 유무 상관없이 최고가 매입
            </p>
            <InquiryForm />
          </div>
        </div>
      </article>
      <article className="section-top-padding font-bold max-w-7xl mx-auto px-4 isolate">
        <h3 className="text-center threeRem">
          자동차 연식이 높아{" "}
          <span className="text-primary underline underline-offset-8">
            걱정하시나요?
          </span>
        </h3>
        <p className="text-center twoTwoFive mt-[clamp(10px,10dvh,20px)]">
          팔지는 못 하고 폐차 하기 아까우시면 수출!
        </p>
        <div className="relative rounded-2xl overflow-clip mx-auto mt-[clamp(60px,10dvh,100px)] py-8 isolate">
          <p className="text-center thirty z-10 relative text-white leading-8">
            폐차 대비 50~300만원 <br className="sm:hidden" />
            <span className="text-primary">더 높은 가격에</span> 내차 팔기!
          </p>
          <div className="absolute inset-0 bg-black/50 -z-10" />
          <Image
            src={SecondBackground}
            alt="두번째 배경"
            fill
            className="object-cover object-center md:object-left flex-1 -z-20"
          />
          <div className="flex justify-center items-center mt-8 px-4">
            <Image
              src={Diagram}
              alt="상승을 보이는 그래프"
              height={347}
              width={451}
              quality={100}
              className="w-[clamp(200px,100%,450px)] lg:ml-12 lg:mr-auto"
            />
            <Image
              src={PhoneScreen}
              width={1193}
              height={2220}
              alt="24시간 이내 신속한 입금, 부담 감가 없이 내가 원하는 가격"
              className="h-[550px] w-[300px] ml-auto mr-12 hidden lg:block"
              quality={100}
            />
          </div>
          <Link
            href="/#inquiry-form"
            className="font-medium lg:absolute twenty text-white block w-fit bg-primary py-2 px-4 mx-auto rounded-xl mt-[clamp(30px,10dvh,60px)] z-30 bottom-6 left-1/2 lg:-translate-x-1/2"
          >
            <span className="inline-block">지금 바로 상담 받기</span>
          </Link>
        </div>
      </article>
      <article className="mt-[clamp(100px,10vw,180px)] max-w-screen-8xl mx-auto">
        <NonCarouselCarList carList={carList} />
        <CarouselCarList carList={carList} />
      </article>
      <article className="relative isolate">
        <h4 className="text-center threeRem font-extrabold my-[clamp(60px,10vw,100px)]">
          중고차 수출{" "}
          <span className="text-primary underline underline-offset-8">
            판매 절차
          </span>
        </h4>
        <ul className="grid grid-cols-2 lg:grid-cols-3 lg:gap-12 gap-y-4 gap-1 sm:gap-8 max-w-4xl mx-auto w-full px-4">
          {stages.map((stage, index) => (
            <li
              key={index}
              className="flex-1 flex flex-col basis-[15rem] overflow-clip rounded-md relative shadow-lg isolate bg-white"
            >
              <span className="bg-primary sm:p-2 py-1 px-2 rounded-md absolute z-10 text-xs sm:text-sm md:text-base">
                <span className="inline-block text-white">
                  Step {index + 1}.
                </span>
              </span>

              <div className="relative w-full flex-1 basis-[7rem] sm:basis-[10rem]">
                <Image
                  src={stage.src}
                  alt={stage.title}
                  fill
                  className="object-cover object-center"
                  quality={100}
                  placeholder="blur"
                />
              </div>
              <p className="text-center py-4 text-xs sm:text-sm md:text-base lg:twenty font-extrabold">
                <span className="inline-block">{stage.title}</span>
              </p>
            </li>
          ))}
        </ul>
        <div className="absolute lg:block hidden bottom-[-40px] bg-primary opacity-50 w-full h-[clamp(160px,15vw,180px)] max-h-[200px] -z-10" />
      </article>
      <article className="my-[clamp(100px,10vw,180px)] relative py-16 isolate">
        <div className="absolute inset-0 bg-black/50" />
        <Image
          src={SecondShip}
          alt="바다를 가로질르는 화물선"
          fill
          className="-z-10 object-cover object-center"
          sizes="100vw"
        />
        <ul className="flex justify-center flex-wrap gap-12 px-4">
          <Link href="/#inquiry-form">
            <li className="flex bg-white isolate relative py-6 pl-6 pr-10 rounded-xl h-[8rem] gap-6 basis-[20rem] flex-1 max-w-[20rem]">
              <div className="absolute -left-8 -bottom-6 size-[8rem] bg-[#01258C] opacity-10 z-10 rounded-full blur-sm" />
              <Image
                src={Phone}
                alt="전화기"
                width={80}
                height={80}
                className="self-start -translate-y-2"
              />
              <p className="flex flex-col gap-4 self-end ml-auto sm:ml-0">
                <span className="">JK중고차수출</span>
                <span className="sm:twenty font-extrabold">문의하기</span>
              </p>
            </li>
          </Link>
          <Link href="/export">
            <li className="flex bg-white isolate relative py-6 pl-6 pr-10 rounded-xl h-[8rem] gap-6 basis-[20rem] flex-1 max-w-[20rem]">
              <div className="absolute -left-8 -bottom-6 size-[8rem] bg-[#01258C] opacity-10 z-10 rounded-full blur-sm" />
              <Image
                src={VectorShip}
                alt="백터 화물선"
                width={80}
                height={80}
                className="self-start -translate-y-2 scale-110"
              />
              <p className="flex flex-col gap-4 self-end ml-auto sm:ml-0">
                <span className="">JK중고차수출</span>
                <span className="sm:twenty font-extrabold">중고차 직수출</span>
              </p>
            </li>
          </Link>
          <Link href="/about">
            <li className="flex bg-white isolate relative py-6 pl-6 pr-10 rounded-xl h-[8rem] gap-6 basis-[20rem] flex-1 max-w-[20rem]">
              <div className="absolute -left-8 -bottom-6 size-[8rem] bg-[#01258C] opacity-10 z-10 rounded-full blur-sm" />
              <Image
                src={Office}
                alt="사무실"
                width={80}
                height={80}
                className="self-start -translate-y-2"
              />
              <p className="flex flex-col gap-4 self-end ml-auto sm:ml-0">
                <span className="">JK중고차수출</span>
                <span className="sm:twenty font-extrabold">소개</span>
              </p>
            </li>
          </Link>
        </ul>
      </article>
    </main>
  );
}
