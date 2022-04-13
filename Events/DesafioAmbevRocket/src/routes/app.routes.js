import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import DashboardClient from '../pages/DashboardClient';
import DashboardBar from '../pages/DashboardBar';
import ProfileClient from '../pages/ProfileClient';
import MarkerDetail from '../pages/MarkerDetail';
import ScanCode from '../pages/ScanCode';
import ChooseBarClientSignUp from '../pages/ChooseBarClientSignUp';
import OnBoarding from '../pages/OnBoarding';
import SignIn from '../pages/SignIn';
import SignUpClient from '../pages/SignUpClient';
import SignUpBar from '../pages/SignUpBar';
import ChooseAwards from '../pages/ChooseAwards';

const App = createStackNavigator();


const AppRoutes = () => {
  return(
    <NavigationContainer>
      <App.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <App.Screen name="OnBoarding" component={OnBoarding} />
        <App.Screen name="SignIn" component={SignIn} />
        <App.Screen name="SignUpClient" component={SignUpClient} />
        <App.Screen name="SignUpBar" component={SignUpBar} />
        <App.Screen name="ChooseBarClientSignUp" component={ChooseBarClientSignUp} />
        <App.Screen name="DashboardClient" component={DashboardClient} />
        <App.Screen name="DashboardBar" component={DashboardBar} />
        <App.Screen name="ProfileClient" component={ProfileClient} />
        <App.Screen name="MarkerDetail" component={MarkerDetail} />
        <App.Screen name="ScanCode" component={ScanCode} />
        <App.Screen name="ChooseAwards" component={ChooseAwards} />
      </App.Navigator>
    </NavigationContainer>
  )
  };

export default AppRoutes;
