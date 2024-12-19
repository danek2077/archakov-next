import { Ingredient } from "@prisma/client";
import { ApiRoutes } from "../constants";
import { axios_instance } from "../instance";

export const GetAllIngredients = async () => {
  const { data } = await axios_instance.get<Ingredient[]>(
    ApiRoutes.INGREDIENTS
  );
  return data;
};
