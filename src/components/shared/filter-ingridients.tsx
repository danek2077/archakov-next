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
    const [search, setSearch] = React.useState<string>("");
    const [filterStorage, setFilterStorage] = React.useState<string[]>([]);
    const onCheckedHandler = (checked: boolean, name: string) => {
      if (checked) {
        setFilterStorage((prevState) => [...prevState, name]);
      }
      if (!checked) {
        setFilterStorage(filterStorage.filter((el) => el !== name));
      }
    };
    const getFilteredItems = () => {
      const render_elems = search
        ? items.filter((el) =>
            el.name.toLowerCase().includes(search.toLowerCase())
          )
        : items;
      console.log(render_elems);
      return (
        <div
          className={cn(
            "space-y-2 overflow-y-auto",
            search.length == 0 && "h-36"
          )}
        >
          {search.length === 0
            ? items.map((el) => (
                <FilterCheckbox
                  value={el.name}
                  text={el.name}
                  key={el.id}
                  onCheckedChange={(checked) =>
                    onCheckedHandler(checked, el.name)
                  }
                />
              ))
            : items.map((el) => {
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
      );
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
            {showAll
              ? getFilteredItems()
              : items
                  .slice(0, 4)
                  .map((el) => (
                    <FilterCheckbox
                      value={el.name}
                      text={el.name}
                      key={el.id}
                    />
                  ))}
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
        {Array.from({ length: 4 }, (_, i) => (
          <Skeleton width={200} height={25} borderRadius={8} key={i} />
        ))}
      </div>
    );
  }
};

export default FilterIngridients;
