import React from "react";
import { Api } from "../services/api-client";
import { Ingredient } from "@prisma/client";
export type FilterIngridient = { name: string; id: number }[];
export const useIngrediets = () => {
  let [ingredients, setIngredients] = React.useState<FilterIngridient>([]);
  React.useEffect(() => {
    Api.ingredients.GetAllIngredients().then((res) =>
      setIngredients(
        res.map((el) => ({
          name: el.name,
          id: el.id,
        }))
      )
    );
  }, []);
  return { ingredients };
};
