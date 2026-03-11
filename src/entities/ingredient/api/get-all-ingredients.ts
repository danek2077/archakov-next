import { apiRoutes } from "@/shared/api/routes";
import { httpClient } from "@/shared/api/http-client";
import { Ingredient } from "../model/types";

export const getAllIngredients = async (): Promise<Ingredient[]> => {
  const { data } = await httpClient.get<Ingredient[]>(apiRoutes.ingredients);
  return data;
};
