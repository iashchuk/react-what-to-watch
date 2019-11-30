import { put, apply } from "redux-saga/effects";
import { api } from "../../../../api";
import { fillUser, authenticate } from "../../actions";

export function* loginWorker({ payload: credentials }) {
  try {
    const response = yield apply(api, api.auth.login, [credentials]);

    if (response.status !== 200) {
      throw new Error(`on fetch news`);
    }

    yield put(fillUser(response.data));
    yield put(authenticate());
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message, `→ logins worker`);
  }
}
