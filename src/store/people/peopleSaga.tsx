import { put, takeEvery, all, fork } from "redux-saga/effects";
import axios from "axios";
import {
  GET_DETAILS,
  GET_MOVIE_CREDITS,
  GET_TV_CREDITS,
  GET_EXTERNAL_IDS,
  GET_IMAGES,
  GET_TAGGED_IMAGES,
  GET_POPULAR_PEOPLE,
} from "./peopleActionTypes";
import {
  getDetailsSuccess,
  getMovieCreditsSuccess,
  getTvCreditsSuccess,
  getExternalIdsSuccess,
  getImagesSuccess,
  getTaggedImagesSuccess,
  getPopularPeopleSuccess,
} from "./peopleAction";

function* getDetails({payload}: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/person/${payload}?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US&page=1`,
    });
    if (response) {
      yield put(getDetailsSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}
function* getMovieCredits({payload}: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/person/${payload}/movie_credits?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US&page=1`,
    });
    if (response) {
      yield put(getMovieCreditsSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}
function* getTvCredits({payload}: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/person/${payload}/tv_credits?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US&page=1`,
    });
    if (response) {
      yield put(getTvCreditsSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}
function* getExternalIds({payload}: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/person/${payload}/external_ids?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US&page=1`,
    });
    if (response) {
      yield put(getExternalIdsSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}
function* getImages({payload}: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/person/${payload}/images?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US&page=1`,
    });
    if (response) {
      yield put(getImagesSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}
function* getTaggedImages({payload}: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/person/${payload}/tagged_images?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US&page=1`,
    });
    if (response) {
      yield put(getTaggedImagesSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}
function* getPopular({payload}: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/person/popular?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US&page=1`,
    });
    if (response) {
      yield put(getPopularPeopleSuccess(response.data.results));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

export function* watchGetCredits() {
  yield takeEvery(GET_DETAILS, getDetails);
}
export function* watchGetMovieCredits() {
  yield takeEvery(GET_MOVIE_CREDITS, getMovieCredits);
}
export function* watchGetTvCredits() {
  yield takeEvery(GET_TV_CREDITS, getTvCredits);
}
export function* watchGetExternalIds() {
  yield takeEvery(GET_EXTERNAL_IDS, getExternalIds);
}
export function* watchGetImages() {
  yield takeEvery(GET_IMAGES, getImages);
}
export function* watchGetTaggedImages() {
  yield takeEvery(GET_TAGGED_IMAGES, getTaggedImages);
}
export function* watchGetPopular() {
  yield takeEvery(GET_POPULAR_PEOPLE, getPopular);
}

function* creditSaga() {
  yield all([
    fork(watchGetCredits),
    fork(watchGetMovieCredits),
    fork(watchGetTvCredits),
    fork(watchGetExternalIds),
    fork(watchGetImages),
    fork(watchGetTaggedImages),
    fork(watchGetPopular),
  ]);
}

export default creditSaga;
