"use client";
import { Avatar, Chip, Input, Listbox, ListboxItem, ScrollShadow } from "@nextui-org/react";
import { SearchIcon } from "../icons/searchIcon";
import { useEffect, useMemo, useState } from "react";
import { users } from "./data";
import { useDebounce } from "use-debounce";
import axios from "axios";
import { Product } from "@/schemas/product";
import { setModalProduct } from "@/stores/productModalStore";

const Search = ({ className }: { className?: string }) => {
  const [focused, setFocused] = useState(false);
  const [input, setInput] = useState("");
  const [debouncedInput] = useDebounce(input, 100);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!focused) {
      setInput("");
      setFilteredProducts([]);
    }
  }, [focused]);

  useEffect(() => {
    if (debouncedInput && debouncedInput.length > 2)
      axios.get("/api/products/search?text=" + debouncedInput).then((res) => setFilteredProducts(res.data));
  }, [debouncedInput]);

  return (
    <div className={`relative z-10 ${className}`}>
      <Input
        label="Поиск"
        isClearable
        placeholder="Искать в каталоге"
        radius="lg"
        className="w-full"
        value={input}
        onInput={(e) => setInput(e.target.value)}
        onFocusChange={(focused) => setTimeout(() => setFocused(focused), 300)}
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-base",
            "text-black/100 dark:text-white/90",
            "placeholder:text-default-700/80 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "bg-default-100",
            "dark:bg-default/60",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        startContent={<SearchIcon />}
      />
      {focused && filteredProducts.length > 0 && (
        <div className="bg-white w-full left-0 top-10 z-[-1] absolute border-small pt-6 py-2 rounded-small border-default-200 dark:border-default-100 shadow-lg">
          <Listbox label="Assigned to" variant="flat">
            {filteredProducts.map((product) => (
              <ListboxItem key={product.id} textValue={product.title} onClick={() => setModalProduct(product)}>
                <div className="flex gap-2 items-center">
                  <Avatar
                    alt={product.title}
                    className="flex-shrink-0"
                    src={`${process.env.NEXT_PUBLIC_S3_URL}/products/${product.id}.png`}
                  />
                  <div className="flex flex-col">
                    <span className="text-base">{product.title}</span>
                    <span className="text-default-400">{product.description}</span>
                  </div>
                </div>
              </ListboxItem>
            ))}
          </Listbox>
        </div>
      )}
    </div>
  );
};

export default Search;
