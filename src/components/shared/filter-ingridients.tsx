import React from "react";
import { FilterCheckbox } from "./filter-checkbox";
import { Button, Checkbox, Input } from "../ui";
import { cn } from "@/lib/utils";

const FilterIngridients = () => {
  const items = [
    "Сырный соус",
    "Моцарелла",
    "Чеснок",
    "Солёные огурчики",
    "Красный лук",
    "Томаты",
    "Космик",
    "Ручник",
    "Медовик",
    "Папаутэ",
  ];
  if (items.length > 4) {
    const [showAll, setShowAll] = React.useState<boolean>(false);
    const [search, setSearch] = React.useState("");
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
            {!showAll &&
              items
                .slice(0, 4)
                .map((el, i) => (
                  <FilterCheckbox value={el} text={el} key={i} />
                ))}
            {showAll && (
              <div
                className={cn(
                  "space-y-2 overflow-y-auto",
                  search.length == 0 && "h-36"
                )}
              >
                {search.length === 0 &&
                  items.map((el, i) => (
                    <FilterCheckbox value={el} key={i} text={el} />
                  ))}
                {search.length !== 0 &&
                  items.map((el, i) => {
                    if (el.toLowerCase().includes(search.toLowerCase())) {
                      return <FilterCheckbox value={el} key={i} text={el} />;
                    }
                  })}
              </div>
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
  } else {
    return (
      <div>
        {items.map((el, i) => (
          <FilterCheckbox value={el} text={el} key={i} />
        ))}
        ;
      </div>
    );
  }
};

export default FilterIngridients;
