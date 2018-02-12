import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
 
import styles from './styles';

const Button = ({ text, onPress, customIcon = null }) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.container}
    activeOpacity={styles.$opacity}
  >
    <View style={styles.wrapper}>
      {customIcon}
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

export default Button;
