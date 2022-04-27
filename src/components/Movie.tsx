import React, { useEffect, useState } from "react";
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

function Movie(props: any) {
  const { movie_id } = useParams();
  // const [heroCss, setHeroCss] = useState({});
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
    // setHeroCss({
    //   backgroundImage: `url(${props.configuration.imageUrl}/${props.configuration.posterSize[6]}/${props.movie.backdrop_path})`,
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    //   width: "100%",
    //   height: "90vh",
    //   opacity: "0.2",
    //   position: "absolute",
    // });
    props.getMovie(movie_id);
    props.getImages(movie_id);
    props.getCredits(movie_id);
    props.getRecommendations(movie_id);
    props.getSimilarMovies(movie_id);
    props.getReviews(movie_id);
    props.getVideos(movie_id);
    props.getWatchProviders(movie_id);
  }, [movie_id]);
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
              <ul>
                {props.movie.movie.genres?.map((genre: any) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
            <div className="movie_info_vote">
              <div className="movie_info_vote_item movie_info_vote_average">
                <span>{props.movie.movie.vote_average}</span>
              </div>
              <div className="movie_info_vote_item movie_info_vote_count">
                <span>{Math.round(props.movie.movie.vote_count)}</span>
              </div>
              <div className="movie_info_vote_item movie_info_vote_popularity">
                <span>{Math.round(props.movie.movie.popularity)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="movie_content">
        <div className="movie_cast">
          <CastList casts={props.movie.cast} />
        </div>
        <div className="movie_review">
          <ReviewList reviews={props.movie.reviews} />
        </div>
        <div className="movie_recommendations">
          <MovieList title="Recommended" list={props.movie.recommendations} />
        </div>
        <div className="movie_similar">
          <MovieList title="Similar" list={props.movie.similarMovies} />
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
})(Movie);
