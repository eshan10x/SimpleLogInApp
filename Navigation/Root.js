import React from 'react'
import PropTypes from 'prop-types'
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../Screens/LoginScreen';

const Root = ({navigation}) => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="LoginScreen" component={LoginScreen} />
        </Drawer.Navigator>
    )
}

export default Root
