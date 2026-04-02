import React from 'react';
import HomePage from './src/pages/HomePage';
import Calendar from './src/pages/Calendar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: '#0057b8',
            headerShown: false,
            tabBarStyle: {
              backgroundColor: '#FFD600',
            },
          }}
        >
          <Tab.Screen
            name="Home"
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({
                color,
                size,
              }: {
                color: string;
                size: number;
              }) => <FontAwesomeIcon icon={faHome} size={size} color={color} />,
            }}
            component={HomePage}
          />
          <Tab.Screen
            name="Calendar"
            options={{
              tabBarLabel: 'Calendar',
              tabBarIcon: ({
                color,
                size,
              }: {
                color: string;
                size: number;
              }) => (
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  size={size}
                  color={color}
                />
              ),
            }}
            component={Calendar}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
