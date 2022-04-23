import {
  GET_MOVIE_LIST,
  GET_MOVIE_LIST_SUCCESS,
  GET_SERIES_LIST,
  GET_SERIES_LIST_SUCCESS,
} from "./genresActionType";

interface IGenresState {
  movie: Array<any>;
  series: Array<any>;
}

const initialState: IGenresState = {
  movie: [],
  series: [],
};

export default function genresReducer(
  state = initialState,
  action: any
): IGenresState {
  switch (action.type) {
    case GET_MOVIE_LIST:
      return {
        ...state,
      };
    case GET_MOVIE_LIST_SUCCESS:
      return {
        ...state,
        movie: action.payload,
      };
    case GET_SERIES_LIST:
      return {
        ...state,
      };
    case GET_SERIES_LIST_SUCCESS:
      return {
        ...state,
        series: action.payload,
      };
    default:
      return state;
  }
}
