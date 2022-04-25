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

interface PeopleState {
  person: any;
  movieCredits: {
    cast: any[];
    crew: any[];
  };
  tvCredits: {
    cast: any[];
    crew: any[];
  };
  externalIds: any;
  images: Array<any>;
  taggedImages: Array<any>;
  popularPeople: Array<any>;
}

const initialState: PeopleState = {
  person: {},
  movieCredits: {
    cast: [],
    crew: [],
  },
  tvCredits: {
    cast: [],
    crew: [],
  },
  externalIds: {},
  images: [],
  taggedImages: [],
  popularPeople: [],
};

export default function peopleReducer(
  state = initialState,
  action: any
): PeopleState {
  switch (action.type) {
    case GET_DETAILS:
      return {
        ...state,
        person: {},
      };
    case GET_DETAILS_SUCCESS:
      return {
        ...state,
        person: action.payload,
      };
    case GET_MOVIE_CREDITS:
      return {
        ...state,
        movieCredits: {
          cast: [],
          crew: [],
        },
      };
    case GET_MOVIE_CREDITS_SUCCESS:
      return {
        ...state,
        movieCredits: action.payload,
      };
    case GET_TV_CREDITS:
      return {
        ...state,
        tvCredits: {
          cast: [],
          crew: [],
        },
      };
    case GET_TV_CREDITS_SUCCESS:
      return {
        ...state,
        tvCredits: action.payload,
      };
    case GET_EXTERNAL_IDS:
      return {
        ...state,
        externalIds: {},
      };
    case GET_EXTERNAL_IDS_SUCCESS:
      return {
        ...state,
        externalIds: action.payload,
      };
    case GET_IMAGES:
      return {
        ...state,
        images: [],
      };
    case GET_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.payload,
      };
    case GET_TAGGED_IMAGES:
      return {
        ...state,
        taggedImages: [],
      };
    case GET_TAGGED_IMAGES_SUCCESS:
      return {
        ...state,
        taggedImages: action.payload,
      };
    case GET_POPULAR_PEOPLE:
      return {
        ...state,
        popularPeople: [],
      };
    case GET_POPULAR_PEOPLE_SUCCESS:
      return {
        ...state,
        popularPeople: action.payload,
      };
    default:
      return state;
  }
}
