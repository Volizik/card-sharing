import React, { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-ui-lib';
import { useNavigation } from '@react-navigation/native';

export interface CardListItem {
  id: number;
  image: string;
  name: string;
  description: string;
}

export const CardListItem: FC<CardListItem> = ({ image, name, description }) => {
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.navigate('Card');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPressHandler}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

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
