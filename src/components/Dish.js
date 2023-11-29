import DishCards from "./DishCards.js";

const cardmenu = {
  salad: {
    name: "Greek Salad",
    price: "$12.99",
    copy: "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with toasted garlic and rosemary croutons.",
    image: require("../icons_assets/greek salad.jpg"),
  },
  bruchetta: {
    name: "Bruschetta",
    price: "$5.99",
    copy: "Our Bruschetta is made from grilled bread that has been meared with garlic and seasoned with salt, pepper, and olive oil, then topped with rich tomato and aromatic basil.",
    image: require("../icons_assets/bruschetta.jpg"),
  },
  lemonCake: {
    name: "Lemon Cake",
    price: "$12.99",
    copy: "This comes straight from Grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: require("../icons_assets/lemon dessert.jpg"),
  },
};

export default function Dish() {
  return (
    <div id="dish">
      <DishCards dish={cardmenu.salad} />
      <DishCards dish={cardmenu.bruchetta} />
      <DishCards dish={cardmenu.lemonCake} />
    </div>
  );
};
