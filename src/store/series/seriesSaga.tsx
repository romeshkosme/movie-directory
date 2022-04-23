import { put, takeEvery, all, fork } from "redux-saga/effects";
import axios from "axios";
import {
  GET_POPULAR_SERIES,
  GET_TOP_RATED_SERIES,
  GET_SERIES_DETAILS,
  GET_SERIES_CREDITS,
  GET_SERIES_IMAGES,
  GET_SERIES_VIDEOS,
  GET_SERIES_REVIEWS,
  GET_SERIES_RECOMMENDATIONS,
  GET_SERIES_SIMILAR,
} from "./seriesActionTypes";
import {
  getPopularSeriesSuccess,
  getTopRatedSeriesSuccess,
  getSeriesDetailsSuccess,
  getSeriesCreditsSuccess,
  getSeriesImagesSuccess,
  getSeriesVideosSuccess,
  getSeriesReviewsSuccess,
  getSeriesRecommendationsSuccess,
  getSeriesSimilarSuccess,
} from "./seriesAction";

function* getPopularSeries({ payload }: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/tv/popular?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US&page=1`,
      data: payload,
    });
    if (response) {
      yield put(getPopularSeriesSuccess(response.data.results));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

function* getTopRatedSeries({ payload }: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US&page=1`,
      data: payload,
    });
    if (response) {
      yield put(getTopRatedSeriesSuccess(response.data.results));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

function* getSeriesDetails({ payload }: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/tv/${payload}?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US&page=1`,
      data: payload,
    });
    if (response) {
      yield put(getSeriesDetailsSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

function* getSeriesCredits({ payload }: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/tv/${payload}/credits?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US&page=1`,
      data: payload,
    });
    if (response) {
      yield put(getSeriesCreditsSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

function* getSeriesImages({ payload }: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/tv/${payload}/images?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US&page=1`,
      data: payload,
    });
    if (response) {
      yield put(getSeriesImagesSuccess(response.data.results));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

function* getSeriesVideos({ payload }: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/tv/${payload}/videos?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US&page=1`,
      data: payload,
    });
    if (response) {
      yield put(getSeriesVideosSuccess(response.data.results));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

function* getSeriesReviews({ payload }: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/tv/${payload}/reviews?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US&page=1`,
      data: payload,
    });
    if (response) {
      yield put(getSeriesReviewsSuccess(response.data.results));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

function* getSeriesRecommendations({ payload }: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/tv/${payload}/recommendations?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US&page=1`,
      data: payload,
    });
    if (response) {
      yield put(getSeriesRecommendationsSuccess(response.data.results));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

function* getSeriesSimilar({ payload }: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/tv/${payload}/similar?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US&page=1`,
      data: payload,
    });
    if (response) {
      yield put(getSeriesSimilarSuccess(response.data.results));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

export function* watchGetPopularSeries() {
  yield takeEvery(GET_POPULAR_SERIES, getPopularSeries);
}

export function* watchGetTopRatedSeries() {
  yield takeEvery(GET_TOP_RATED_SERIES, getTopRatedSeries);
}

export function* watchGetSeriesDetails() {
  yield takeEvery(GET_SERIES_DETAILS, getSeriesDetails);
}
export function* watchGetSeriesCredits() {
  yield takeEvery(GET_SERIES_CREDITS, getSeriesCredits);
}
export function* watchGetSeriesImages() {
  yield takeEvery(GET_SERIES_IMAGES, getSeriesImages);
}
export function* watchGetSeriesVideos() {
  yield takeEvery(GET_SERIES_VIDEOS, getSeriesVideos);
}
export function* watchGetSeriesReviews() {
  yield takeEvery(GET_SERIES_REVIEWS, getSeriesReviews);
}
export function* watchGetSeriesRecommendations() {
  yield takeEvery(GET_SERIES_RECOMMENDATIONS, getSeriesRecommendations);
}
export function* watchGetSeriesSimilar() {
  yield takeEvery(GET_SERIES_SIMILAR, getSeriesSimilar);
}

export default function* SeriesSaga() {
  yield all([
    fork(watchGetPopularSeries),
    fork(watchGetTopRatedSeries),
    fork(watchGetSeriesDetails),
    fork(watchGetSeriesCredits),
    fork(watchGetSeriesImages),
    fork(watchGetSeriesVideos),
    fork(watchGetSeriesReviews),
    fork(watchGetSeriesRecommendations),
    fork(watchGetSeriesSimilar),
  ]);
}
