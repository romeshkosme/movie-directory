import {
  GET_MOVIE_LIST,
  GET_MOVIE_LIST_SUCCESS,
  GET_SERIES_LIST,
  GET_SERIES_LIST_SUCCESS,
} from "./genresActionType";

export const getMovieList = () => ({
  type: GET_MOVIE_LIST,
});

export const getMovieListSuccess = (payload: any) => ({
  type: GET_MOVIE_LIST_SUCCESS,
  payload,
});

export const getSeriesList = () => ({
  type: GET_SERIES_LIST,
});

export const getSeriesListSuccess = (payload: any) => ({
  type: GET_SERIES_LIST_SUCCESS,
  payload,
});
