import React from "react";
import { pizza_data_type } from "../widgets/main/ui/RightMain";
import { ProductsGroup } from "./products-group";
import { Button, Title } from "../ui";
import { Plus } from "lucide-react";

interface Props {
  className?: string;
  title: string;
  pizzas_data: pizza_data_type[];
}

export const FilterUi: React.FC<Props> = ({
  className,
  title,
  pizzas_data,
}) => {
  return (
    <div className={className}>
      <Title text={title} size={"xl"} className="font-bold" />
      <div className="w-[300px]">
        <div className="bg-orange-50 flex justify-center pt-3">
          <img
            src={
              "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif"
            }
            alt="pizza"
            width={250}
            height={250}
          />
        </div>
        <Title text={""} className="font-bold " />
        <div className="text-gray-500">{"description"}</div>
        <div className="flex justify-between mt-2">
          <div>
            от <b>{"price"} грн</b>
          </div>
          <Button variant={"secondary"}>
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </div>
      {/* {Array.from({ length: pizzas_data.length / 3 }).map((_, i) => (
        <ProductsGroup
          key={i}
          pizzas_data={[
            {
              description: pizzas_data[i].description,
              name_pizza: pizzas_data[i].name_pizza,
              price: pizzas_data[i].price,
              url: pizzas_data[i].url,
            },
            {
              description: pizzas_data[i + 1].description,
              name_pizza: pizzas_data[i + 1].name_pizza,
              price: pizzas_data[i + 1].price,
              url: pizzas_data[i + 1].url,
            },
            {
              description: pizzas_data[i + 2].description,
              name_pizza: pizzas_data[i + 2].name_pizza,
              price: pizzas_data[i + 2].price,
              url: pizzas_data[i + 2].url,
            },
          ]}
        />
      ))} */}
    </div>
  );
};
