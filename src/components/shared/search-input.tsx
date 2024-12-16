import React from "react";
import { cn } from "@/lib/utils";
import { Input } from "../ui";
import Link from "next/link";
import { useClickAway } from "react-use";

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [searchValue, setSearchValue] = React.useState("");
  const [focused, setFocused] = React.useState(false);
  const ref = React.useRef(null);
  useClickAway(ref, () => {
    setFocused(false);
  });
  const changeSearchHandler = (e: string) => {
    setSearchValue(e);
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
      <div
        className={cn(
          "absolute bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
          focused && "visible opacity-100 top-[60]",
          className
        )}
      >
        <Link
          className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10"
          href={`/product/`}
        >
          <img
            className="rounded-sm h-8 w-8"
            src="https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png"
          />
          <span>12</span>
        </Link>
      </div>
    </div>
  );
};
