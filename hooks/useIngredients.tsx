import React from "react";
import { Api } from "../services/api-client";
import { Ingredient } from "@prisma/client";
export type FilterIngredient = { name: string; id: number; checked: boolean };
export const useIngrediets = () => {
  let [ingredients, setIngredients] = React.useState<FilterIngredient[]>([]);
  React.useEffect(() => {
    Api.ingredients.GetAllIngredients().then((res) =>
      setIngredients(
        res.map((el) => ({
          name: el.name,
          id: el.id,
          checked: false,
        }))
      )
    );
  }, []);
  return { ingredients,setIngredients };
};
