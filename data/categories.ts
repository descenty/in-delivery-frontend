import { Category } from "@/schemas/categoryDTO";
import { randomUUID } from "crypto";

const categories: Category[] = [
  {
    slug: "fruits-vegetables",
    title: "Овощи, фрукты, орехи",
    image: "catalog/fruitsVegetables.png",
    products: [
      {
        slug: "pomidory-rozovye",
        title: "Помидоры розовые",
        description:
          "Сладкие, сочные, ароматные помидоры розовые. Собраны в средней степени зрелости, что позволяет им сохранить свои полезные свойства и вкус. Помидоры розовые отлично подходят для приготовления салатов, соусов, супов, а также для употребления в свежем виде.",
        price: 94.23,
        image: "products/tomatoes.png",
      },
      {
        slug: "kabachki-gruntovye",
        title: "Кабачки грунтовые",
        description:
          "Кабачки грунтовые, собраны в средней степени зрелости. Имеют нежную мякоть и тонкую кожицу. Кабачки грунтовые отлично подходят для приготовления салатов, гарниров, супов, а также для употребления в свежем виде.",
        price: 127.5,
        image: "products/zucchini.avif",
      },
    ],
  },
  {
    slug: "bread",
    title: "Хлеб, хлебцы, выпечка",
    image: "catalog/bread.png",
  },
  {
    slug: "milk",
    title: "Молоко, сыр, яйца",
    image: "catalog/milk.png",
  },
  {
    slug: "meat",
    title: "Мясо, птица",
    image: "catalog/meat.png",
  },
  { slug: "sausages", title: "Колбасы, сосиски, деликатесы", image: "catalog/sausages.png" },
  { slug: "sweets", title: "Сладости", image: "catalog/sweets.png" },
  {
    slug: "alcohol",
    title: "Алкоголь",
    image: "catalog/alcohol.png",
  },
  { slug: "fish", title: "Рыба, икра, дары моря", image: "catalog/fish.png" },
  { slug: "groats", title: "Крупы, макароны, специи", image: "catalog/groats.png" },
  { slug: "canned", title: "Консервы, соленья, варенье", image: "catalog/canned.png" },
  { slug: "sauces", title: "Соусы, масло", image: "catalog/sauces.png" },
  { slug: "drinks", title: "Вода, соки, напитки", image: "catalog/drinks.png" },
  { slug: "coffee", title: "Чай, кофе", image: "catalog/coffee.png" },
  { slug: "snacks", title: "Чипсы, снеки, сухофрукты", image: "catalog/snacks.png" },
  { slug: "baby-food", title: "Детское питание", image: "catalog/babyFood.png" },
  { slug: "healthy", title: "Здоровый выбор", image: "catalog/healthy.png" },
  { slug: "frozen-food", title: "Заморозка", image: "catalog/frozenFood.png" },
  { slug: "ready-food", title: "Готовая еда", image: "catalog/readyFood.png" },
];

export default categories;
