import { Container } from "@/components/shared/container";
import { FilterCheckbox } from "@/components/shared/filter-checkbox";
import { Title } from "@/components/ui";
import React from "react";
import LeftMain from "./ui/LeftMain";
import RightMain from "./ui/RightMain";

const Main = () => {
  return (
    <Container className="flex justify-between mt-6">
      <LeftMain />
      <RightMain />
    </Container>
  );
};

export default Main;
