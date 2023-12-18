"use client";
import { Product } from "@/schemas/product";
import clsx from "clsx";
import { Image } from "@nextui-org/image";
import { setModalProduct } from "@/stores/productModalStore";

interface IProductCardProps {
  image: string;
  title: string;
  description: string | string[];
  configurationTitle?: string;
  price: number;
  width?: number;
  imagePadding?: number;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div
      className={clsx(
        "relative",
        "flex",
        "flex-col",
        "gap-2",
        "cursor-pointer",
        "w-[200px]",
        "hover:text-primary"
      )}
      onClick={() => setModalProduct(product)}
    >
      <Image className="object-cover w-full" src={product.image} alt="товар" />
      <div className="p-1 flex flex-col gap-1">
        <span className="mt-[-2px] text-[18px] text-pink-600 font-semibold">{product.price}&nbsp;₽</span>
        <span className="">{product.title}</span>
      </div>
    </div>
  );
};

export default ProductCard;
