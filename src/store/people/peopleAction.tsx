import { GET_CREDITS, GET_CREDITS_SUCCESS } from "./peopleActionTypes";

export const getCredits = (payload: any) => ({
  type: GET_CREDITS,
  payload,
});

export const getCreditsSuccess = (payload: any) => ({
  type: GET_CREDITS_SUCCESS,
  payload,
});
