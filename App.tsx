import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { CardsListScreen } from './src/screens/CardsListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AddCardScreen } from './src/screens/AddCardScreen';

declare const global: { HermesInternal: null | {} };
const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={CardsListScreen}
                    options={{ header: () => null }}
                />
                <Stack.Screen
                    name="NewCard"
                    component={AddCardScreen}
                    options={{ title: '' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
