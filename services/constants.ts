import { apiRoutes } from "@/shared/api/routes";

export const ApiRoutes = {
  SEARCH_PRODUCTS: apiRoutes.searchProducts,
  INGREDIENTS: apiRoutes.ingredients,
} as const;
