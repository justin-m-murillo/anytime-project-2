import { View, useWindowDimensions } from 'react-native';
import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MenuTab from '../tabs/MenuTab';
import GeoLocationTab from '../tabs/GeoLocationTab';
import InfoTab from '../tabs/InfoTab';

import { MaterialIcons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

const BusinessTabsView = ({data}) => {
  const height = useWindowDimensions().height;
  const activeColor = '#1e90ff';
  const inactiveColor = '#778899';
  const { 
    happyhour, 
    special, 
    businessName,
    address,
    distance,
    phoneNumber,
    website,
    email,
    photoGallery,
  } = data;

  return (
    <View style={{ height: height }}>
      <Tab.Navigator>
        {happyhour.length > 0 ?
          <Tab.Screen 
            name='Happy Hour' 
            children={() => <MenuTab deals={happyhour} />}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => (
                <MaterialIcons 
                  name="menu-book" 
                  size={24} 
                  color={ focused === true ? activeColor : inactiveColor } 
                />
              ),
            }}
          /> : null
        }
        {special.length > 0 ? 
          <Tab.Screen 
            name='Specials' 
            children={() => <MenuTab deals={special} />}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => (
                <MaterialIcons 
                  name="star" 
                  size={24} 
                  color={ focused === true ? activeColor : inactiveColor } 
                />
              ),
            }}
          /> : null
        }
        <Tab.Screen 
          name='Info'
          children={() => 
            <InfoTab 
              businessName={businessName}
              address={address}
              distance={distance}
              phoneNumber={phoneNumber}
              website={website}
              email={email}
              photoGallery={photoGallery}
            />
          }
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <MaterialIcons 
                name="info" 
                size={24} 
                color={ focused === true ? activeColor : inactiveColor }
              />
            ),
          }}
        />
        <Tab.Screen 
          name='Location' 
          children={() => <GeoLocationTab />}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <MaterialIcons 
                name="location-pin" 
                size={24} 
                color={ focused === true ? activeColor : inactiveColor }
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

export default BusinessTabsView;