import { put, takeEvery, all, fork } from "redux-saga/effects";
import axios from "axios";
import { getMovieListSuccess, getSeriesListSuccess } from "./genresAction";
import { GET_MOVIE_LIST, GET_SERIES_LIST } from "./genresActionType";

function* getMovieList(): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY_V3}`,
    });
    if (response) {
      yield put(getMovieListSuccess(response.data.genres));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

function* getSeriesList(): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/genre/tv/list?api_key=${process.env.REACT_APP_API_KEY_V3}`,
    });
    if (response) {
      yield put(getSeriesListSuccess(response.data.genres));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

export function* watchGetMovieList() {
  yield takeEvery(GET_MOVIE_LIST, getMovieList);
}
export function* watchGetSeriesList() {
  yield takeEvery(GET_SERIES_LIST, getSeriesList);
}

function* GenresSaga() {
  yield all([fork(watchGetMovieList), fork(watchGetSeriesList)]);
}

export default GenresSaga;
