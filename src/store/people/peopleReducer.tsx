import { GET_CREDITS, GET_CREDITS_SUCCESS } from "./peopleActionTypes";

interface PeopleState {
  cast: Array<any>;
  crew: Array<any>;
}

const initialState: PeopleState = {
  cast: [],
  crew: [],
};

export default function peopleReducer(state = initialState, action: any) {
  switch (action.type) {
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
