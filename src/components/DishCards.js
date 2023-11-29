export default function DishCards(props) {
  const name = props.dish.name;
  const price = props.dish.price;
  const image = props.dish.image;
  const copy = props.dish.copy;

  return (
    <div className="dishcard">
      <img src={image} className="dishimage" />
      <div className="dishtext">
        <div className="dishhead">
          <div className="dishname"><h3>{name}</h3></div>
          <div className="dishprice">{price}</div>
        </div>
        <div className="dishcopy">{copy}</div>
        <p><a href="./order.js">Order ↣</a></p>
      </div>

    </div>
  );
};
