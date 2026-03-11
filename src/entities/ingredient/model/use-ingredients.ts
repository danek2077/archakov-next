import React from "react";
import { getAllIngredients } from "../api/get-all-ingredients";
import { FilterIngredient } from "./types";
import { toFilterIngredients } from "../lib/to-filter-ingredients";

export const useIngredients = () => {
  const [ingredients, setIngredients] = React.useState<FilterIngredient[]>([]);

  React.useEffect(() => {
    getAllIngredients().then((response) => {
      setIngredients(toFilterIngredients(response));
    });
  }, []);

  return { ingredients, setIngredients };
};
