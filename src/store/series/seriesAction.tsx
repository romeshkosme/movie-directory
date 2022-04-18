import {
  GET_POPULAR_SERIES,
  GET_POPULAR_SERIES_SUCCESS,
  GET_TOP_RATED_SERIES,
  GET_TOP_RATED_SERIES_SUCCESS,
    GET_SERIES_DETAILS,
    GET_SERIES_DETAILS_SUCCESS,
} from "./seriesActionTypes";

export const getPopularSeries = () => ({
  type: GET_POPULAR_SERIES,
});

export const getPopularSeriesSuccess = (payload: any) => ({
  type: GET_POPULAR_SERIES_SUCCESS,
  payload,
});

export const getTopRatedSeries = () => ({
  type: GET_TOP_RATED_SERIES,
});

export const getTopRatedSeriesSuccess = (payload: any) => ({
  type: GET_TOP_RATED_SERIES_SUCCESS,
  payload,
});

export const getSeriesDetails = (payload: any) => ({
    type: GET_SERIES_DETAILS,
    payload,
});

export const getSeriesDetailsSuccess = (payload: any) => ({
    type: GET_SERIES_DETAILS_SUCCESS,
    payload,
});