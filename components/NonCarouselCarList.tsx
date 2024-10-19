import CarItem from "./CarItem";

function NonCarouselCarList({ carList }: { carList: Car[] }) {
  return (
    <ul className="gap-4 justify-center flex-wrap hidden 8xl:flex">
      {carList.map((car) => (
        <CarItem key={car.car} car={car} isCarousel={false} />
      ))}
    </ul>
  );
}

export default NonCarouselCarList;
