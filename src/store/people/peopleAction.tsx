import {
  GET_DETAILS,
  GET_DETAILS_SUCCESS,
  GET_MOVIE_CREDITS,
  GET_MOVIE_CREDITS_SUCCESS,
  GET_TV_CREDITS,
  GET_TV_CREDITS_SUCCESS,
  GET_EXTERNAL_IDS,
  GET_EXTERNAL_IDS_SUCCESS,
  GET_IMAGES,
  GET_IMAGES_SUCCESS,
  GET_TAGGED_IMAGES,
  GET_TAGGED_IMAGES_SUCCESS,
  GET_POPULAR_PEOPLE,
  GET_POPULAR_PEOPLE_SUCCESS,
} from "./peopleActionTypes";

export const getDetails = (payload: any) => ({
  type: GET_DETAILS,
  payload,
});

export const getDetailsSuccess = (payload: any) => ({
  type: GET_DETAILS_SUCCESS,
  payload,
});

export const getMovieCredits = (payload: any) => ({
  type: GET_MOVIE_CREDITS,
  payload,
});

export const getMovieCreditsSuccess = (payload: any) => ({
  type: GET_MOVIE_CREDITS_SUCCESS,
  payload,
});

export const getTvCredits = (payload: any) => ({
  type: GET_TV_CREDITS,
  payload,
});

export const getTvCreditsSuccess = (payload: any) => ({
  type: GET_TV_CREDITS_SUCCESS,
  payload,
});

export const getExternalIds = (payload: any) => ({
  type: GET_EXTERNAL_IDS,
  payload,
});

export const getExternalIdsSuccess = (payload: any) => ({
  type: GET_EXTERNAL_IDS_SUCCESS,
  payload,
});

export const getImages = (payload: any) => ({
  type: GET_IMAGES,
  payload,
});

export const getImagesSuccess = (payload: any) => ({
  type: GET_IMAGES_SUCCESS,
  payload,
});

export const getTaggedImages = (payload: any) => ({
  type: GET_TAGGED_IMAGES,
  payload,
});

export const getTaggedImagesSuccess = (payload: any) => ({
  type: GET_TAGGED_IMAGES_SUCCESS,
  payload,
});

export const getPopularPeople = (payload: any) => ({
  type: GET_POPULAR_PEOPLE,
  payload,
});

export const getPopularPeopleSuccess = (payload: any) => ({
  type: GET_POPULAR_PEOPLE_SUCCESS,
  payload,
});