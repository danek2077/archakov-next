# FSD: как разложена сущность `ingredient` в проекте

Ниже — практический пример, как раскладывать сущность по слоям в Feature-Sliced Design (FSD).

## Что куда положили

- `src/entities/ingredient/model/types.ts`
  - Типы сущности (`Ingredient`) и тип для UI-фильтра (`FilterIngredient`).
  - Почему здесь: в FSD слой `model` хранит доменные типы и состояние сущности.

- `src/entities/ingredient/api/get-all-ingredients.ts`
  - API-запрос `getAllIngredients`.
  - Почему здесь: слой `api` у entity — всё, что касается получения/отправки данных по этой сущности.

- `src/entities/ingredient/lib/to-filter-ingredients.ts`
  - Маппер из доменной модели в UI-формат.
  - Почему здесь: слой `lib` для чистых утилит и трансформаций, которые не должны жить внутри компонентов.

- `src/entities/ingredient/model/use-ingredients.ts`
  - Хук `useIngredients` с загрузкой и хранением состояния ингредиентов.
  - Почему здесь: это состояние уровня сущности, не конкретной страницы.

- `src/entities/ingredient/index.ts`
  - Публичный API сущности.
  - Почему здесь: потребители импортируют из одного места (`@/entities/ingredient`), а не знают внутреннюю структуру.

## Что вынесли в shared

- `src/shared/api/http-client.ts` — единый HTTP-клиент.
- `src/shared/api/routes.ts` — общие API-роуты.

Почему в `shared`: это переиспользуемая инфраструктура, не привязанная к конкретной сущности.

## Как использовать entity из других слоёв

Пример:

```ts
import { useIngredients, type FilterIngredient } from "@/entities/ingredient";
```

Правило: снаружи импортируем только из `index.ts` (public API), не из внутренних файлов entity.
