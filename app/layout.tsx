import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/themeProvider";
import Script from 'next/script';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "흙 | 흙광고기획",
  // description: "세종특별자치시 조치원",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko"
     suppressHydrationWarning>
    {/* <head>
      <Script
        strategy="beforeInteractive" //"beforeInteractive"으로 찾았는데 경고메세지 떠가지고 after로 수정해줬습니다. 
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
      ></Script>
  </head> */}
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            {/* <Script
          type="text/javascript"
          src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&libraries=services,clusterer?autoload=false`}
          strategy="beforeInteractive"
        ></Script> */}
           {/* <Sidebar>{children}</Sidebar> */}
          </ThemeProvider>
          
          </body>
    </html>
  );
}
