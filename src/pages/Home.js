import React from 'react';
import {Button, View} from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Home',
    headerMode: 'screen',
    headerLeft: (
      <Button
        onPress={() => navigation.navigate('DrawerOpen')}
        title="="
        color="#000"
      />
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
      </View>
    );
  }
}

export default HomeScreen;
