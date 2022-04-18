import React from "react";
import "../Assests/Styles/Movies.css"
import List from "../components/List";
import { connect } from "react-redux";
import { getPopularMovie } from "../store/movie/movieAction";

function Movies(props: any) {
  return (
    <div className="movies">
      <List title="Popular Movies" list={props.movie.popularMovies} />
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  movie: state.movie,
});
export default connect(mapStateToProps, { getPopularMovie })(Movies);
