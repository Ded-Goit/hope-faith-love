import type { Metadata } from "next";
import "./globals.css";
import { Inter, Merriweather, Noto_Sans, Noto_Serif } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// Підключення шрифтів з підтримкою кирилиці
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ethernal Life Society - Orthodox Faith in Action",
  description: "Orthodox community offering worship, aid, rites, guidance, and spiritual resources to serve people in need with hope, love, and faith.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${merriweather.variable} ${notoSans.variable} ${notoSerif.variable}`}
    >
      <body>  
        <Header />
           
        <main style={{ flex: 1 }}>{children}</main> 

        <Footer />
          
      </body>
    </html>
  );
}
/**import Header from '@/components/Header/Header'
import './globals.css'
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <TanStackProvider>
          <Header />
          <hr />
          <br />
          {children}
        </TanStackProvider>
      </body>
    </html>
  )
} */