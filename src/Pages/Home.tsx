import React, { useEffect, useState } from "react";
import "../Assests/Styles/Home.css";
import List from "../components/List";
import { connect } from "react-redux";
import { getPopularMovie, getTopRatedMovie } from "../store/movie/movieAction";
import { getPopularSeries } from "../store/series/seriesAction";
import SeriesList from "../components/SeriesList";

function Home(props: any) {
  useEffect(() => {
    props.getPopularMovie();
    props.getTopRatedMovie();
    props.getPopularSeries();
  }, []);
  return (
    <div className="home">
      <div className="home__container">
        <div className="popolar__Movies">
          <div className="movies_list">
            <List title="Popular Movies" list={props.movie.popularMovies} />
            <List title="Top Rated Movies" list={props.movie.topRatedMovies} />
            <SeriesList title="Popular Series" list={props.series.popularSeries} />
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
})(Home);
