import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import mainNavigator from './MainTabNavigator';

// import AuthLoadingScreen from './AuthNavigator';

export default createAppContainer(
  createSwitchNavigator(
    {
      // Auth: AuthStack,
      Main: mainNavigator,
      // AuthLoading: AuthLoadingScreen
    },
    {
      initialRouteName: 'Main',
    },
  ),
);
