import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import colors from '../../config/colors';

const InputBox = ({ placeholder, value, onChangeText, secureTextEntry = false, keyboardType = 'default' }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={colors.placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      autoCapitalize="none"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    borderColor: colors.text,
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: colors.inputBackground,
    color: colors.text,
    
  },
});

export default InputBox;
