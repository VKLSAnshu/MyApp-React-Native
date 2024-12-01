import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { styles } from './style';
import colors from '../../../config/colors';
import logo from '../../../assets/images/splash/logo.png';
import InputBox from '../../../components/common/inputBox';
import PasswordBox from '../../../components/common/passwordBox';
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  const handleLogin = () => {
    navigation.replace('App', {
      screen: 'Dashboard',
    });
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.upperHalf}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </View>
      <View style={styles.lowerHalf}>
        <Text style={styles.heading}>Sign in to your Account</Text>
        <InputBox
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <PasswordBox
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
