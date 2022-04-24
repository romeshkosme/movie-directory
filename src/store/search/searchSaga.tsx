import { put, takeEvery, all, fork } from "redux-saga/effects";
import axios from "axios";
import {
  MULTI_SEARCH,
  SEARCH_MOVIES,
  SEARCH_PEOPLE,
  SEARCH_TV_SHOWS,
} from "./searchActionTypes";
import {
  multiSearchSuccess,
  searchMoviesSuccess,
  searchPeopleSuccess,
  searchTvShowsSuccess,
} from "./searchAction";

function* multiSearch({ payload }: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/search/multi?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US&query=${payload}&page=1&include_adult=false`,
    });
    console.log(response.data.results);
    if (response) {
      yield put(multiSearchSuccess(response.data.results));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}
function* searchMovies({ payload }: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/search/movie?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US&query=${payload}&page=1&include_adult=false`,
    });
    if (response) {
      yield put(searchMoviesSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}
function* searchTvShow({ payload }: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/search/tv?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US&query=${payload}&page=1&include_adult=false`,
    });
    if (response) {
      yield put(searchTvShowsSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}
function* searchProple({ payload }: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/search/person?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US&query=${payload}&page=1&include_adult=false`,
    });
    if (response) {
      yield put(searchPeopleSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

export function* watchMultiSearch() {
  yield takeEvery(MULTI_SEARCH, multiSearch);
}
export function* watchSearchMovies() {
  yield takeEvery(SEARCH_MOVIES, searchMovies);
}
export function* watchSearchTvShows() {
  yield takeEvery(SEARCH_TV_SHOWS, searchTvShow);
}
export function* watchSearchPeople() {
  yield takeEvery(SEARCH_PEOPLE, searchProple);
}

function* searchSaga() {
  yield all([
    fork(watchMultiSearch),
    fork(watchSearchMovies),
    fork(watchSearchTvShows),
    fork(watchSearchPeople),
  ]);
}

export default searchSaga;
