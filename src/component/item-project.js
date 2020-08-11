import React, {PureComponent} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles/item-project';

class Home extends PureComponent {
  render() {
    const {name, email, img} = this.props;
    return (
      <View style={styles.containter}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{uri: img}}
            style={{width: 100, height: 100, alignItems: 'center'}}
          />

          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>

          <TouchableOpacity style={{backgroundColor: 'green', width: 50, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 4}}>
            <Text>sua</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: 'red', width: 50, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 4, marginVertical: 8}}>
            <Text>Xoa</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Home;
