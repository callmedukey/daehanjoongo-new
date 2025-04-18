import type { Metadata } from "next";
import localFont from "next/font/local";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from "next/script";
import FixedAside from "@/components/layout/FixedAside";
import Partners from "@/components/layout/Partners";
import { GoogleTagManager } from "@next/third-parties/google";
const Pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  style: "normal",
});

const NotoSans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-noto-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "전국중고차수출",
  description:
    "전국중고차수출은 중고차 해외 수출 전문 업체로, 한국 중고차의 수출 절차, 비용, 등 자세한 상담을 도와드리며, 전 세계 다양한 국가에 신속하게 중고차를 수출합니다.",
  keywords: [
    "중고차 수출",
    "중고차 해외 수출",
    "중고차 판매",
    "한국 중고차 수출",
    "해외 중고차 거래",
    "수출용 중고차",
    "중고차 수출업체",
    "한국 자동차 수출",
    "중고차 수출 상담",
    "중고차 수출 절차",
    "자동차 수출",
    "수출 자동차 매입",
    "중고차 딜러 수출",
    "해외 바이어 중고차",
    "중고차 수출 국가",
    "중고차 수출 비용",
    "중고차 수출 세금",
    "중고차 수출 전문 업체",
    "중고차 수출 가격 비교",
    "한국 중고차 시장",
    "중고차 수출 문의",
    "중고차 수출 서비스",
    "중고차 수출 서류",
    "중고차 수출 물류",
    "중고차 수출 비용 절감",
  ],
  openGraph: {
    images: "https://daehancar.com/img/daehan-logo.png",
    type: "website",
    url: `https://daehancar.com`,
    title: `전국중고차수출`,
    description:
      "전국중고차수출은 한국의 중고차를 전 세계로 수출하는 전문 업체입니다. 신속하고 신뢰할 수 있는 수출 절차를 통해 고객에게 최고의 서비스를 제공합니다.",
  },
  icons: { icon: "/favicon.ico" },
  other: {
    "naver-site-verification": "0ee91df805fd37c44a6efe39aee55ac688dec37e",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <GoogleTagManager gtmId="GTM-NGFQKHPN" />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-17008053663"
      ></Script>
      <Script id="gtag-init" async>
        {`
     window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-17008053663');
        `}
      </Script>

      <Script id="gtag-report-conversion">
        {`
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-17008053663/bM_uCP7e2bkaEJ-bia4_',
      'event_callback': callback
  });
  return false;
}
        `}
      </Script>

      <body
        className={`${Pretendard.variable} ${NotoSans.variable}  isolate antialiased leading-normal break-keep font-medium text-secondaryText`}
      >
        <Header />
        {children}
        <Partners />
        <Footer />
        <FixedAside />
        <Script
          id="smlog-script"
          dangerouslySetInnerHTML={{
            __html: `var hpt_info={'_account':'UHPT-29091', '_server': 'a28'};`,
          }}
        ></Script>
        <noscript>
          <img
            src="//a28.smlog.co.kr/smart_bda.php?_account=29091"
            style={{ display: "none", width: 0, height: 0 }}
          />
        </noscript>
        <Script src="//cdn.smlog.co.kr/core/smart.js" />
      </body>
    </html>
  );
}
