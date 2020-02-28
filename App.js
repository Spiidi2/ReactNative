import{ createAppContainer} from'react-navigation';
import{ createBottomTabNavigator} from'react-navigation-tabs';
import Calculator from'./Calculator';
import History from'./History';
import{  Ionicons } from '@expo/vector-icons';

const AppNavigator = createBottomTabNavigator(
  {
  Calculator: {screen: Calculator},
  History: {screen: History}
},
{
  defaultNavigationOptions: ({ navigation })   => ({
    tabBarIcon: ({ focused, tintColor})   => {
      const{ routeName } = navigation.state;
      if (routeName=== 'Calculator') {
        return <Ionicons name = 'md-calculator' size={25} color={tintColor}/>;
      } else if  (routeName=== 'History') {
        return <Ionicons name = 'md-history' size={25 } color={tintColor} />;
      }
    }
  })
});

const AppContainer=  createAppContainer(AppNavigator);

export default function App() {
    return(
    <AppContainer/>
    );


}