import "./Card.css";
import { cardDetails } from "./cardDetails";
const Card = (props: { details: cardDetails[] }) => {
  const cardData = props.details;
  const cards = cardData.map((value: cardDetails, index) => (
    <div className="col-lg-3 col-md-4 col-sm-12" key={index}>
      <div className="card" style={{ width: "18rem" }}>
        <img src={value.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{value.title}</h5>
          <p className="card-text">{value.description}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  ));
  return <>{cards}</>;
};

export default Card;
