import {
  MULTI_SEARCH,
  MULTI_SEARCH_SUCCESS,
  SEARCH_MOVIES,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_TV_SHOWS,
  SEARCH_TV_SHOWS_SUCCESS,
  SEARCH_PEOPLE,
  SEARCH_PEOPLE_SUCCESS,
} from "./searchActionTypes";

export const multiSearch = (payload: string) => ({
  type: MULTI_SEARCH,
  payload,
});

export const multiSearchSuccess = (payload: any) => ({
  type: MULTI_SEARCH_SUCCESS,
  payload,
});

export const searchMovies = (payload: string) => ({
  type: SEARCH_MOVIES,
  payload,
});

export const searchMoviesSuccess = (payload: any) => ({
  type: SEARCH_MOVIES_SUCCESS,
  payload,
});

export const searchTvShows = (payload: string) => ({
  type: SEARCH_TV_SHOWS,
  payload,
});

export const searchTvShowsSuccess = (payload: any) => ({
  type: SEARCH_TV_SHOWS_SUCCESS,
  payload,
});

export const searchPeople = (payload: string) => ({
    type: SEARCH_PEOPLE,
    payload,
});

export const searchPeopleSuccess = (payload: any) => ({
    type: SEARCH_PEOPLE_SUCCESS,
    payload,
});
