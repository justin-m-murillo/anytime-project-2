import React, { useContext } from 'react';

import { UserContext } from '../context/UserContext';

import { useTheme } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SideBarMenu from '../components/sidebar/SideBarMenu';
import HomeScreen from '../screens/HomeScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import LogInScreen from '../screens/LogInScreen';

import { FontAwesome } from '@expo/vector-icons';

import TScreen from '../templates/TScreen';


const MainDrawerNavigator = () => {
  const { colors } = useTheme();
  const iconActiveColor = colors.primary;
  const iconInactiveColor = '#d1d5db'; {/* Tailwind CSS: text-gray-300 */}

  const { isLoggedIn } = useContext(UserContext);
  
  const Drawer = createDrawerNavigator();

  const drawerScreenOptions = (label, iconName, unmountOnBlur=false) => (
    {
      drawerLabel: label,
      drawerIcon: ({ focused }) => (
        <FontAwesome name={iconName} size={20} color={ focused ? iconActiveColor : iconInactiveColor } />
      ),
      unmountOnBlur: unmountOnBlur,
    }
  );

  return (
      <Drawer.Navigator
        initialRouteName='HomeScreen'
        screenOptions={{ 
          headerShown: false, 
          swipeEdgeWidth: 0,
          drawerPosition: 'right',
        }}
        drawerContent={(props) => <SideBarMenu {...props} /> /* SideBar Menu */ }
      >
        {
          !isLoggedIn ? 
            <Drawer.Screen 
              name='LogInScreen'
              options={drawerScreenOptions('Log In', 'user')}
              children={(props) => (
                <TScreen>
                  <LogInScreen {...props}/>
                </TScreen>
              )}
            />
            : null
        }
        <Drawer.Screen 
          name='HomeScreen' 
          options={drawerScreenOptions('Home', 'home')}
          children={(props) => (
            <TScreen>
              <HomeScreen {...props}/>
            </TScreen>
          )} 
        />
        {
          isLoggedIn ? 
            <Drawer.Screen 
              name='FavoritesScreen'
              options={drawerScreenOptions('Favorites', 'heart')}
              children={(props) => ( 
                <TScreen>
                  <FavoritesScreen {...props}/>
                </TScreen>
              )}
            />
            : null
        }
        <Drawer.Screen 
          name='ContactUsScreen'
          options={drawerScreenOptions('Contact Us', 'at')} 
          children={(props)=> (
            <TScreen>
              <ContactUsScreen {...props}/>
            </TScreen>
          )} 
        />
      </Drawer.Navigator>
  )
}

export default MainDrawerNavigator;