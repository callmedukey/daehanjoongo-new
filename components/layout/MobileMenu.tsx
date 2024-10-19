"use client";
import Link from "next/link";
import { useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

const links = [
  { href: "/", name: "홈" },
  { href: "/about", name: "회사 소개" },
  { href: "/export", name: "중고차 직수출" },
];

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer direction="left" open={open} onOpenChange={setOpen}>
      <DrawerTrigger
        className="md:hidden text-black focus:outline-none"
        aria-label="모바일 메뉴"
      >
        <svg
          className="w-[2rem] h-[2rem]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </DrawerTrigger>
      <DrawerContent className="px-2 text-xl py-4 flex">
        <nav className="flex flex-col justify-start items-center flex-1 gap-6 py-24">
          {links.map((nav) => (
            <Link
              href={nav.href}
              key={nav.href}
              className="w-full text-center"
              onClick={() => setOpen(false)}
            >
              {nav.name}
            </Link>
          ))}
        </nav>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileMenu;
