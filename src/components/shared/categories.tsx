import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import React from "react";

const Categories = () => {
  const category_elements = [
    "Все",
    "Мясные",
    "Острые",
    "Вегатарианские",
    "С курицей",
    "Ещё",
  ];
  const active_index = 0;
  return (
    <div className="inline-flex bg-gray-50 rounded-2xl p-1">
      {category_elements.map((el, i) => (
        <a
          href={String(i)}
          key={i}
          className={cn(
            "px-6 py-2",
            active_index === i &&
              "bg-white rounded-2xl text-primary shadow-md shadow-gray-200"
          )}
        >
          {el}
        </a>
      ))}
    </div>
  );
};

export default Categories;
