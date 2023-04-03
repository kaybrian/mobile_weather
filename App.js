import { Provider } from 'react-redux';
import store from './store';
import Location from './location';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name="Location"
            component={Location}
            options={{
              presentation: "fullScreenModal",
              headerShown: false
            }}
          />

          <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{
              presentation: "fullScreenModal",
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>

  );
}
