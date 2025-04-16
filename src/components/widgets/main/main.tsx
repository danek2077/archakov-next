import { Container } from "@/components/shared/container";
import { FilterCheckbox } from "@/components/shared/filter-checkbox";
import { Title } from "@/components/ui";
import React from "react";

import FilterOptions from "./ui/FilterOptions";
import PizzaList from "./ui/PizzaList";

const Main = () => {
  return (
    <Container className="flex justify-between mt-6">
      <FilterOptions />
      <PizzaList />
    </Container>
  );
};

export default Main;
