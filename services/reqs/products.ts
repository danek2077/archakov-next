import { Product } from "@prisma/client";
import { axios_instance } from "../instance";
import { ApiRoutes } from "../constants";

export const GetAllProducts = async (query: string): Promise<Product[]> => {
  const { data } = await axios_instance.get<Product[]>(
    ApiRoutes.SEARCH_PRODUCTS,
    {
      params: { query },
    }
  );
  return data;
};
