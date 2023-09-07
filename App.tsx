import React from 'react';
import {Auth0Provider} from 'react-native-auth0';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import config from './auth0-configuration';
import {Home} from './Home';
import {Profile} from './Profile';

export type StackParamList = {
  Home: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();
const App = () => {
  return (
    <Auth0Provider domain={config.domain} clientId={config.clientId}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </Auth0Provider>
  );
};
export default App;
