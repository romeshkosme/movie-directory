import React, { memo } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../Assests/Styles/Series.css";

function SeriesCard(props: any) {
  return (
    <Link to={`/series/${props.id}`}>
      <div className="series__card">
        <div
          key={props.id}
          className="series__card__img"
          style={{
            backgroundImage: `url(${props.imgUrl}${props.posterSize[4]}${props.poster_path})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "8px",
          }}
        >
          <div className="series__card__content">
            <h3>{props.original_name}</h3>
            <p>
              <small>{props.overview}</small>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

const mapStateToProps = (state: any) => ({
  imgUrl: state.configuration.imageUrl,
  posterSize: state.configuration.posterSize,
});
export default connect(mapStateToProps, {})(memo(SeriesCard));
