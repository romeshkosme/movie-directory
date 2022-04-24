import React from "react";
import "../Assests/Styles/Search.css";
import CloseIcon from "@mui/icons-material/Close";
import { connect } from "react-redux";
import { multiSearch } from "../store/search/searchAction";

function Search(props: any) {
  const [search, setSearch] = React.useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.multiSearch(search);
  };
  const renderMovie = (movie: any) => {
    return (
      <div className="search__result__content">
        <div className="search__result__img">
          <img
            src={`${props.configuration.imageUrl}/${props.configuration.posterSize[6]}/${movie.poster_path}`}
            alt="poster"
          />
        </div>
        <div className="search__result__info">
          <div className="search__result__info__header">
            <h4>{movie.title}</h4>{" "}
            <span className="search__result__info__type">Movie</span>
          </div>
          <p>{movie.overview}</p>
        </div>
      </div>
    );
  };
  const renderTv = (tv: any) => {
    return (
      <div className="search__result__content">
        <div className="search__result__img">
          <img
            src={`${props.configuration.imageUrl}/${props.configuration.posterSize[6]}/${tv.poster_path}`}
            alt="poster"
          />
        </div>
        <div className="search__result__info">
          <div className="search__result__info__header">
            <h4>{tv.name}</h4>{" "}
            <span className="search__result__info__type">Tv Show</span>
          </div>
          <p>{tv.overview}</p>
        </div>
      </div>
    );
  };
  const renderPeople = (person: any) => {};
  return (
    <div className="search">
      <div className="search__header">
        <h2>Search</h2>
        <button onClick={() => props.closeSearch(false)}>
          <CloseIcon />
        </button>
      </div>
      <div className="search__input">
        <input
          type="text"
          placeholder="Search for a movie, series, person..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      <div className="search__result">
        {props.search.multiSearch.length > 0 &&
          props.search.multiSearch.map((item: any) => (
            <div className="search__result__item" key={item.id}>
              {item.media_type === "movie" && renderMovie(item)}
              {item.media_type === "tv" && renderTv(item)}
              {item.media_type === "person" && renderPeople(item)}
            </div>
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  search: state.search,
  configuration: state.configuration,
});
export default connect(mapStateToProps, { multiSearch })(Search);
