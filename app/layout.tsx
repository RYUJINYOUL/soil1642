import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/themeProvider";
import FloatingMenu from "@/components/ui/FloatingMenu"


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
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
            <FloatingMenu />
          </body>
    </html>
  );
}
