import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddLunchers from '../../screens/addLunchers';
import AllLunchers from '../../screens/allLunchers';
import DistributeCash from '../../screens/distributeCash';
import Home from '../../screens/Home';
import SubtractPayment from '../../screens/SubtractPay';
import TodayLunchers from '../../screens/todayLunchers';
import SplashScreen from '../../screens/Splash';

const Stack = createStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AllLunchers" component={AllLunchers} />
      <Stack.Screen name="AddLunchers" component={AddLunchers} />
      <Stack.Screen name="DistributeCash" component={DistributeCash} />
      <Stack.Screen name="SubtractPayment" component={SubtractPayment} />
      <Stack.Screen name="TodayLunchers" component={TodayLunchers} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
    </Stack.Navigator>
  );
}
