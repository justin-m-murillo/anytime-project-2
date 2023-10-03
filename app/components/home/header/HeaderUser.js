import { 
  View,
  TouchableOpacity, 
  useWindowDimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import React, { useContext } from 'react';

import { UserContext } from '../../../context/UserContext';

import { MaterialIcons } from '@expo/vector-icons';

import HeaderUserDisplay from './HeaderUserDisplay';

const HeaderUser = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  const { 
    userName, 
    location,
    profileImg,
    isLoggedIn,
  } = useContext(UserContext);

  // const keyboard = useKeyboard();
  const toggleDrawer = () => {
    // if (keyboard.keyboardShown) {
    //   Keyboard.dismiss();
    // }
    navigation.dispatch(DrawerActions.toggleDrawer());
  }

  return (
    <View style={{ width: width }} className='flex-row w-full px-5 '>
      <View className='flex-row flex-1 mb-2'>
        <HeaderUserDisplay 
          userName={userName}
          location={location}
          profileImg={profileImg}
          isLoggedIn={isLoggedIn}
        />
      </View>
      <View className='flex-2 justify-center'>
        <TouchableOpacity
          onPress={toggleDrawer} 
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          <MaterialIcons name="menu" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HeaderUser