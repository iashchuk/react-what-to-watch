import { put, apply } from "redux-saga/effects";
import Cookies from "js-cookie";
import { api } from "../../../../api";
import { fillUser, authenticate, emitAuthError } from "../../actions";

export function* loginWorker({ payload: credentials }) {
  try {
    yield put(emitAuthError(null));

    const response = yield apply(api, api.auth.login, [credentials]);

    if (response.status !== 200) {
      throw new Error(`on fetch news`);
    }
    yield put(fillUser(response.data));
    yield put(authenticate());
    Cookies.set(`authTokenLocal`, `dGVzdEB0ZXN0LnJ1`, { expires: 7 });
  } catch (error) {
    const loginError = (error.response && error.response.data) || {};
    yield put(emitAuthError(loginError.error || error.message));
  }
}
