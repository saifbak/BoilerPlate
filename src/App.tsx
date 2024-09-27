import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/App/Home';


function App(): React.JSX.Element {
    return (
        <NavigationContainer >
            <HomeScreen />
        </NavigationContainer>
    );
}

export default App;
