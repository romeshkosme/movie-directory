import ConfigurationSaga from "./configuration/configurationSaga";
import MovieSaga from "./movie/movieSaga";
import creditSaga from "./people/peopleSaga";
import SeriesSaga from "./series/seriesSaga";
import GenresSaga from "./genres/genresSaga";
import SearchSaga from "./search/searchSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    ConfigurationSaga(),
    MovieSaga(),
    creditSaga(),
    SeriesSaga(),
    GenresSaga(),
    SearchSaga(),
  ]);
}
