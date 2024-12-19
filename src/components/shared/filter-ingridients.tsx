import React from "react";
import { FilterCheckbox } from "./filter-checkbox";
import { Button, Checkbox, Input } from "../ui";
import { cn } from "@/lib/utils";
import { FilterIngridient } from "../../../hooks/useIngredients";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
type Props = { items: FilterIngridient };
const FilterIngridients: React.FC<Props> = ({ items }) => {
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
                .map((el) => (
                  <FilterCheckbox value={el.name} text={el.name} key={el.id} />
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
                    <FilterCheckbox
                      value={el.name}
                      text={el.name}
                      key={el.id}
                    />
                  ))}
                {search.length !== 0 &&
                  items.map((el, i) => {
                    if (el.name.toLowerCase().includes(search.toLowerCase())) {
                      return (
                        <FilterCheckbox
                          value={el.name}
                          text={el.name}
                          key={el.id}
                        />
                      );
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
        {Array.from({ length: 4 }, (_,i) => (
          <Skeleton width={200} height={25} borderRadius={8} key={i}/>
        ))}
      </div>
    );
  }
};

export default FilterIngridients;
