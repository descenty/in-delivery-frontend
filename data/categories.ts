import { Category } from "@/schemas/categoryDTO";
import { randomUUID } from "crypto";

const categories: Category[] = [
  {
    id: randomUUID(),
    title: "Овощи, фрукты, орехи",
    image: "catalog/fruitsVegetables.png",
  },
  {
    id: randomUUID(),
    title: "Хлеб, хлебцы, выпечка",
    image: "catalog/bread.png",
  },
  {
    id: randomUUID(),
    title: "Молоко, сыр, яйца",
    image: "catalog/milk.png",
  },
  {
    id: randomUUID(),
    title: "Мясо, птица",
    image: "catalog/meat.png",
  },
  { id: randomUUID(), title: "Колбасы, сосиски, деликатесы", image: "catalog/sausages.png" },
  { id: randomUUID(), title: "Сладости", image: "catalog/sweets.png" },
  {
    id: randomUUID(),
    title: "Алкоголь",
    image: "catalog/alcohol.png",
  },
  { id: randomUUID(), title: "Рыба, икра, дары моря", image: "catalog/fish.png" },
  { id: randomUUID(), title: "Крупы, макароны, специи", image: "catalog/groats.png" },
  { id: randomUUID(), title: "Консервы, соленья, варенье", image: "catalog/canned.png" },
  { id: randomUUID(), title: "Соусы, масло", image: "catalog/sauces.png" },
  { id: randomUUID(), title: "Вода, соки, напитки", image: "catalog/drinks.png" },
  { id: randomUUID(), title: "Чай, кофе", image: "catalog/coffee.png" },
  { id: randomUUID(), title: "Чипсы, снеки, сухофрукты", image: "catalog/snacks.png" },
  { id: randomUUID(), title: "Детское питание", image: "catalog/babyFood.png" },
  { id: randomUUID(), title: "Здоровый выбор", image: "catalog/healthy.png" },
  { id: randomUUID(), title: "Заморозка", image: "catalog/frozenFood.png" },
  { id: randomUUID(), title: "Готовая еда", image: "catalog/readyFood.png" },
];

export default categories;
