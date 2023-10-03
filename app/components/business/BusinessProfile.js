import { 
  View, 
  Text, 
  Image, 
  useWindowDimensions, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Entypo } from '@expo/vector-icons';

import ImageGenerator from '../../utils/sampleImgGenerator';
import sampleBusinessData from '../../utils/sampleBusinessData';

import styles from '../../styles/businessprofile';

import BusinessTabsView from './BusinessTabsView';

const Tab = createMaterialTopTabNavigator();

const BusinessProfile = ({ route }) => {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  const data = route.params;
  const { imgUrl, businessName, distance } = data;
  const sampleImages = [
    { id: 1, img: imgUrl,  },
    { id: 2, img: ImageGenerator(720), },
    { id: 3, img: ImageGenerator(720), },
    { id: 4, img: ImageGenerator(720), },
    { id: 5, img: ImageGenerator(720), },
  ];
  
  const goToPrev = () => (
    navigation.goBack()
  );

  return (
    <View>
      <StatusBar style='light' />
      <View className='relative'>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
        >
          {sampleImages?.map((elem) => (
            <Image
              key={elem.id} 
              source={{
                uri: elem.img,
              }}
              style={{ width: width, height: height/3 }}
            />
          ))}
        </ScrollView>
        <View className={styles.goBackIconContainer}>
          <TouchableOpacity 
            className={styles.goBackIconTouchable}
            onPress={goToPrev}
          >
            <Entypo name="chevron-left" size={24} color="white" />
            <Text className={styles.goBackText}>Go Back</Text>
          </TouchableOpacity>
        </View>
        <View className={styles.businessNameContainer}>
          <Text className={styles.businessName}>{businessName}</Text>
        </View>
      </View>
      <BusinessTabsView data={sampleBusinessData} />
    </View>
  )
}

export default BusinessProfile;