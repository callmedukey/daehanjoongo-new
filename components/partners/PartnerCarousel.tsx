"use client";
import Image from "next/image";
import Partner1 from "@/public/img/partners/img_partner1.gif";
import Partner2 from "@/public/img/partners/img_partner2.gif";
import Partner3 from "@/public/img/partners/img_partner3.gif";
import Partner4 from "@/public/img/partners/img_partner4.gif";
import Partner5 from "@/public/img/partners/img_partner5.gif";
import Partner6 from "@/public/img/partners/img_partner6.gif";
import Partner7 from "@/public/img/partners/img_partner7.gif";
import Partner8 from "@/public/img/partners/img_partner8.gif";
import Partner9 from "@/public/img/partners/img_partner9.gif";
import Partner10 from "@/public/img/partners/img_partner10.png";
import Partner11 from "@/public/img/partners/img_partner11.png";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

const items = [
  Partner1,
  Partner2,
  Partner3,
  Partner4,
  Partner5,
  Partner6,
  Partner7,
  Partner8,
  Partner9,
  Partner10,
  Partner11,
];

export const PartnerCarousel = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "60s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-12 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <Image
            src={item}
            alt="partner"
            key={idx}
            quality={100}
            width={100}
            priority
          />
        ))}
      </ul>
    </div>
  );
};
