import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Barcode } from '../components/Barcode';
import { Text, Card } from 'react-native-ui-lib';

export const CardScreen = () => (
  <ScrollView style={styles.container}>
    <Barcode value='124456789012' />
    <Card style={styles.card}>
      <Text style={{ ...styles.country, ...styles.text }}>Украина</Text>
    </Card>
    <Card style={styles.card}>
      <Text style={{ ...styles.name, ...styles.text }}>Adidas</Text>
    </Card>
    <Card style={styles.card}>
      <Text style={{ ...styles.description, ...styles.text }}>Скидка 10%</Text>
    </Card>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {},
  card: {
    padding: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  country: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  name: {},
  description: {},
});
