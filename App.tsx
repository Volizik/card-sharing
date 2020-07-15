import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { CardsListScreen } from './src/screens/CardsListScreen';

declare const global: { HermesInternal: null | {} };

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
              <CardsListScreen />
            </SafeAreaView>
        </>
    );
};

export default App;
