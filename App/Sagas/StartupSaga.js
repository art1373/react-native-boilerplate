import { put } from 'redux-saga/effects';
import ExampleActions from 'App/Stores/Example/Actions';
import NavigationService from 'App/Services/NavigationService';
import Strings from '../Values/Strings';

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* startup() {
  yield put(ExampleActions.fetchUser());

  // When those operations are finished we redirect to the main screen
  NavigationService.navigateAndReset(Strings.Routes.HOME_SCREEN);
}
