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
    const {email, password, error} = this.state;
    return (
      <View style={styles.containter}>
        <View style={styles.containerImg}>
          <Image
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNySBgVUfhBJFUQTrqPke0rw-DZoDA89KAiw&usqp=CAU',
            }}
            style={styles.imgLogo}
          />
        </View>
        <View style={styles.containterAll}>
          <View style={styles.containerInputName}>
            <Text style={styles.txtInput}>Tên đăng nhập</Text>
            <TextInput
              onChangeText={this.onChangeTextUserame}
              style={styles.textInput}
              value={email}
              placeholder="john Doe"
            />
          </View>
          <View style={styles.containerInput}>
            <Text style={styles.txtInput}>Mật khẩu</Text>
            <TextInput
              onChangeText={this.onChangeTextPassWord}
              style={styles.textInput}
              value={password}
              secureTextEntry
              placeholder="**********"
            />
          </View>

          <TouchableOpacity style={styles.buttun} onPress={this.Login}>
            <Text style={styles.txtButtun}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Login;
