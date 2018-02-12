import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types'; 
 
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

Button.propTypes = {
    text: PropTypes.string, 
    onPress: PropTypes.func,
    customIcon: PropTypes.object
}

export default Button;
