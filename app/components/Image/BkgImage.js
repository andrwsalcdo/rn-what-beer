import React from 'react'; 
import { View, Image } from 'react-native'; 

import styles from './styles'; 

const img = require('../../assets/HomeScreen/beer-bottles-min.jpg'); 

const BkgImage = () => (
    <View style={styles.imageContainer}>
        <Image source={img} style={styles.image} />
    </View>
); 

export default BkgImage; 