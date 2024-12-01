import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import colors from '../../../config/colors';
import logo from '../../../assets/images/splash/logo.png';
export default function DashboardScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  const cardData1 = [
    { id: '1', title: 'Total Task', navigateTo: 'Profile' },
    { id: '2', title: 'Completed Task ', navigateTo: 'Settings' },
    { id: '3', title: 'Progress Task', navigateTo: 'Notifications' },
    { id: '4', title: 'Overdue Task', navigateTo: 'Support' },
  ];

  const cardData = [
    {
      id: '1',
      title: 'Total Employees',

      image: require('../../../assets/images/splash/logo.png'),
    },
    {
      id: '2',
      title: 'WFH Employees',

      image: require('../../../assets/images/splash/logo.png'),
    },
    {
      id: '3',
      title: 'WFO Employees',

      image: require('../../../assets/images/splash/logo.png'),
    },

  ];

  const cardData2 = [
    { id: '1', title: 'Total Task' },
    { id: '2', title: 'Completed Task' },
    { id: '3', title: 'Overdue Task' },
    { id: '4', title: 'In Progress Task' },
  ];

  const renderCard = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => alert(`${item.title} clicked`)}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  const renderTaskCard = ({ item }) => (
    <TouchableOpacity style={styles.taskCard} onPress={() => alert(`${item.title} clicked`)}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardTitle}>100</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Dashboard!</Text>
      <FlatList
        data={cardData}
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
        horizontal // Enables horizontal scrolling
        showsHorizontalScrollIndicator={false} // Hides the scroll bar
        contentContainerStyle={styles.cardList}
      />

      <FlatList
        data={cardData2}
        keyExtractor={(item) => item.id}
        renderItem={renderTaskCard}
        contentContainerStyle={styles.cardList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
  },
  cardList: {
    paddingHorizontal: 10,
    marginBottom: 20, // Add space between the two lists
  },
  // taskCard: {
  //   paddingHorizontal: 10,
  //   marginBottom: 20, // Add space between the two lists
  // },
  card: {
    backgroundColor: colors.cardBg,
    padding: 20,
    marginRight: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: 210, // Fixed width for horizontal cards
    height: 120, // Fixed height for the card
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
    justifyContent: 'space-between', // Ensures spacing between elements
  },
  taskCard: {
    backgroundColor: colors.cardBg,
    padding: 20,
    marginRight: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: 390, 
    height: 100, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, 
    justifyContent: 'space-between',
    marginBottom:10,
    
  },
 
  cardImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.cardText,
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: colors.cardText,
    textAlign: 'center',
  },
});