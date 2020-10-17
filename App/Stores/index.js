import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from 'App/Sagas';
import { persistReducer } from 'redux-persist';
import { reducer as ExampleReducer } from './Example/Reducers';
import { reducer as StartUp } from './Startup/Reducers';
import { reducer as Authentication } from './Authentication/Reducers';
import storage from '@react-native-community/async-storage';

//Add a nested state of reducer for rehydrated
const startUpPersistConfig = {
  key: 'startUp',
  storage: storage,
  blacklist: ['passSplash'],
};

export default () => {
  const rootReducer = combineReducers({
    example: ExampleReducer,
    startUp: persistReducer(startUpPersistConfig, StartUp),
    auth: Authentication,
  });

  return configureStore(rootReducer, rootSaga);
};
