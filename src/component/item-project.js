import React, {PureComponent} from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import styles from './styles/item-project';

class Home extends PureComponent {
  render() {
    const {name, email, img, onPressSua, onPressXoa} = this.props;
    return (
      <View style={styles.containter}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{uri: img}}
            style={{width: 150, height: 150, alignItems: 'center', marginTop:10}}
          />

          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>

          <TouchableHighlight style={{backgroundColor: 'green', width: 50, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 4}} 
          onPress={onPressSua}>
            <Text style={{color:'white'}}>sua</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{backgroundColor: 'red', width: 50, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 4, marginVertical: 8}}
          onPress={onPressXoa}>
            <Text style={{color:'white'}}>Xoa</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
export default Home;
