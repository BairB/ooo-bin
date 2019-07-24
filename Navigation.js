import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator
} from 'react-navigation';
import { StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import MenuScreen1 from './screens/Menu1';
import MenuScreen2 from './screens/Menu2';
import Spisok from './screens/Spisok';
import OrderScreen from './screens/OrderScreen';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

function IconMenuItem({ tintColor, name }) {
    return <Icon name={name} size={24} style={{ color: tintColor }} />;
}

const menuStack = createStackNavigator(
    {
        Order: OrderScreen,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#FFC234',
                textAlign: 'center',
            }
        }
    }
);

const Menu1Stack = createStackNavigator (
    {
        Menu1:MenuScreen1
    }
);

const Menu2Stack = createStackNavigator (
    {
        Menu2:MenuScreen2
    }
);
const orderStack = createStackNavigator (
    {
        Or:OrderScreen
    }
);

const DrawStack = createDrawerNavigator (
    {
        Page1: {
            screen:Menu1Stack,
            navigationOptions: {
                drawerLabel: 'Menu1',
            }
        },
        Page2: {
            screen:Menu2Stack,
            navigationOptions: {
                drawerLabel: 'Menu2',
            }
        },
        Page3: {
            screen:orderStack,
            navigationOptions: {
                drawerLabel: 'Order',
            }
        },
    }
)

export default createAppContainer(
    createSwitchNavigator(
        {
            List: Spisok,
            Draw: DrawStack,
            Or: menuStack
        },
        {
            initialRouteName: 'List'
        }
    )
);
