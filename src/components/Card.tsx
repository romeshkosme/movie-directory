import React, { memo } from "react";
import { Link } from "react-router-dom";
import "../Assests/Styles/Card.css";

function Card(props: any) {
  return (
    <Link to={`/${props.type}/${props.id}`}>
      <div className="card">
        <div
          key={props.id}
          className="card__img"
          style={{
            backgroundImage: `url(${props.imgUrl}${props.posterSize[4]}${props.poster_path})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "8px",
          }}
        >
          <div className="card__content">
            <h3>{props.title}</h3>
            <p>
              <small>{props.overview}</small>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default memo(Card);
