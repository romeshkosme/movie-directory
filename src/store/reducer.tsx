import { combineReducers } from "redux";
import configurationReducer from "./configuration/configurationReducer";
import movieReducer from "./movie/movieReducer";
import peopleReducer from "./people/peopleReducer";
import seriesReducer from "./series/seriesReducer";
const rootReducer = combineReducers({
  configuration: configurationReducer,
  movie: movieReducer,
  people: peopleReducer,
  series: seriesReducer,
});

export default rootReducer;
