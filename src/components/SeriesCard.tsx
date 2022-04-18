import React from "react";
import { connect } from "react-redux";
import "../Assests/Styles/Series.css";

function SeriesCard(props: any) {
  return (
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
          <p>{props.overview}</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  imgUrl: state.configuration.imageUrl,
  posterSize: state.configuration.posterSize,
  // configuracion: state.configuracion,
});
export default connect(mapStateToProps, {})(SeriesCard);
