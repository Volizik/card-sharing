import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { CardListItem } from './CardListItem';

export const CardsList = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <CardListItem />
                <CardListItem />
                <CardListItem />
                <CardListItem />
                <CardListItem />
                <CardListItem />
                <CardListItem />
                <CardListItem />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#eee',
    },
});
