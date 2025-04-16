"use client";
import { FilterCheckbox } from "@/components/shared/filter-checkbox";
import FilterIngredients from "@/components/shared/filter-ingredients";
import { Input, Title } from "@/components/ui";
import { RangeSlider } from "@/components/ui/slider";

import React from "react";
import {
  FilterIngredient,
  useIngrediets,
} from "../../../../../hooks/useIngredients";
import { TestFilterUi } from "./model/test-filter-ui";

const FilterOptions = () => {
  const { ingredients, setIngredients } = useIngrediets();

  const [pizzaType, setPizzaType] = React.useState<FilterIngredient[]>([
    { id: 1, name: "Тонкое", checked: false },
    { id: 2, name: "Жир", checked: false },
  ]);
  const [sizesType, setSizesType] = React.useState<FilterIngredient[]>([
    { id: 1, name: "20 cм", checked: false },
    { id: 2, name: "30 см", checked: false },
  ]);
  const [slideStorage, setSlideStorage] = React.useState<number[]>([1, 1000]);

  return (
    <div className="w-48">
      <Title text="Фильтрация" className="font-bold" size="sm" />

      <div className="mt-2 border-b border-gray-100 pb-4 mb-4">
        <TestFilterUi items={sizesType} setItems={setSizesType} />
      </div>

      <div className="mt-2 border-b border-gray-100 pb-4 mb-4">
        <TestFilterUi items={pizzaType} setItems={setPizzaType} />
      </div>

      <div className="border-b border-gray-100 pb-4">
        <div className="font-bold">Цена от и до:</div>
        <div className="flex space-x-2">
          <Input type="number" min={1} placeholder="1" />
          <Input type="number" max={1000} placeholder="1000" />
        </div>
        <RangeSlider
          max={1000}
          min={1}
          step={1}
          className="mt-5"
          onValueChange={(val) => setSlideStorage(val)}
        />
      </div>

      <div className="mt-4 pb-4 mb-4">
        <div className="font-bold">Ингридиенты</div>
        <FilterIngredients items={ingredients} setItems={setIngredients} />
      </div>
    </div>
  );
};

export default FilterOptions;
