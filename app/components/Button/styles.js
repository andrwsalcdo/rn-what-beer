import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  $opacity: 0.8, 
  container: {
    backgroundColor: '$primary',
    height: 60
  },
  wrapper: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  text: {
    color: '$white',
    fontSize: 20,
    paddingLeft: 8
  }
});
