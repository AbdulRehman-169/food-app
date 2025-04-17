import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { groupedData } from '../lib/data';

const Detailed = () => {
  const route = useRoute();
  const { id } = route.params;

  // Find the dish using the id
  let dish;
  groupedData.forEach(group => {
    const found = group.dishes.find(d => d.id === id);
    if (found) dish = found;
  });

  if (!dish) {
    return (
      <View style={styles.center}>
        <Text style={styles.notFound}>Dish not found</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={dish.image} style={styles.image} />
      <Text style={styles.title}>{dish.title}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <Text style={styles.price}>Price: {dish.Price}</Text>
    </ScrollView>
  );
};

export default Detailed;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'center',
    color: '#666',
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFound: {
    fontSize: 18,
    color: 'red',
  },
});
