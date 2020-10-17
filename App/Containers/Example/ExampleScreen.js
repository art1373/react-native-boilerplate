import React, { useEffect } from 'react';
import { Text, View, Button, ActivityIndicator } from 'react-native';
import ExampleActions from 'App/Stores/Example/Actions';
import Style from './ExampleScreenStyle';
import { ApplicationStyles, Helpers, Images, Metrics } from 'App/Theme';
import { useDispatch, useSelector } from 'react-redux';
import FastImage from 'react-native-fast-image';

const ExampleScreen = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.example);
  useEffect(() => {
    // dispatch(ExampleActions.fetchUser());
  }, []);

  return (
    <View
      style={[
        Helpers.fill,
        Helpers.rowMain,
        Metrics.mediumHorizontalMargin,
        Metrics.mediumVerticalMargin,
      ]}>
      {currentUser.userIsLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <View style={Style.logoContainer}>
            <FastImage
              style={Helpers.fullSize}
              source={Images.logo}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <Text style={Style.text}>To get started, edit App.js</Text>
          {currentUser.userErrorMessage ? (
            <Text style={Style.error}>{currentUser.userErrorMessage}</Text>
          ) : (
            <View>
              <Text style={Style.result}>
                {"I'm a fake user, my name is "}
                {currentUser.user.name}
              </Text>
              <Text style={Style.result}>
                {currentUser.liveInEurope
                  ? 'I live in Europe !'
                  : "I don't live in Europe."}
              </Text>
            </View>
          )}
          <Button
            style={ApplicationStyles.button}
            onPress={() => dispatch(ExampleActions.fetchUser())}
            title="Refresh"
          />
        </View>
      )}
    </View>
  );
};

export default ExampleScreen;
