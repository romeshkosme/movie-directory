import { put, takeEvery, all, fork } from "redux-saga/effects";
import axios from "axios";
import { GET_CREDITS } from "./peopleActionTypes";
import { getCreditsSuccess } from "./peopleAction";

function* getCredits({ payload }: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/movie/${payload}/credits?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US&page=1`,
    });
    if (response) {
      yield put(getCreditsSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

export function* watchGetCredits() {
  yield takeEvery(GET_CREDITS, getCredits);
}

function* creditSaga() {
  yield all([fork(watchGetCredits)]);
}

export default creditSaga;
