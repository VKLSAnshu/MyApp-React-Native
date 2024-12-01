// components/CustomDrawerContent.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Icons for drawer items
import styles from './style'; // Adjust the path if necessary

const CustomDrawerContent = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <View style={styles.profileImage} />
        <Text style={styles.profileName}>Anshu Sharma</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileButtonText}>View Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuSection}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Dashboard')}
          style={styles.menuItem}
        >
          <Icon name="grid-outline" size={22} color="#000" />
          <Text style={styles.menuText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Task')}
          style={styles.menuItem}
        >
          <Icon name="checkmark-done-outline" size={22} color="#000" />
          <Text style={styles.menuText}>Task</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Department')}
          style={styles.menuItem}
        >
          <Icon name="briefcase-outline" size={22} color="#000" />
          <Text style={styles.menuText}>Department</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Employees')}
          style={styles.menuItem}
        >
          <Icon name="people-outline" size={22} color="#000" />
          <Text style={styles.menuText}>Employees</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => props.navigation.closeDrawer()}
        style={styles.logoutItem}
      >
        <Icon name="log-out-outline" size={22} color="#E63946" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawerContent;
