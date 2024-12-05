import React from "react";
import { pizza_data_type } from "../widgets/main/ui/RightMain";
import { ProductElemFilter } from "./product-elem-filter";
import { Title } from "../ui";

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
      <div className="flex flex-wrap gap-[50px] mt-5">
        {pizzas_data.map((el, i) => (
          <ProductElemFilter
            description={el.description}
            name_pizza={el.name_pizza}
            key={i}
            price={el.price}
            url={el.url}
          />
        ))}
      </div>
    </div>
  );
};
