import React, { useEffect } from 'react';
import { AppNavigator } from 'App/Navigators/AppNavigator';
import { View } from 'react-native';
import StartupActions from 'App/Stores/Startup/Actions';
import { PropTypes } from 'prop-types';
import { Helpers } from 'App/Theme';
import { useDispatch } from 'react-redux';

const RootScreen = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(StartupActions.startup());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={Helpers.fill}>
      <AppNavigator />
    </View>
  );
};

RootScreen.propTypes = {
  startup: PropTypes.func,
};

export default RootScreen;
