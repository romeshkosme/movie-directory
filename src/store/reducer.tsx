import { combineReducers } from "redux";
import configurationReducer from "./configuration/configurationReducer";
import movieReducer from "./movie/movieReducer";
import peopleReducer from "./people/peopleReducer";
import seriesReducer from "./series/seriesReducer";
import genresReducer from "./genres/genresReducer";
import searchReducer from "./search/searchReducer";
const rootReducer = combineReducers({
  configuration: configurationReducer,
  movie: movieReducer,
  people: peopleReducer,
  series: seriesReducer,
  genres: genresReducer,
  search: searchReducer,
});

export default rootReducer;
