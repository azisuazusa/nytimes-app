import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../containers/Home';
import MyWebView from '../containers/MyWebView';

const appNavigator = createStackNavigator({
  Home: { screen: Home },
  MyWebView: { screen: MyWebView }
}, {
  defaultNavigationOptions: {
    header: null
  }
});

export default createAppContainer(appNavigator);
