import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export const CardListItem = () => (
    <View style={styles.container}>
        <Image
            style={styles.image}
            source={{
                uri:
                    'data:image/png;base64,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',
            }}
        />
        <View style={styles.info}>
            <Text style={styles.title}>Спорт Мастер</Text>
            <Text style={styles.description}>Скидка 10%</Text>
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
