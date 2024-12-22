"use client";
import { FilterCheckbox } from "@/components/shared/filter-checkbox";
import FilterIngridients from "@/components/shared/filter-ingridients";
import { Input, Title } from "@/components/ui";
import { RangeSlider } from "@/components/ui/slider";

import React from "react";
import { useIngrediets } from "../../../../../hooks/useIngredients";

const LeftMain = () => {
  const { ingredients } = useIngrediets();
  const [checkboxStrorage, setCheckboxStorage] = React.useState<string[]>([]);
  
  const func = (option: string, checked: boolean) => {
    if (checked === false) {
      setCheckboxStorage((prevState) =>
        prevState.filter((el) => el !== option)
      );
    }
    if (checked === true) {
      setCheckboxStorage((prevState) => [...prevState, option]);
    }
  };
  return (
    <div className="w-48">
      <Title text="Фильтрация" className="font-bold" size="sm" />
      <div className="mt-2 space-y-2 border-b border-gray-100 pb-4 mb-4">
        <FilterCheckbox
          text="Можно собирать"
          value="ya1"
          checked={checkboxStrorage.includes("ya1")}
          onCheckedChange={(checked) => func("ya1", checked)}
        />
        <FilterCheckbox
          text="Новинки"
          value="ya2"
          checked={checkboxStrorage.includes("ya2")}
          onCheckedChange={(checked) => func("ya2", checked)}
        />
      </div>
      <div className="border-b border-gray-100 pb-4">
        <div className="font-bold">Цена от и до:</div>
        <div className="flex space-x-2">
          <Input type="number" min={1} placeholder="1" />
          <Input type="number" max={1000} placeholder="1000" />
        </div>
        <RangeSlider max={1000} min={1} step={1} className="mt-5" />
      </div>
      <div className="mt-4 pb-4 mb-4">
        <div className="font-bold">Ингридиенты</div>
        <FilterIngridients items={ingredients} />
      </div>
    </div>
  );
};

export default LeftMain;
