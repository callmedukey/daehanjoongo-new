import React from "react";
import Image from "next/image";
import UpArrow from "@/public/img/up-arrow.svg";

const CarItem = ({ car, isCarousel }: { car: Car; isCarousel: boolean }) => {
  if (isCarousel) {
    return (
      <div className="flex flex-col gap-2 flex-1 basis-[300px] rounded-3xl overflow-clip shadow-lg">
        <div className="relative flex-1 basis-[15rem]">
          <Image
            src={car.src}
            alt={car.car}
            fill
            quality={100}
            loading="eager"
            placeholder="blur"
            className="object-cover object-center"
          />
        </div>
        <div className="py-2 px-4 basis-[8rem] flex-1">
          <section className="flex items-center justify-between">
            <span className="">{car.car}</span>
            <span className="bg-primary text-white px-0.5 py-1 rounded-md">
              <span className="translate-y-0.5 inline-block">{car.year}</span>
            </span>
          </section>
          <section className="flex justify-between mt-6">
            <p>국내 매매상사</p>
            <p>{car.buy}</p>
          </section>
          <section className="flex justify-between mt-6 twenty font-bold">
            <p>중고차 수출</p>
            <p>{car.export}</p>
          </section>
        </div>
        <div className="bg-primary text-white py-4 px-2 flex justify-center items-center twenty gap-2 mt-6 font-bold flex-1">
          <p>{car.markup}</p>
          <Image
            src={UpArrow}
            alt="위로 향하는 화살표"
            className="size-6 animate-pulse"
          />
        </div>
      </div>
    );
  }

  return (
    <li className="flex flex-col gap-2 flex-1 basis-[300px] rounded-3xl overflow-clip shadow-lg">
      <div className="relative flex-1 basis-[15rem]">
        <Image
          src={car.src}
          alt={car.car}
          fill
          loading="eager"
          placeholder="blur"
          className="object-cover object-center"
        />
      </div>
      <div className="py-2 px-4 basis-[10rem] flex-1">
        <section className="flex items-center justify-between">
          <span className="">{car.car}</span>
          <span className="bg-primary text-white px-0.5 py-1 rounded-md">
            <span className="translate-y-0.5 inline-block">{car.year}</span>
          </span>
        </section>
        <section className="flex justify-between mt-6">
          <p>국내 매매상사</p>
          <p>{car.buy}</p>
        </section>
        <section className="flex justify-between mt-6 twenty font-bold">
          <p>중고차 수출</p>
          <p>{car.export}</p>
        </section>
      </div>
      <div className="bg-primary text-white py-4 px-2 flex justify-center items-center twenty gap-2 mt-6 flex-1 font-bold">
        <p>{car.markup}</p>
        <Image
          src={UpArrow}
          alt="위로 향하는 화살표"
          className="size-6 animate-pulse"
        />
      </div>
    </li>
  );
};

export default CarItem;
