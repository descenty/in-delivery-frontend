import { Category } from "@/schemas/category";
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
    title: "Молоко, сыр",
    image: "catalog/milk.png",
    subcategories: [
      {
        slug: "fresh-cheese",
        title: "Свежий сыр",
        description: "Мягкие, не выдержанные сыры, такие как рикотта, панир, фета и кесо фреско",
      },
      {
        slug: "hard-cheese",
        title: "Твердый сыр",
        description: "Выдержанные твердые сыры, такие как чеддер, Гауда, Пармиджано-Реджано и Грюйер",
      },
      {
        slug: "blue-cheese",
        title: "Голубой сыр",
        description: "Созревшие с плесенью сорта, включая Рокфор, Стилтон, датский голубой и горгонзолу",
      },
      {
        slug: "soft-ripened-cheese",
        title: "Сыр мягкой спелости",
        description: "Сыры поверхностной спелости со съедобной кожурой, такие как Бри и Камамбер",
      },
      {
        slug: "processed-cheese",
        title: "Плавленый сыр",
        description: "Готовые к употреблению нарезанные или намазываемые плавленые сырные продукты",
      },
      {
        slug: "cottage-cheese",
        title: "Творог",
        description:
          "Простокваша, которую процеживают для удаления сыворотки, в результате чего получаются небольшие кусочки или творожная масса в жидкая среда, называемая творогом.",
      },
      {
        slug: "yogurt",
        title: "Йогурт",
        description:
          "Густой кисломолочный продукт, полученный путем превращения лактозы в молочную кислоту бактериальной культурой в свежем молоке",
      },
      {
        slug: "butter",
        title: "Сливочное масло",
        description:
          "Производится путем взбивания сливок до тех пор, пока они не разделятся на твердый молочный жир и жидкую пахту",
      },
      {
        slug: "kefir",
        title: "Кефир",
        description:
          "Кисломолочный напиток, похожий на йогурт, содержащий пробиотики, необходимые для здоровья кишечника",
      },
      {
        slug: "sour-cream",
        title: "Сметана",
        description:
          "Производится путем ферментации жирных сливок с использованием бактериальных культур, что придает им более острый вкус и густую текстуру",
      },
    ],
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
