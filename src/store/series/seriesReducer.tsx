import {
  GET_POPULAR_SERIES,
  GET_POPULAR_SERIES_SUCCESS,
  GET_TOP_RATED_SERIES,
  GET_TOP_RATED_SERIES_SUCCESS,
  GET_SERIES_DETAILS,
  GET_SERIES_DETAILS_SUCCESS,
} from "./seriesActionTypes";

interface ISeriesState {
  popularSeries: Array<any>;
  topRatedSeries: Array<any>;
  seriesDetails: Object;
}

const initialState: ISeriesState = {
  popularSeries: [],
  topRatedSeries: [],
  seriesDetails: {},
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
        seriesDetails: action.payload,
      };
    default:
      return state;
  }
}
