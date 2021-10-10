import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";

const CategoriesCard = (props) => {
  let history = useHistory();

  return (
    <>
      <Card className="feature-card cards mb-5">
        <Card.Body>
          <Card.Img
            className="w-50 feature-image "
            variant="top"
            src={props.image}
            roundedCircle
          />
          <Card.Title className="text-muted">{props.name}</Card.Title>
          <Card.Title className="text-muted feature-card-price">
            {props.price}
          </Card.Title>
          <p>
            <b>Tag:</b> {props.tag}
          </p>{" "}
          <p>{props.description}</p>
          <hr width="90%" />
          <div className="d-flex justify-content-around">
            <div>
              <button
                className="feature-card-btn"
                onClick={() => history.push("/AddCart")}
              >
                Details
              </button>
            </div>
            <button class="feature-card-btn">
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="10.65"
                viewBox="0 0 14 12.65"
              >
                <path
                  id="Path_39"
                  data-name="Path 39"
                  d="M7.07,10.72,7,10.789l-.077-.069C3.6,7.749,1.4,5.784,1.4,3.792A2.374,2.374,0,0,1,3.85,1.379a2.749,2.749,0,0,1,2.5,1.627h1.3a2.749,2.749,0,0,1,2.5-1.627A2.374,2.374,0,0,1,12.6,3.792C12.6,5.784,10.4,7.749,7.07,10.72ZM10.15,0A4.237,4.237,0,0,0,7,1.434,4.237,4.237,0,0,0,3.85,0,3.78,3.78,0,0,0,0,3.792c0,2.6,2.38,4.729,5.985,7.948L7,12.65l1.015-.91C11.62,8.521,14,6.39,14,3.792A3.78,3.78,0,0,0,10.15,0Z"
                  fill="#B22234"
                />
              </svg>{" "}
              Wishlist
            </button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CategoriesCard;
