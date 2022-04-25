import { put, takeEvery, all, fork } from "redux-saga/effects";
import axios from "axios";
import {
  GET_POPULAR_MOVIE,
  GET_MOVIE,
  GET_IMAGES,
  GET_RECOMMENDATIONS,
  GET_SIMILAR_MOVIES,
  GET_REVIEWS,
  GET_VIDEOS,
  GET_WATCH_PROVIDERS,
  GET_TOP_RATED_MOVIE,
  GET_CREDITS,
} from "./movieActionTypes";
import {
  getPopularMovieSuccess,
  getMovieSuccess,
  getImagesSuccess,
  getRecommendationsSuccess,
  getSimilarMoviesSuccess,
  getReviewsSuccess,
  getVideosSuccess,
  getWatchProvidersSuccess,
  getTopRatedMovieSuccess,
  getCreditsSuccess,
} from "./movieAction";

function* getPopularMovie({ payload }: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/movie/popular?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US&page=1`,
      data: payload,
    });
    if (response) {
      yield put(getPopularMovieSuccess(response.data.results));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

function* getMovie({ payload }: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/movie/${payload}?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US`,
    });
    if (response) {
      yield put(getMovieSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

function* getImages({ payload }: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/movie/${payload}/images?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US`,
    });
    if (response) {
      yield put(getImagesSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

function* getRecommendations({ payload }: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/movie/${payload}/recommendations?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US`,
    });
    if (response) {
      yield put(getRecommendationsSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

function* getSimilarMovies({ payload }: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/movie/${payload}/similar?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US`,
    });
    if (response) {
      yield put(getSimilarMoviesSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

function* getMovieReviews({ payload }: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/movie/${payload}/reviews?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US`,
    });
    if (response) {
      yield put(getReviewsSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

function* getVideos({ payload }: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/movie/${payload}/videos?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US`,
    });
    if (response) {
      yield put(getVideosSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

function* getWatchProviders({ payload }: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/movie/${payload}/watch/providers?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US`,
    });
    if (response) {
      yield put(getWatchProvidersSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

function* getTopRatedMovies(): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US`,
    });
    if (response) {
      yield put(getTopRatedMovieSuccess(response.data.results));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

function* getCredits({ payload }: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/movie/${payload}/credits?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US&page=1`,
    });
    if (response) {
      yield put(getCreditsSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

export function* watchGetPopularMovie() {
  yield takeEvery(GET_POPULAR_MOVIE, getPopularMovie);
}

export function* watchGetMovie() {
  yield takeEvery(GET_MOVIE, getMovie);
}

export function* watchGetImages() {
  yield takeEvery(GET_IMAGES, getImages);
}

export function* watchGetRecommendationMovies() {
  yield takeEvery(GET_RECOMMENDATIONS, getRecommendations);
}

export function* watchGetSimilarMovies() {
  yield takeEvery(GET_SIMILAR_MOVIES, getSimilarMovies);
}

export function* watchGetReviews() {
  yield takeEvery(GET_REVIEWS, getMovieReviews);
}

export function* watchGetVideos() {
  yield takeEvery(GET_VIDEOS, getVideos);
}

export function* watchGetWatchProviders() {
  yield takeEvery(GET_WATCH_PROVIDERS, getWatchProviders);
}

export function* watchGetTopRatedMovie() {
  yield takeEvery(GET_TOP_RATED_MOVIE, getTopRatedMovies);
}

export function* watchGetCredits() {
  yield takeEvery(GET_CREDITS, getCredits);
}

function* MovieSaga() {
  yield all([
    fork(watchGetPopularMovie),
    fork(watchGetMovie),
    fork(watchGetImages),
    fork(watchGetRecommendationMovies),
    fork(watchGetSimilarMovies),
    fork(watchGetReviews),
    fork(watchGetVideos),
    fork(watchGetWatchProviders),
    fork(watchGetTopRatedMovie),
    fork(watchGetCredits),
  ]);
}

export default MovieSaga;
