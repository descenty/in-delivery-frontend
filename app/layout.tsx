import "./globals.css";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import Header from "@/components/header/header";
import { Providers } from "./providers";
import Chat from "@/components/chat/chatLayout";
import Cart from "@/components/cart/cart";
import ProductModal from "@/components/catalog/productModal";
import Footer from "@/components/footer/footer";
import LeftSideMenu from "@/components/sidePanels/leftSideMenu";
import { get_all_parent_categories } from "@/services/category_service";
import { Card } from "@nextui-org/react";
import RightSideMenu from "@/components/sidePanels/rightSideMenu";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "в_доставке",
  description: "Интернет-рекрутинг",
  icons: {
    icon: "./workin.svg",
  },
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const categories = await get_all_parent_categories();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-row mt-28 justify-between gap-4">
            <div className="min-w-[270px]"></div>
            <Card className="w-full">
              {children}
              <Footer />
            </Card>
            <div className="min-w-[257px]"></div>
          </div>
          <div className="fixed h-[100vh] w-[100vw] left-0 top-0 pl-4 pr-8">
            <Header />
            <div className="mt-4 flex flex-row pb-8 justify-between">
              <LeftSideMenu categories={categories} />
              <RightSideMenu />
            </div>
            <ProductModal />
            <Cart />
            <Chat />
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
