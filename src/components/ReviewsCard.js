export default function ReviewsCard(props) {

  const name = props.name;
  const image = props.image;
  const id = props.id;
  const placeHolderText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

  return (
    <div className="reviewscard">
      <img src={image} className="customeriamge" alt="Reviewer Avatar" id={id} />
      <div className="reviewcopy">
        <h3 className="customername">{name}</h3>
        <p className="customerrating">⭐️⭐️⭐️⭐️⭐️</p>
        <p className="customerreview">{placeHolderText.slice(0,79)}</p>
      </div>
    </div>
  );
};
