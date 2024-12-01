import { Title } from "@/components/ui";
import { Button } from "@/components/ui";
import Categories from "@/components/shared/categories";
import { Container } from "@/components/shared/Container";
export default function Home() {
  return (
    <div>
      <Container>
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
        <Categories />
      </Container>
    </div>
  );
}
