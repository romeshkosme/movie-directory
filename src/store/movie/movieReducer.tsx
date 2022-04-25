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

export interface InitialValue {
  movie: any;
  popularMovies: Array<any>;
  topRatedMovies: Array<any>;
  images: Array<any>;
  recommendations: Array<any>;
  similarMovies: Array<any>;
  reviews: Array<any>;
  videos: Array<any>;
  watchProviders: Array<any>;
  cast: Array<any>;
  crew: Array<any>;
}

const initialValue: InitialValue = {
  movie: {},
  popularMovies: [],
  topRatedMovies: [],
  images: [],
  recommendations: [],
  similarMovies: [],
  reviews: [],
  videos: [],
  watchProviders: [],
  cast: [],
  crew: [],
};

export default function movieReducer(state = initialValue, action: any) {
  switch (action.type) {
    case RESET:
      return initialValue;
    case GET_MOVIE:
      return {
        ...state,
      };
    case GET_MOVIE_SUCCESS:
      return {
        ...state,
        movie: action.payload,
      };
    case GET_POPULAR_MOVIE:
      return {
        ...state,
      };
    case GET_POPULAR_MOVIE_SUCCESS:
      return {
        ...state,
        popularMovies: action.payload,
      };
    case GET_TOP_RATED_MOVIE:
      return {
        ...state,
      };
    case GET_TOP_RATED_MOVIE_SUCCESS:
      return {
        ...state,
        topRatedMovies: action.payload,
      };
    case GET_IMAGES:
      return {
        ...state,
      };
    case GET_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.payload,
      };
    case GET_RECOMMENDATIONS:
      return {
        ...state,
      };
    case GET_RECOMMENDATIONS_SUCCESS:
      return {
        ...state,
        recommendations: action.payload.results,
      };
    case GET_SIMILAR_MOVIES:
      return {
        ...state,
      };
    case GET_SIMILAR_MOVIES_SUCCESS:
      return {
        ...state,
        similarMovies: action.payload.results,
      };
    case GET_REVIEWS:
      return {
        ...state,
      };
    case GET_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: action.payload.results,
      };
    case GET_VIDEOS:
      return {
        ...state,
      };
    case GET_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: action.payload.results,
      };
    case GET_WATCH_PROVIDERS:
      return {
        ...state,
      };
    case GET_WATCH_PROVIDERS_SUCCESS:
      return {
        ...state,
        watchProviders: action.payload.results,
      };
    case GET_CREDITS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CREDITS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cast: action.payload.cast,
        crew: action.payload.crew,
      };
    default:
      return state;
  }
}
