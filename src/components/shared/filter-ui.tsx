"use client";
import React from "react";
import { pizza_data_type } from "../widgets/main/ui/PizzaList";
import { ProductElemFilter } from "./product-elem-filter";
import { Title } from "../ui";
import { useIntersection } from "react-use";
import { useCategoryStore } from "../../../store/store";
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
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  const { category_change } = useCategoryStore();
  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      category_change(title);
    }
  }, [intersection?.isIntersecting, title]);
  return (
    <div className={className}>
      <div ref={intersectionRef} id={title}>
        <Title text={title} size={"xl"} className="font-bold" />
      </div>
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
