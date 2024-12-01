import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';// Install @expo/vector-icons if not already
import colors from '../../config/colors';

const PasswordField = ({ placeholder, value, onChangeText }) => {
    const [isSecure, setIsSecure] = useState(true);

    const toggleSecureEntry = () => {
        setIsSecure(!isSecure);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={colors.placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={isSecure}
                autoCapitalize="none"
            />
            <TouchableOpacity onPress={toggleSecureEntry} style={styles.icon}>
                <Ionicons
                    name={isSecure ? 'eye-off' : 'eye'}
                    size={20}
                    color={colors.text}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 50,
        borderColor: colors.text,
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 15,
        borderRadius: 8,
        backgroundColor: colors.inputBackground,
    },
    input: {
        flex: 1,
        color: colors.text,
        fontSize: 16,
    },
    icon: {
        marginLeft: 10,
    },
});

export default PasswordField;
