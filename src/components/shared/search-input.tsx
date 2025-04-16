import React from "react";
import { cn } from "@/lib/utils";
import { Input } from "../ui";
import Link from "next/link";
import { useClickAway, useDebounce } from "react-use";
import { Product } from "@prisma/client";
import { Api } from "../../../services/api-client";

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [searchValue, setSearchValue] = React.useState("");
  const [focused, setFocused] = React.useState(false);
  const [resProducts, setResProducts] = React.useState<Product[]>([]);
  const ref = React.useRef(null);
  useClickAway(ref, () => {
    setFocused(false);
  });
  useDebounce(
    async () => {
      const data = await Api.products.GetAllProducts(searchValue);
      setResProducts(data);
    },
    100,
    [searchValue]
  );
  const changeSearchHandler = async (event: string) => {
    setSearchValue(event);
  };
  return (
    <div className={cn(className)} ref={ref}>
      <Input
        type="search"
        placeholder="Поиск..."
        value={searchValue}
        onClick={() => setFocused(true)}
        onChange={(e) => changeSearchHandler(e.target.value)}
      />
      {resProducts.length > 0 && (
        <div
          className={cn(
            "absolute bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
            focused && "visible opacity-100 top-[60]",
            className
          )}
        >
          {resProducts.map((product) => (
            <Link
              onClick={() => {
                setFocused(false);
                setSearchValue("");
                setResProducts([]);
              }}
              key={product.id}
              className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10"
              href={`/product/${product.id}`}
            >
              <img
                className="rounded-sm h-8 w-8"
                src={product.imageUrl}
                alt={product.name}
              />
              <span>{product.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
