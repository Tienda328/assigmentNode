import React, {PureComponent} from 'react';
import {TextInput, Image, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles/login';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      error: '',
      loading: false,
      password: '',
    };
  }

  Login = () => {
    const {navigation} = this.props;
    navigation.navigate('home');
  };

  onChangeTextUserame = (email) => {
    this.setState({email});
  };

  onChangeTextPassWord = (value) => {
    this.setState({
      password: value,
    });
  };

  render() {
    const {email, password} = this.state;
    const {navigation} = this.props;
    const {item} = navigation.state.params;
    console.warn('xoa', item._id);
    return (
      <View style={styles.containter}>
        <View style={styles.containterAll}>
          <View style={styles.containerInputName}>
            <Text style={styles.txtInput}>Tên San pham</Text>
            <TextInput
              onChangeText={this.onChangeTextUserame}
              style={styles.textInput}
              value={item.name}
              placeholder="john Doe"
            />
          </View>
          <View style={styles.containerInput}>
            <Text style={styles.txtInput}>Gia San Pham</Text>
            <TextInput
              onChangeText={this.onChangeTextPassWord}
              style={styles.textInput}
              value={item.price}
              secureTextEntry
              placeholder="**********"
            />
          </View>

          <TouchableOpacity style={styles.buttun} onPress={this.Login}>
            <Text style={styles.txtButtun}>SUA</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Login;
