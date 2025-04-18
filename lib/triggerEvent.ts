import { sendGTMEvent, sendGAEvent } from "@next/third-parties/google";

export const triggerEvent = () => {
  console.log("구글전환완료");

  sendGTMEvent({
    event: "conversion",
    value: { send_to: "AW-17008053663/bM_uCP7e2bkaEJ-bia4_" },
  });
};
