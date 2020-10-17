import { put, call } from 'redux-saga/effects';
import ExampleActions from 'App/Stores/Example/Actions';
import { userService } from 'App/Services/UserService';

export function* fetchUser() {
  yield put(ExampleActions.fetchUserLoading());

  // Fetch user informations from an API
  const user = yield call(userService.fetchUser);
  if (user) {
    yield put(ExampleActions.fetchUserSuccess(user));
  } else {
    yield put(
      ExampleActions.fetchUserFailure(
        'There was an error while fetching user informations.',
      ),
    );
  }
}
