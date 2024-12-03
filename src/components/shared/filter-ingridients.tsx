import React from "react";
import { FilterCheckbox } from "./filter-checkbox";

const FilterIngridients = () => {
  const items = [
    "Сырный соус",
    "Моцарелла",
    "Чеснок",
    "Солёные огурчики",
    "Красный лук",
    "Томаты",
  ];
  return (
    <div className="space-y-2 mt-2">
    
      {items.map((el, i) => (
        <FilterCheckbox text={el} value={el} key={i} />
      ))}
    </div>
  );
};

export default FilterIngridients;
