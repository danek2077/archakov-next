"use client";
import { create } from "zustand";

type Store = {
  category_state: string;
  category_change: (category: string) => void;
};

export const useCategoryStore = create<Store>()((set) => ({
  category_state: "",
  category_change: (category) => set({ category_state: category }),
}));
