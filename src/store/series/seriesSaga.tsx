import { put, takeEvery, all, fork } from "redux-saga/effects";
import axios from "axios";
import {
  GET_POPULAR_SERIES,
  GET_TOP_RATED_SERIES,
  GET_SERIES_DETAILS,
} from "./seriesActionTypes";
import {
  getPopularSeriesSuccess,
  getTopRatedSeriesSuccess,
  getSeriesDetailsSuccess,
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

export function* watchGetPopularSeries() {
  yield takeEvery(GET_POPULAR_SERIES, getPopularSeries);
}

export function* watchGetTopRatedSeries() {
  yield takeEvery(GET_TOP_RATED_SERIES, getTopRatedSeries);
}

export function* watchGetSeriesDetails() {
  yield takeEvery(GET_SERIES_DETAILS, getSeriesDetails);
}

export default function* SeriesSaga() {
  yield all([
    fork(watchGetPopularSeries),
    fork(watchGetTopRatedSeries),
    fork(watchGetSeriesDetails),
  ]);
}
