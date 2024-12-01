import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import { styles } from './style';
import logo from '../../assets/images/splash/logo.png';
import colors from '../../config/colors'
export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.upperHalf}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </View>
      <View style={styles.lowerHalf}>

        <Text style={styles.title}>ROYAL INDIA</Text>
        <Text style={styles.subtitle}>Work Tracking App</Text>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.text}>Loading...</Text>
      </View>
    </View>
  );
}
