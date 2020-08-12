import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containter: {
    flex: 1,
    marginVertical: 16,
    marginHorizontal: 16,
    width: 300,
    // padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  name:{
    fontSize: 30,
    fontWeight:'500',
    color:'blue'
  },
  email:{
    color:'red',
    fontSize:20,
    marginBottom:4
  }
});
