import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'; 

import Navigator from './config/routes'; 

EStyleSheet.build({
    $primary: '#007aff', //blue
    $white: '#fff',
})


export default () => <Navigator />; 