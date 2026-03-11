import { FilterIngredient, Ingredient } from "../model/types";

export const toFilterIngredients = (
  ingredients: Ingredient[]
): FilterIngredient[] =>
  ingredients.map((ingredient) => ({
    id: ingredient.id,
    name: ingredient.name,
    checked: false,
  }));
