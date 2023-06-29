import React from 'react';

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const {Screen, Navigator} = createNativeStackNavigator();

import { ScreenA } from "../Screens/ScreenA";
import { ScreenB } from "../Screens/ScreenB";

export function StackRoutes(){
    return(
        <Navigator>
            <Screen
                name= 'screenA'
                component={ScreenA}
            />

            <Screen
                name= 'screenB'
                component={ScreenB}
            />

        </Navigator>
    )
}