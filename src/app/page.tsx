import { Title } from "@/components/ui";
import { Button } from "@/components/ui";
import Categories from "@/components/shared/categories";
import { Container } from "@/components/shared/container";
import Sortpop from "@/components/shared/sortpop";
import TopBar from "@/components/shared/top-bar";
import { FilterCheckbox } from "@/components/shared/filter-checkbox";
import Main from "@/components/widgets/main/main";

export default function Home() {
  return (
    <div>
      <Container>
        <Title text="Виды пицц" size="lg" className="font-extrabold mt-3" />
      </Container>
      <TopBar />
      <Main />
    </div>
  );
}
