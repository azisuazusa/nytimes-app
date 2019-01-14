import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../containers/Home';

const appNavigator = createStackNavigator({
  Home: { screen: Home }
});

export default createAppContainer(appNavigator);
