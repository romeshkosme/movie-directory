import React, { useEffect, memo } from "react";
import "../Assests/Styles/Home.css";
import { connect } from "react-redux";
import { getPopularMovie, getTopRatedMovie } from "../store/movie/movieAction";
import { getPopularSeries, getTopRatedSeries } from "../store/series/seriesAction";
import SeriesList from "../components/SeriesList";
import MovieList from "../components/MovieList";

function Home(props: any) {
  useEffect(() => {
    props.getPopularMovie();
    props.getTopRatedMovie();
    props.getPopularSeries();
    props.getTopRatedSeries();
  }, []);
  return (
    <div className="home">
      <div className="home__container">
        <div className="popolar__Movies">
          <div className="movies_list">
            <MovieList title="Popular Movies" list={props.movie.popularMovies} />
            <MovieList title="Top Rated Movies" list={props.movie.topRatedMovies} />
            <SeriesList title="Popular Series" list={props.series.popularSeries} />
            <SeriesList title="Top Rated Series" list={props.series.topRatedSeries} />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  movie: state.movie,
  series: state.series,
});
export default connect(mapStateToProps, {
  getPopularMovie,
  getTopRatedMovie,
  getPopularSeries,
  getTopRatedSeries,
})(memo(Home));
