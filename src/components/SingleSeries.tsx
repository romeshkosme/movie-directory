import React, { memo, useEffect } from "react";
import "../Assests/Styles/Series.css";
import { connect } from "react-redux";
import {
  getSeriesDetails,
  getSeriesCredits,
  getSeriesImages,
  getSeriesRecommendations,
  getSeriesReviews,
  getSeriesSimilar,
  getSeriesVideos,
} from "../store/series/seriesAction";
import {
  // Link,
  useParams,
} from "react-router-dom";
import CastList from "./CastList";
import SeriesList from "./SeriesList";
import ReviewList from "./ReviewList";
import Genres from "./Genres";
import Vote from "./Vote";

function SingleSeries(props: any) {
  const { series_id } = useParams();
  useEffect(() => {
    props.getSeriesDetails(series_id);
    props.getSeriesCredits(series_id);
    props.getSeriesImages(series_id);
    props.getSeriesRecommendations(series_id);
    props.getSeriesReviews(series_id);
    props.getSeriesVideos(series_id);
    props.getSeriesSimilar(series_id);
  }, []);
  return (
    <div className="single__series">
      <div className="single__series__hero">
        <div className="single__series__hero__image">
          <img
            src={`${props.configuration.imageUrl}/${props.configuration.posterSize[6]}/${props.series.details.poster_path}`}
            alt={props.series.details?.name}
          />
        </div>
        <div className="single__series__hero__content">
          <h1 className="single__series__hero__content__title">
            {props.series.details?.original_name}
          </h1>
          <p className="single__series__hero__content__description">
            {props.series.details?.overview}
          </p>
          <div className="single__series__hero__content__genres">
            <Genres genres={props.series.details?.genres} />
          </div>
          <div className="single__series__hero__content__vote">
            <Vote
              voteAverage={props.series.details?.vote_average}
              voteCount={props.series.details?.vote_count}
              popularity={props.series.details?.popularity}
            />
          </div>
        </div>
      </div>
      <div className="single__series__content">
        <div className="single__series__content__cast">
          <CastList title="Cast" casts={props.series.credits?.cast} />
          {/* <CastList title="Similar" list={props.series.similar} /> */}
        </div>
        <div className="single__series__content__reviews">
          <ReviewList title="Reviews" list={props.series.reviews} />
        </div>
        <div className="single__series__content__recommended">
          <SeriesList title="Recommended" list={props.series.recommendations} />
          <SeriesList title="Similar" list={props.series.similar} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  series: state.series,
  configuration: state.configuration,
});
export default connect(mapStateToProps, {
  getSeriesDetails,
  getSeriesCredits,
  getSeriesImages,
  getSeriesRecommendations,
  getSeriesReviews,
  getSeriesSimilar,
  getSeriesVideos,
})(memo(SingleSeries));
