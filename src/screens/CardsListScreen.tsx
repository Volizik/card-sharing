import React from 'react';
import { CardsList } from '../components/CardList';
import { StyleSheet } from 'react-native';
import { Button, Colors } from 'react-native-ui-lib';
import { StackScreenProps } from '@react-navigation/stack';
const plusIcon = require('../assets/icons/plus.png');

export const CardsListScreen = ({ navigation }: StackScreenProps<any>) => {
    const onButtonPress = () => {
        navigation.navigate('NewCard');
    };

    return (
        <>
            <CardsList />
            <Button
                style={styles.button}
                fullWidth={false}
                color="white"
                size={Button.sizes.small}
                enableShadow
                round
                iconSource={plusIcon}
                iconStyle={{ tintColor: Colors.white }}
                onPress={onButtonPress}
            />
        </>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 60,
        width: 60,
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
});
