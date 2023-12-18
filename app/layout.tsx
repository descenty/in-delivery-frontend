import "./globals.css";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import Header from "@/components/header/header";
import { Providers } from "./providers";
import Chat from "@/components/chat/chatLayout";
import Cart from "@/components/cart/cart";
import ProductModal from "@/components/catalog/productModal";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "доставка",
  description: "Интернет-рекрутинг",
  icons: {
    icon: "./workin.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <div className="flex justify-center items-center">{children}</div>
          <ProductModal />
          <Cart />
          <Chat />
        </Providers>
      </body>
    </html>
  );
}
