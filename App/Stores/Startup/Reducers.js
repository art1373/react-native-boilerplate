import { createReducer } from 'reduxsauce';
import { INITIAL_STATE } from './InitialState';
import { StartupTypes } from './Actions';

export const splashState = (state = INITIAL_STATE) => ({
  ...state,
  passSplash: true,
});
export const reducer = createReducer(INITIAL_STATE, {
  [StartupTypes.STARTUP]: splashState,
});
