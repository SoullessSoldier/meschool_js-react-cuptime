import { Product } from "./Product";

const products = [
  {
    id: 0,
    title: "Кокосовая матча",
    image: "img/tea_bag01.jpeg",
    price: 390,
  },
  {
    id: 1,
    title: "Зеленый индонезийский чай",
    image: "img/tea_bag02.jpeg",
    price: 340,
  },
  {
    id: 2,
    title: "Черный чай из Эфиопии",
    image: "img/tea_bag03.jpeg",
    price: 380,
  },
  {
    id: 3,
    title: "Черный чай из Калифорнии",
    image: "img/tea_bag04.jpeg",
    price: 360,
  },
  {
    id: 4,
    title: "Органическая веганская матча",
    image: "img/tea_bag05.jpeg",
    price: 400,
  },
  {
    id: 5,
    title: "Чай черный Лакандона",
    image: "img/tea_bag06.jpeg",
    price: 0,
  },
];

export const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <h2 className="products__title">Чай</h2>
        <ul className="products__list">
          {products.map((item) => (
            <Product key={item.id} data={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};
