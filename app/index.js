import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'; 

import Home from './screens/Home'; 

EStyleSheet.build({
    $primary: '#007aff', //blue
    $white: '#fff',
})

export default () => <Home />; 