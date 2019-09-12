import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import HomeScreen from './pages/Home';
import ProfileScreen from './pages/Profile';

const MainStack = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

const MainNavigator = createDrawerNavigator(
  {
    Home: MainStack,
    Profile: {screen: ProfileScreen},
  },
  {
    intialRouteName: 'Home',
    navigationOptions: {
      headerMode: 'screen',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: 'white',
      },
    },
  },
);

const App = createAppContainer(MainNavigator);

export default App;

// import * as React from 'react';
// import {Text, View, Image, ScrollView, StyleSheet} from 'react-native';
// import {createAppContainer, DrawerItems, SafeAreaView} from 'react-navigation';
// import {createDrawerNavigator} from 'react-navigation-drawer';

// class Home extends React.Component {
//   static navigationOptions = {
//     title: 'Home',
//     // drawerIcon: ({focused}) => (
//     //   <Ionicons name="md-home" size={24} color={focused ? 'blue' : 'black'} />
//     // ),
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text
//           style={styles.paragraph}
//           onPress={() => {
//             this.props.navigation.navigate('Profile');
//           }}>
//           Go to profile
//         </Text>

//         <Text
//           style={styles.paragraph}
//           onPress={() => {
//             this.props.navigation.toggleDrawer();
//           }}>
//           Toggle Drawer
//         </Text>
//       </View>
//     );
//   }
// }

// class Profile extends React.Component {
//   static navigationOptions = {
//     title: 'Profile',
//     // drawerIcon: ({focused}) => (
//     //   <Ionicons name="md-person" size={24} color={focused ? 'blue' : 'black'} />
//     // ),
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text
//           style={styles.paragraph}
//           onPress={() => {
//             this.props.navigation.navigate('Home');
//           }}>
//           Go back home
//         </Text>
//       </View>
//     );
//   }
// }

// const CustomDrawerContentComponent = props => (
//   <ScrollView>
//     <SafeAreaView
//       style={styles.container}
//       forceInset={{top: 'always', horizontal: 'never'}}>
//       <DrawerItems {...props} />
//       <Image
//         style={styles.image}
//         source={{
//           uri: 'https://appjs.co/wp-content/uploads/2015/09/brent3-458x458.png',
//         }}
//       />
//     </SafeAreaView>
//   </ScrollView>
// );

// const navigator = createDrawerNavigator(
//   {
//     Home,
//     Profile,
//   },
//   {
//     // drawerType: 'back',
//     // drawerPosition: 'right',
//     // drawerWidth: 200,
//     // drawerBackgroundColor: 'orange',
//     // contentComponent: CustomDrawerContentComponent
//   },
// );

// export default createAppContainer(navigator);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   image: {
//     flex: 1,
//     height: 300,
//   },
// });
