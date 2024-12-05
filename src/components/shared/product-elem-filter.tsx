"use client";
import React from "react";
import { Button, Title } from "../ui";
import { Plus } from "lucide-react";
import { pizza_data_type } from "../widgets/main/ui/RightMain";

export const ProductElemFilter: React.FC<pizza_data_type> = ({
  description,
  name_pizza,
  price,
  url,
}) => {
  return (
    <div className="w-[300px]">
      <div className="bg-orange-50 flex justify-center pt-3">
        <img src={url} alt="pizza" width={250} height={250} />
      </div>
      <Title text={name_pizza} className="font-bold " />
      <div className="text-gray-500">{description}</div>
      <div className="flex justify-between mt-2">
        <div>
          от <b>{price} грн</b>
        </div>
        <Button variant={"secondary"}>
          <Plus size={20} className="mr-1" />
          Добавить
        </Button>
      </div>
    </div>
  );
};
