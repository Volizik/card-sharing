import React, { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export interface CardListItem {
  id: number;
  image: string;
  name: string;
  description: string;
}

export const CardListItem: FC<CardListItem> = ({ image, name, description }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: image }} />
    <View style={styles.info}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 5,
    shadowColor: '#ccc',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  image: {
    height: 100,
    width: 100,
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
});
