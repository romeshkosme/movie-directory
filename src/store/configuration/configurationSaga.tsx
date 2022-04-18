import { put, takeEvery, all, fork } from "redux-saga/effects";
import axios from "axios";
import { getConfigurationSuccess } from "./configurationAction";
import { GET_CONFIGURATION } from "./configurationActionTypes";

function* getConfiguration({ payload }: any): any {
  try {
    const response = yield axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL_V3}/configuration?api_key=${process.env.REACT_APP_API_KEY_V3}`,
    });
    if (response) {
      yield put(getConfigurationSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

export function* watchGetConfiguration() {
  yield takeEvery(GET_CONFIGURATION, getConfiguration);
}

function* ConfigurationSaga() {
  yield all([fork(watchGetConfiguration)]);
}

export default ConfigurationSaga;
