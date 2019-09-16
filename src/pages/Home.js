import React from 'react';
import {Button, View, Text} from 'react-native';
import Rate, {AndroidMarket} from 'react-native-rate';

class HomeScreen extends React.Component {
  state = {
    rated: false,
  };

  static navigationOptions = ({navigation}) => ({
    title: 'Home',
    headerMode: 'screen',
    headerRight: (
      <Text
        style={{color: 'blue', marginRight: 20}}
        onPress={() => {
          let options = {
            GooglePackageName: 'com.voltagecalcrn',
            OtherAndroidURL:
              'https://play.google.com/store/apps/details?id=com.voltagecalcrn',
            preferredAndroidMarket: AndroidMarket.Google,
            preferInApp: false,
            openAppStoreIfInAppFails: true,
            fallbackPlatformURL: 'http://www.mywebsite.com/myapp.html',
          };
          Rate.rate(options, success => {
            if (success) {
              // this technically only tells us if the user successfully went to the Review Page. Whether they actually did anything, we do not know.
              this.setState({rated: true});
            }
          });
        }}>
        RATE
      </Text>
    ),
  });
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Button
          title="Go to Jane's profile"
          onPress={() => navigate('Profile', {name: 'Jane'})}
        />

        <Button
          title="Open drawer"
          onPress={() => this.props.navigation.toggleDrawer()}
        />

        <Text
          style={{color: 'blue', marginRight: 20}}
          onPress={() => {
            let options = {
              GooglePackageName: 'com.voltagecalcrn',
              OtherAndroidURL:
                'https://play.google.com/store/apps/details?id=com.voltagecalcrn',
              preferredAndroidMarket: AndroidMarket.Google,
              preferInApp: false,
              openAppStoreIfInAppFails: true,
              fallbackPlatformURL: 'http://www.mywebsite.com/myapp.html',
            };
            Rate.rate(options, success => {
              if (success) {
                // this technically only tells us if the user successfully went to the Review Page. Whether they actually did anything, we do not know.
                this.setState({rated: true});
              }
            });
          }}>
          RATE
        </Text>
      </View>
    );
  }
}

export default HomeScreen;
