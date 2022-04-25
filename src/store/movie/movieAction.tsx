import {
  RESET,
  GET_MOVIE,
  GET_MOVIE_SUCCESS,
  GET_POPULAR_MOVIE,
  GET_POPULAR_MOVIE_SUCCESS,
  GET_TOP_RATED_MOVIE,
  GET_TOP_RATED_MOVIE_SUCCESS,
  GET_IMAGES,
  GET_IMAGES_SUCCESS,
  GET_RECOMMENDATIONS,
  GET_RECOMMENDATIONS_SUCCESS,
  GET_SIMILAR_MOVIES,
  GET_SIMILAR_MOVIES_SUCCESS,
  GET_REVIEWS,
  GET_REVIEWS_SUCCESS,
  GET_VIDEOS,
  GET_VIDEOS_SUCCESS,
  GET_WATCH_PROVIDERS,
  GET_WATCH_PROVIDERS_SUCCESS,
  GET_CREDITS,
  GET_CREDITS_SUCCESS,
} from "./movieActionTypes";

export const reset = () => ({
  type: RESET
});

export const getMovie = (payload: any) => ({
  type: GET_MOVIE,
  payload,
});

export const getMovieSuccess = (payload: any) => ({
  type: GET_MOVIE_SUCCESS,
  payload,
});

export const getPopularMovie = (payload: any) => ({
  type: GET_POPULAR_MOVIE,
  payload,
});

export const getPopularMovieSuccess = (payload: any) => ({
  type: GET_POPULAR_MOVIE_SUCCESS,
  payload,
});

export const getTopRatedMovie = (payload: any) => ({
  type: GET_TOP_RATED_MOVIE,
  payload,
});

export const getTopRatedMovieSuccess = (payload: any) => ({
  type: GET_TOP_RATED_MOVIE_SUCCESS,
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

export const getRecommendations = (payload: any) => ({
  type: GET_RECOMMENDATIONS,
  payload,
});

export const getRecommendationsSuccess = (payload: any) => ({
  type: GET_RECOMMENDATIONS_SUCCESS,
  payload,
});

export const getSimilarMovies = (payload: any) => ({
  type: GET_SIMILAR_MOVIES,
  payload,
});

export const getSimilarMoviesSuccess = (payload: any) => ({
  type: GET_SIMILAR_MOVIES_SUCCESS,
  payload,
});

export const getReviews = (payload: any) => ({
  type: GET_REVIEWS,
  payload,
});

export const getReviewsSuccess = (payload: any) => ({
  type: GET_REVIEWS_SUCCESS,
  payload,
});

export const getVideos = (payload: any) => ({
  type: GET_VIDEOS,
  payload,
});

export const getVideosSuccess = (payload: any) => ({
  type: GET_VIDEOS_SUCCESS,
  payload,
});

export const getWatchProviders = (payload: any) => ({
  type: GET_WATCH_PROVIDERS,
  payload,
});

export const getWatchProvidersSuccess = (payload: any) => ({
  type: GET_WATCH_PROVIDERS_SUCCESS,
  payload,
});

export const getCredits = (payload: any) => ({
  type: GET_CREDITS,
  payload,
});

export const getCreditsSuccess = (payload: any) => ({
  type: GET_CREDITS_SUCCESS,
  payload,
});