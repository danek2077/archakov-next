"use client";
import { FilterUi } from "@/components/shared/filter-ui";
import React from "react";
export type pizza_data_type = {
  url: string;
  name_pizza: string;
  price: number;
  description: string;
};
const RightMain = () => {
  const title = "Пиццы";
  const pizzas_data: pizza_data_type[] = [
    {
      url: "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
      name_pizza: "name1",
      price: 100,
      description:
        "Цыпленок, хуенок Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    },
    {
      url: "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
      name_pizza: "name2",
      price: 300,
      description:
        "Цыпленок, хуенок Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    },
    {
      url: "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
      name_pizza: "name2",
      price: 300,
      description:
        "Цыпленок, хуенок Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    },
    {
      url: "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
      name_pizza: "name2",
      price: 300,
      description:
        "Цыпленок, хуенок Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    },
    {
      url: "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
      name_pizza: "name2",
      price: 300,
      description:
        "Цыпленок, хуенок Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    },
    {
      url: "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
      name_pizza: "name2",
      price: 300,
      description:
        "Цыпленок, хуенок Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    },
    {
      url: "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
      name_pizza: "name2",
      price: 300,
      description:
        "Цыпленок, хуенок Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    },
  ];
  return (
    <div className="w-[1000px]">
      <FilterUi pizzas_data={pizzas_data} title={title} />
      <FilterUi pizzas_data={pizzas_data} title={title} />
    </div>
  );
};

export default RightMain;
