import { cn } from "@/lib/utils";
import React from "react";
import Categories from "./categories";
import Sortpop from "./sortpop";
import { Container } from "./container";

const TopBar = () => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10 justify-between"
      )}
    >
      <Container className="flex justify-between ">
        <Categories />
        <Sortpop />
      </Container>
    </div>
  );
};

export default TopBar;
