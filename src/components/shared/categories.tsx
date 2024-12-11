'use client'
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import React from "react";
import { useCategoryStore } from "../../../store/store";

const Categories = () => {
  const category_elements = [
    { id: 0, name: "Все" },
    { id: 1, name: "Комбо" },
    { id: 2, name: "Острые" },
    { id: 3, name: "Вегатарианские" },
    { id: 4, name: "С курицей" },
    { id: 5, name: "Ещё" },
  ];
  const {category_state} = useCategoryStore()
  return (
    <div className="inline-flex bg-gray-50 rounded-2xl p-1">
      {category_elements.map((el, i) => (
        <a
          href={`/#${el.name}`}
          key={i}
          className={cn(
            "px-6 py-2",
            category_state.toLowerCase() === el.name.toLowerCase() &&
              "bg-white rounded-2xl text-primary shadow-md shadow-gray-200"
          )}
        >
          {el.name}
        </a>
      ))}
    </div>
  );
};

export default Categories;
