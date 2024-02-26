import "./globals.css";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import { Providers } from "./providers";
import Chat from "@/components/chat/chatLayout";
import Cart from "@/components/cart/cart";
import ProductModal from "@/components/catalog/productModal";
import Footer from "@/components/footer/footer";
import LeftSideMenu from "@/components/sidePanels/leftSideMenu";
import { get_all_parent_categories } from "@/services/categoryService";
import { Card } from "@nextui-org/react";
import RightSideMenu from "@/components/sidePanels/rightSideMenu";
import Header from "@/components/header/header";
import ContentHead from "@/components/sidePanels/contentHead";
import NewAddressPanel from "@/components/address/newAddressPanel";
import NewOrderModal from "@/components/order/newOrderModal";
import CustomerOrdersModal from "@/components/order/customerOrdersModal";
import OrderModal from "@/components/order/orderModal";

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
    <html className="bg-default-100 " lang="en">
      <body className={inter.className}>
        <Providers>
          {/* main content grid */}
          <div className="grid grid-cols-4 pl-[16px] pr-[32px] max-xl:pr-[16px] mt-[180px] mb-24 gap-4">
            {/* these divs need to repeat overlay layout */}
            {/* for LeftSideMenu */}
            <div></div>
            <Card className="rounded-t-none shadow-none col-span-2 max-lg:col-span-4 max-xl:pt-[140px] max-[710px]:pt-[72px] pt-[72px] pb-8 mb-4 max-[710px]:mb-12 flex flex-col gap-8">
              {children}
            </Card>
            {/* for RightSideMenu */}
            <div></div>
          </div>
          <div className="bg-default-100 fixed top-0 left-0 w-full h-[180px]"></div>
          <div className="fixed h-[100vh] w-[100vw] pointer-events-none left-0 top-0 pl-4 max-xl:pr-4 pr-8">
            <div className="w-full h-full flex flex-col gap-4">
              <Header className="max-lg:bg-white flex-shrink-0" />
              <div className="w-full h-[86%] grid grid-cols-4 gap-4">
                <LeftSideMenu className="max-lg:hidden" categories={categories} />
                <ContentHead />
                <RightSideMenu className="max-lg:hidden" />
              </div>
            </div>
          </div>
          <Footer />
          <ProductModal />
          <NewAddressPanel />
          <NewOrderModal />
          <CustomerOrdersModal />
          <OrderModal />
          {/* <Cart /> */}
          {/* <Chat /> */}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
