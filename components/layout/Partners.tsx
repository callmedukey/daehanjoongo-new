import React from "react";
import { PartnerCarousel } from "@/components/partners/PartnerCarousel";

const Partners = () => {
  return (
    <article className="flex flex-wrap justify-center gap-x-[clamp(4rem,10vw,8rem)] lg:gap-y-4 gap-y-8 mx-auto px-4 border-t-2 border-primary pt-8 pb-16">
      <PartnerCarousel speed="normal" />
    </article>
  );
};

export default Partners;
