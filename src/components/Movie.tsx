import { memo, useEffect, useMemo } from "react";
import { connect } from "react-redux";
import {
  getMovie,
  getImages,
  getRecommendations,
  getSimilarMovies,
  getReviews,
  getVideos,
  getWatchProviders,
  reset,
} from "../store/movie/movieAction";
import { getCredits } from "../store/movie/movieAction";
import {
  // Link,
  useParams,
} from "react-router-dom";
import "../Assests/Styles/Movie.css";
import MovieList from "./MovieList";
import ReviewList from "./ReviewList";
import CastList from "./CastList";
import Genres from "./Genres";
import Vote from "./Vote";

function Movie(props: any) {
  const { movie_id } = useParams();
  useEffect(() => {
    props.getMovie(movie_id);
    props.getImages(movie_id);
    props.getCredits(movie_id);
    props.getRecommendations(movie_id);
    props.getSimilarMovies(movie_id);
    props.getReviews(movie_id);
    props.getVideos(movie_id);
    props.getWatchProviders(movie_id);
    return () => {
      props.reset();
    };
  }, []);
  useEffect(() => {
    props.getMovie(movie_id);
    props.getImages(movie_id);
    props.getCredits(movie_id);
    props.getRecommendations(movie_id);
    props.getSimilarMovies(movie_id);
    props.getReviews(movie_id);
    props.getVideos(movie_id);
    props.getWatchProviders(movie_id);
  }, [movie_id]);
  const CAST_LIST = useMemo(
    () => <CastList casts={props.movie.cast} />,
    [props.movie.cast]
  );
  const RECOMMENDATION_LIST = useMemo(
    () => <MovieList title="Recommended" list={props.movie.recommendations} />,
    [props.movie.recommendations]
  );
  const SIMILAR_LIST = useMemo(
    () => <MovieList title="Similar" list={props.movie.similarMovies} />,
    [props.movie.similarMovies]
  );
  const REVIEW_LIST = useMemo(
    () => <ReviewList reviews={props.movie.reviews} />,
    [props.movie.reviews]
  );
  return (
    <div className="movie">
      <div className="movie_hero">
        <div className="movie_hero_content">
          <div className="movie_poster">
            <img
              src={`${props.configuration.imageUrl}/${props.configuration.posterSize[6]}/${props.movie.movie.poster_path}`}
              alt=""
            />
          </div>
          <div className="movie_info">
            <div className="movie_info_title">
              <h1>{props.movie.movie.original_title}</h1>
            </div>
            <div className="movie_info_item">
              <p>{props.movie.movie.overview}</p>
            </div>
            <div className="movie_info_genre">
              <Genres 
              genres={props.movie.movie?.genres}
              />
            </div>
            <div className="movie_info_vote">
              <Vote
                voteAverage={props.movie.movie?.vote_average}
                voteCount={props.movie.movie?.vote_count}
                popularity={props.movie.movie?.popularity}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="movie_content">
        <div className="movie_cast">
          {/* <CastList casts={props.movie.cast} /> */}
          {CAST_LIST}
        </div>
        <div className="movie_review">
          {/* <ReviewList reviews={props.movie.reviews} /> */}
          {REVIEW_LIST}
        </div>
        <div className="movie_recommendations">
          {/* <MovieList title="Recommended" list={props.movie.recommendations} /> */}
          {RECOMMENDATION_LIST}
        </div>
        <div className="movie_similar">
          {/* <MovieList title="Similar" list={props.movie.similarMovies} /> */}
          {SIMILAR_LIST}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    movie: state.movie,
    configuration: state.configuration,
    credits: state.people,
  };
};
export default connect(mapStateToProps, {
  getMovie,
  getCredits,
  getImages,
  getRecommendations,
  getSimilarMovies,
  getReviews,
  getVideos,
  getWatchProviders,
  reset,
})(memo(Movie));
