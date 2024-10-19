"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import CarItem from "./CarItem";

const CarouselCarList = ({ carList }: { carList: Car[] }) => {
  const splideOptions1 = {
    type: "loop", // Loop back to the beginning when reaching the end
    perPage: 1, // Number of items visible per page
    perMove: 1, // Move one item at a time
    pagination: false, // Enable pagination dots
    autoplay: true,
    interval: 2800,
    speed: 1800,
    arrows: false,
    easing: "ease",
    mediaQuery: "min",
    gap: "16px",
    breakpoints: {
      650: {
        perPage: 2,
        perMove: 1,
      },
      750: {
        perPage: 2,
        perMove: 1,
      },
      1000: {
        perPage: 3,
        perMove: 1,
      },
    },
  };

  return (
    <ul className="8xl:hidden px-4">
      <Splide options={splideOptions1}>
        {carList.map((data, i) => (
          <SplideSlide key={i}>
            <CarItem car={data} isCarousel={true} />
          </SplideSlide>
        ))}
      </Splide>
    </ul>
  );
};

export default CarouselCarList;
