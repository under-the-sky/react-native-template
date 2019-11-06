/* eslint-disable react-native/no-inline-styles */
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../pages/home';
import SettingsScreen from '../pages/setting';

const TabNavigator = createBottomTabNavigator({
  Home: {screen: HomeScreen},
  Settings: {screen: SettingsScreen},
});

export default createAppContainer(TabNavigator);
