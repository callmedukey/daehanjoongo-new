import Link from "next/link";
import NavLink from "./NavLink";
import Logo from "@/public/img/daehan-logo.png";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import DarkPhone from "@/public/img/dark-phone.png";

const Header = () => {
  return (
    <header className="sticky top-0 flex text-primary py-8 px-3 md:justify-center gap-2 justify-between items-center font-medium z-50 bg-white">
      <MobileMenu />
      <Link
        href="/"
        className="md:absolute left-4 xl:left-16 top-0 bottom-0 self-center"
      >
        <Image
          src={Logo}
          alt="로고"
          width={250}
          className=""
          priority
          loading="eager"
          quality={100}
        />
      </Link>
      <a href="tel:050-8202-1309" className="size-8 md:hidden">
        <Image
          src={DarkPhone}
          alt="모바일 폰"
          width={60}
          height={60}
          className="size-8 md:hidden"
          priority
          quality={100}
          loading="eager"
        />
      </a>
      <nav className="gap-[clamp(1rem,10vw,3.5rem)] hidden md:flex mr-0 ml-auto lg:mr-auto font-notoSans font-extrabold text-black text-[1.25rem]">
        <NavLink href="/">홈</NavLink>
        <NavLink href="/about">회사 소개</NavLink>
        <NavLink href="/export">중고차 직수출</NavLink>
      </nav>
    </header>
  );
};

export default Header;
