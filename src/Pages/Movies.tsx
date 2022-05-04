import React, { useEffect, memo } from "react";
import "../Assests/Styles/Movies.css";
import { connect } from "react-redux";
import { getPopularMovie, getTopRatedMovie } from "../store/movie/movieAction";
import MovieList from "../components/MovieList";

function Movies(props: any) {
  useEffect(() => {
    props.getPopularMovie();
    props.getTopRatedMovie();
  }, []);
  return (
    <div className="movies">
      <MovieList title="Popular Movies" list={props.movie.popularMovies} />
      <MovieList title="Top Rated Movies" list={props.movie.topRatedMovies} />
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  movie: state.movie,
});
export default connect(mapStateToProps, { getPopularMovie, getTopRatedMovie })(
  memo(Movies)
);
