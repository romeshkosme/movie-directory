import {
  GET_POPULAR_SERIES,
  GET_POPULAR_SERIES_SUCCESS,
  GET_TOP_RATED_SERIES,
  GET_TOP_RATED_SERIES_SUCCESS,
  GET_SERIES_DETAILS,
  GET_SERIES_DETAILS_SUCCESS,
  GET_SERIES_CREDITS,
  GET_SERIES_CREDITS_SUCCESS,
  GET_SERIES_REVIEWS,
  GET_SERIES_REVIEWS_SUCCESS,
  GET_SERIES_IMAGES,
  GET_SERIES_IMAGES_SUCCESS,
  GET_SERIES_VIDEOS,
  GET_SERIES_VIDEOS_SUCCESS,
  GET_SERIES_RECOMMENDATIONS,
  GET_SERIES_RECOMMENDATIONS_SUCCESS,
  GET_SERIES_SIMILAR,
  GET_SERIES_SIMILAR_SUCCESS,
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

export const getSeriesCredits = (payload: any) => ({
  type: GET_SERIES_CREDITS,
  payload,
});

export const getSeriesCreditsSuccess = (payload: any) => ({
  type: GET_SERIES_CREDITS_SUCCESS,
  payload,
});

export const getSeriesReviews = (payload: any) => ({
  type: GET_SERIES_REVIEWS,
  payload,
});

export const getSeriesReviewsSuccess = (payload: any) => ({
  type: GET_SERIES_REVIEWS_SUCCESS,
  payload,
});

export const getSeriesImages = (payload: any) => ({
  type: GET_SERIES_IMAGES,
  payload,
});

export const getSeriesImagesSuccess = (payload: any) => ({
  type: GET_SERIES_IMAGES_SUCCESS,
  payload,
});

export const getSeriesVideos = (payload: any) => ({
  type: GET_SERIES_VIDEOS,
  payload,
});

export const getSeriesVideosSuccess = (payload: any) => ({
  type: GET_SERIES_VIDEOS_SUCCESS,
  payload,
});

export const getSeriesRecommendations = (payload: any) => ({
  type: GET_SERIES_RECOMMENDATIONS,
  payload,
});

export const getSeriesRecommendationsSuccess = (payload: any) => ({
  type: GET_SERIES_RECOMMENDATIONS_SUCCESS,
  payload,
});

export const getSeriesSimilar = (payload: any) => ({
  type: GET_SERIES_SIMILAR,
  payload,
});

export const getSeriesSimilarSuccess = (payload: any) => ({
  type: GET_SERIES_SIMILAR_SUCCESS,
  payload,
});