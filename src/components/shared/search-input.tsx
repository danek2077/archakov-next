import React from "react";
import { cn } from "@/lib/utils";
import { Input } from "../ui";
import Link from "next/link";
import { useClickAway } from "react-use";
import { Ingredient } from "@prisma/client";

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [searchValue, setSearchValue] = React.useState("");
  const [focused, setFocused] = React.useState(false);
  const [resIngredients, setResIngredients] = React.useState<Ingredient[]>([]);
  const ref = React.useRef(null);
  useClickAway(ref, () => {
    setFocused(false);
  });
  const changeSearchHandler = async (event: string) => {
    setSearchValue(event);
    const res = await fetch("http://localhost:3000/api/ingredients");
    const data: Ingredient[] = await res.json();
    const data_filtered = data.filter((e) =>
      e.name.toLowerCase().includes(event.toLowerCase())
    );
    setResIngredients(data_filtered);
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
      {resIngredients.length > 0 && (
        <div
          className={cn(
            "absolute bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
            focused && "visible opacity-100 top-[60]",
            className
          )}
        >
          {resIngredients.map((product) => (
            <Link
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
