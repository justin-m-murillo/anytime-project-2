import { View, TextInput } from 'react-native'
import React, { useState } from 'react'

import { Entypo } from '@expo/vector-icons';

import styles from '../../../styles/searchbar';


const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <View className={styles.searchContainer}>
      <View className={styles.searchView}>
        <Entypo name="magnifying-glass" size={20} color="gray" />
          <TextInput
            className='w-72 mx-1'
            maxLength={36}
            placeholder='What are you looking for?'
            clearButtonMode='always'
            onChangeText={newInput => setSearchInput(newInput)}
            value={searchInput}
          />
      </View>
    </View>
  )
}

export default SearchBar;