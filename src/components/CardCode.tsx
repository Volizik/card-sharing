import React, { useState } from 'react';
import { Card, TextField, TextArea, Checkbox, Text, Button } from 'react-native-ui-lib';
import { ScrollView, StyleSheet } from 'react-native';
const cardImage2 = require('../assets/images/empty-state.jpg');

export const CardCode = () => {
    const [isCardShared, setIsCardShared] = useState(false);

    const onSwitchValueChange = (value: boolean) => {
        setIsCardShared(value);
    };
    const onSubmitPress = () => {
        console.log('Submit is pressed');
    };

    return (
        <ScrollView>
            <Card style={styles.container}>
                <Card.Section
                    imageSource={cardImage2}
                    imageStyle={{ height: 220 }}
                />
                <TextField
                    style={styles.barcodeInput}
                    centered
                    keyboardType='numeric'
                    placeholder='Enter barcode here'
                    hideUnderline
                />
            </Card>
            <Card style={styles.describe}>
                <TextField
                    multiline
                    style={styles.textarea}
                    hideUnderline
                    placeholder='Describe your card'
                />
            </Card>
            <Card style={styles.checkboxWrap}>
                <Checkbox style={styles.checkbox} onValueChange={onSwitchValueChange} value={isCardShared} />
                <Text onPress={() => onSwitchValueChange(!isCardShared)}>Is this card shared?</Text>
            </Card>
            <Button onPress={onSubmitPress} label='Save' borderRadius={12} style={styles.submit} />
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        marginTop: 10,
    },
    barcodeInput: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: -15,
        marginTop: 10,
        fontSize: 30,
    },
    describe: {
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    textarea: {
        padding: 10,
        fontSize: 16,
    },
    checkboxWrap: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
    },
    checkbox: {
        marginRight: 10,
    },
    submit: {
        marginBottom: 20,
    },
});
