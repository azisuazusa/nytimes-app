import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../containers/Home';

const appNavigator = createStackNavigator({
  Home: { screen: Home }
}, {
  defaultNavigationOptions: {
    header: null
  }
});

export default createAppContainer(appNavigator);
