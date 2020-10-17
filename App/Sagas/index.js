import { takeLatest, all } from 'redux-saga/effects';
import { ExampleTypes } from 'App/Stores/Example/Actions';
import { StartupTypes } from 'App/Stores/Startup/Actions';
import { fetchUser } from './ExampleSaga';
import { startup } from './StartupSaga';

export default function* root() {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(ExampleTypes.FETCH_USER, fetchUser),
  ]);
}
