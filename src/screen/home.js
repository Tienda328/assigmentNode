import React, {PureComponent} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles/login';
import Item from '../component/item-project';

let data = {
  users: [
    {
      name: 'Proxima Midnight',
      email: 'proxima@appdividend.com',
      img:
        'https://image-us.24h.com.vn/upload/3-2020/images/2020-08-10/nhat-kim-anh-1597027917-30-width640height480.jpg',
    },
    {
      name: 'Ebony Maw',
      email: 'ebony@appdividend.com',
      img:
        'https://image-us.24h.com.vn/upload/3-2020/images/2020-08-10/nhat-kim-anh-1597027917-30-width640height480.jpg',
    },
    {
      name: 'Black Dwarf',
      email: 'dwarf@appdividend.com',
      img:
        'https://image-us.24h.com.vn/upload/3-2020/images/2020-08-10/nhat-kim-anh-1597027917-30-width640height480.jpg',
    },
    {
      name: 'Mad Titan',
      email: 'thanos@appdividend.com',
      img:
        'https://image-us.24h.com.vn/upload/3-2020/images/2020-08-10/nhat-kim-anh-1597027917-30-width640height480.jpg',
    },
    {
      name: 'Supergiant',
      email: 'supergiant@appdividend.com',
      img:
        'https://image-us.24h.com.vn/upload/3-2020/images/2020-08-10/nhat-kim-anh-1597027917-30-width640height480.jpg',
    },
    {
      name: 'Loki',
      email: 'loki@appdividend.com',
      img:
        'https://image-us.24h.com.vn/upload/3-2020/images/2020-08-10/nhat-kim-anh-1597027917-30-width640height480.jpg',
    },
    {
      name: 'corvus',
      email: 'corvus@appdividend.com',
      img:
        'https://image-us.24h.com.vn/upload/3-2020/images/2020-08-10/nhat-kim-anh-1597027917-30-width640height480.jpg',
    },
    {
      name: 'Proxima Midnight',
      email: 'proxima1@appdividend.com',
      img:
        'https://image-us.24h.com.vn/upload/3-2020/images/2020-08-10/nhat-kim-anh-1597027917-30-width640height480.jpg',
    },
  ],
};
class Home extends PureComponent {
  render() {
    return (
      <View style={styles.containter}>
        <View style={{backgroundColor:'blue', justifyContent:'center',alignItems:'center',height: 40}}>
          <Text style={{color:'white',fontSize: 17}}>Home</Text>
        </View>
        <FlatList
        style={{paddingTop:16}}
          data={data.users}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <Item name={item.name} email={item.email} img={item.img} />}
          keyExtractor={(item) => item.email}
        />
      </View>
    );
  }
}
export default Home;
