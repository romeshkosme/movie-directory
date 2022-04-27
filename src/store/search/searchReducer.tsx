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

interface IMultiSearchAction {
  multiSearch: Array<any>;
  movies: Array<any>;
  tvShows: Array<any>;
  people: Array<any>;
}

const initialState: IMultiSearchAction = {
    multiSearch: [],
    movies: [],
    tvShows: [],
    people: [],
};
export default function searchReducer(state = initialState, action: any) {
  switch (action.type) {
    case MULTI_SEARCH:
      return {
        ...state,
        multiSearch: [],
      };
    case MULTI_SEARCH_SUCCESS:
      return {
        ...state,
        multiSearch: action.payload,
        // movies: action.payload.movies,
        // tvShows: action.payload.tvShows,
        // people: action.payload.people,
      };
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
      };
    case SEARCH_TV_SHOWS:
      return {
        ...state,
        tvShows: action.payload,
      };
    case SEARCH_TV_SHOWS_SUCCESS:
      return {
        ...state,
        tvShows: action.payload,
      };
    case SEARCH_PEOPLE:
      return {
        ...state,
        people: action.payload,
      };
    case SEARCH_PEOPLE_SUCCESS:
      return {
        ...state,
        people: action.payload,
      };
    default:
      return state;
  }
}