import React, {PureComponent} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles/login';
import Item from '../component/item-project';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch('http://192.168.137.1:3000/homenews')
      .then((response) => response.json())
      .then((responseJson) => {
        console.warn('jehee', responseJson);
        this.setState({
          data: responseJson,
        });
      })
      .catch((error) => console.log(error));
  };
  sua = (item) => {
    console.warn('jehee', item._id);
    const {navigation} = this.props;
    navigation.navigate('edit', {item});
  };

  xoa = (item) => {
    console.warn('xoa', item._id);
  };

  render() {
    const {data} = this.state;

    return (
      <View style={styles.containter}>
        <View
          style={{
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
          }}>
          <Text style={{color: 'white', fontSize: 17}}>Home</Text>
        </View>
        <FlatList
          style={{paddingTop: 16}}
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Item
              name={item.name}
              email={item.price}
              img={item.images}
              onPressSua={() => this.sua(item)}
              onPressXoa={() => this.xoa(item)}
            />
          )}
          keyExtractor={(item) => item.email}
        />
      </View>
    );
  }
}
export default Home;
