import React, { Dispatch, SetStateAction } from "react";
import { FilterCheckbox } from "./filter-checkbox";
import { Button, Checkbox, Input } from "../ui";
import { cn } from "@/lib/utils";
import { FilterIngredient } from "../../../hooks/useIngredients";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
type Props = {
  items: FilterIngredient[];
  setItems: Dispatch<SetStateAction<FilterIngredient[]>>;
};
const FilterIngredients: React.FC<Props> = ({ items, setItems }) => {
  if (items.length > 4 === false) {
    return (
      <div>
        {Array.from({ length: 4 }, (_, i) => (
          <Skeleton width={200} height={25} borderRadius={8} key={i} />
        ))}
      </div>
    );
  }
  const [showAll, setShowAll] = React.useState<boolean>(false);
  const [search, setSearch] = React.useState<string>("");

  const onCheckedHandler = (checked: boolean, name: string) => {
    setItems((prev) =>
      prev.map((el) => (el.name === name ? { ...el, checked } : el))
    );
  };

  const getFilteredItems = () => {
    const render_elems = search
      ? items.filter((el) =>
          el.name.toLowerCase().includes(search.toLowerCase())
        )
      : items;
    return render_elems.map((el) => (
      <FilterCheckbox
        value={el.name}
        text={el.name}
        key={el.id}
        checked={el.checked}
        onCheckedChange={(checked) => onCheckedHandler(checked, el.name)}
      />
    ));
  };

  return (
    <div className="space-y-2 mt-2">
      {showAll && (
        <div className="mb-4 mt-1">
          <Input
            type="search"
            placeholder="Поиск..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}
      <div>
        <div className="space-y-2">
          {showAll ? (
            <div
              className={cn(
                "space-y-2 overflow-y-auto",
                search.length == 0 && "h-36"
              )}
            >
              {getFilteredItems()}
            </div>
          ) : (
            items
              .slice(0, 4)
              .map((el) => (
                <FilterCheckbox
                  value={el.name}
                  text={el.name}
                  key={el.id}
                  checked={el.checked}
                  onCheckedChange={(checked) =>
                    onCheckedHandler(checked, el.name)
                  }
                />
              ))
          )}
        </div>
        <button
          className="text-primary mt-2"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Скрыть" : "+ Показать всё"}
        </button>
      </div>
    </div>
  );
};

export default FilterIngredients;
