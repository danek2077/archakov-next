import { Ingredient } from "@prisma/client";

import { axios_instance } from "../../../shared/api/instance";
import { ApiRoutes } from "@/shared/constants/api-routes";

export const GetAllIngredients = async () => {
  const { data } = await axios_instance.get<Ingredient[]>(
    ApiRoutes.INGREDIENTS
  );
  return data;
};
