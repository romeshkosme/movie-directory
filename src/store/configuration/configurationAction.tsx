import {
  GET_CONFIGURATION,
  GET_CONFIGURATION_SUCCESS,
} from "./configurationActionTypes";

export const getConfiguration = (payload: any) => ({
  type: GET_CONFIGURATION,
  payload,
});

export const getConfigurationSuccess = (payload: any) => ({
  type: GET_CONFIGURATION_SUCCESS,
  payload,
});
