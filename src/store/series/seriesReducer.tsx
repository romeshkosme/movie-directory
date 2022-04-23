import {
  GET_POPULAR_SERIES,
  GET_POPULAR_SERIES_SUCCESS,
  GET_TOP_RATED_SERIES,
  GET_TOP_RATED_SERIES_SUCCESS,
  GET_SERIES_DETAILS,
  GET_SERIES_DETAILS_SUCCESS,
  GET_SERIES_CREDITS,
  GET_SERIES_CREDITS_SUCCESS,
  GET_SERIES_IMAGES,
  GET_SERIES_IMAGES_SUCCESS,
  GET_SERIES_VIDEOS,
  GET_SERIES_VIDEOS_SUCCESS,
  GET_SERIES_REVIEWS,
  GET_SERIES_REVIEWS_SUCCESS,
  GET_SERIES_RECOMMENDATIONS,
  GET_SERIES_RECOMMENDATIONS_SUCCESS,
  GET_SERIES_SIMILAR,
  GET_SERIES_SIMILAR_SUCCESS,
} from "./seriesActionTypes";

interface ISeriesState {
  popularSeries: Array<any>;
  topRatedSeries: Array<any>;
  details: Object;
  credits: {
    cast: Array<any>;
    crew: Array<any>;
  };
  images: Array<any>;
  videos: Array<any>;
  reviews: Array<any>;
  recommendations: Array<any>;
  similar: Array<any>;
}

const initialState: ISeriesState = {
  popularSeries: [],
  topRatedSeries: [],
  details: {},
  credits: {
    cast: [],
    crew: [],
  },
  images: [],
  videos: [],
  reviews: [],
  recommendations: [],
  similar: [],
};

export default function seriesReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_POPULAR_SERIES:
      return {
        ...state,
      };
    case GET_POPULAR_SERIES_SUCCESS:
      return {
        ...state,
        popularSeries: action.payload,
      };
    case GET_TOP_RATED_SERIES:
      return {
        ...state,
      };
    case GET_TOP_RATED_SERIES_SUCCESS:
      return {
        ...state,
        topRatedSeries: action.payload,
      };
    case GET_SERIES_DETAILS:
      return {
        ...state,
      };
    case GET_SERIES_DETAILS_SUCCESS:
      return {
        ...state,
        details: action.payload,
      };
    case GET_SERIES_CREDITS:
      return {
        ...state,
      };
    case GET_SERIES_CREDITS_SUCCESS:
      return {
        ...state,
        credits: action.payload,
      };
    case GET_SERIES_IMAGES:
      return {
        ...state,
      };
    case GET_SERIES_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.payload,
      };
    case GET_SERIES_VIDEOS:
      return {
        ...state,
      };
    case GET_SERIES_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: action.payload,
      };
    case GET_SERIES_REVIEWS:
      return {
        ...state,
      };
    case GET_SERIES_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: action.payload,
      };
    case GET_SERIES_RECOMMENDATIONS:
      return {
        ...state,
      };
    case GET_SERIES_RECOMMENDATIONS_SUCCESS:
      return {
        ...state,
        recommendations: action.payload,
      };
    case GET_SERIES_SIMILAR:
      return {
        ...state,
      };
    case GET_SERIES_SIMILAR_SUCCESS:
      return {
        ...state,
        similar: action.payload,
      };
    default:
      return state;
  }
}
