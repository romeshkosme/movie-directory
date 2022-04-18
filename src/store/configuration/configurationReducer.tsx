import {
  GET_CONFIGURATION,
  GET_CONFIGURATION_SUCCESS,
} from "./configurationActionTypes";

export interface InitialValue {
  imageUrl: Array<string>;
  posterSize: Array<string>;
  profileSize: Array<string>;
  config: any,
}

const initialValue: InitialValue = {
  imageUrl: [],
  posterSize: [],
  profileSize: [],
  config: {}
};

export default function configurationReducer(
  state = initialValue,
  action: any
) {
  switch (action.type) {
    case GET_CONFIGURATION:
      return {
        ...state,
      };
    case GET_CONFIGURATION_SUCCESS:
      return {
        ...state,
        imageUrl: action.payload.images.secure_base_url,
        posterSize: action.payload.images.poster_sizes,
        // profileSize: action.payload.profileSize,
        config: action.payload,
      };
    default:
      return state;
  }
}
