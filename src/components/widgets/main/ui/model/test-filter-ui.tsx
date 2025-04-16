import { FilterCheckbox } from "@/components/shared/filter-checkbox";
import React, { Dispatch, SetStateAction } from "react";
import { FilterIngredient } from "../../../../../../hooks/useIngredients";

type Props = {
  items: FilterIngredient[];
  setItems: Dispatch<SetStateAction<FilterIngredient[]>>;
};
export const TestFilterUi = ({ items, setItems }: Props) => {
  const onCheckedHandler = (checked: boolean, name: string) => {
    setItems((prev) =>
      prev.map((el) => (el.name === name ? { ...el, checked } : el))
    );
  };

  return (
    <div className="space-y-2 mt-2">
      {items.map((el) => (
        <FilterCheckbox
          value={el.name}
          text={el.name}
          key={el.id}
          checked={el.checked}
          onCheckedChange={(checked) => onCheckedHandler(checked, el.name)}
        />
      ))}
    </div>
  );
};
