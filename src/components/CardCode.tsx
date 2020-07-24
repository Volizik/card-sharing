import React, { useState } from 'react';
import { Card, TextField, Picker, Checkbox, Text, Button, Image, View } from 'react-native-ui-lib';
import { ScrollView, StyleSheet, Alert } from 'react-native';
import { PickerItemValue } from 'react-native-ui-lib/typings';
import Barcode from 'react-native-barcode-builder';
import ImagePicker from 'react-native-image-picker';

const cardImage2 = require('../assets/images/empty-state.jpg');

interface Country {
  label: string;
  value: string;
  disabled?: boolean;
}
const countries: Country[] = [
  { label: 'Россия', value: 'ru' },
  { label: 'Украина', value: 'ua' },
  { label: 'Белaрусь', value: 'by' },
];

export const CardCode = () => {
  const DEFAULT_BARCODE = '123456789012';
  const [isCardShared, setIsCardShared] = useState(false);
  const [countryPickerValue, setCountryPickerValue] = useState<PickerItemValue>();
  const [barcode, setBarcode] = useState('');
  const [barcodeValue, setBarcodeValue] = useState(DEFAULT_BARCODE);
  const [imgSrc, setImgSrc] = useState<any>(cardImage2);

  const onSwitchValueChange = (value: boolean) => {
    setIsCardShared(value);
  };
  const onSubmitPress = () => {
    console.log('Submit is pressed');
  };

  const setImage = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: 'data:image/jpeg;base64,' + response.data };
        setImgSrc(source);
      }
    });
  };

  return (
    <ScrollView>
      <Card style={styles.imageContainer} onPress={setImage}>
        <Card.Section imageSource={imgSrc} imageStyle={styles.image} />
      </Card>
      <Card style={styles.barcodeContainer}>
        {/*2305949924546*/}
        <Barcode
          value={barcodeValue}
          format='EAN13'
          flat
          onError={(err) => {
            setBarcodeValue(DEFAULT_BARCODE);
            setBarcode('');
            Alert.alert(err.name, err.message, [{ text: 'OK' }], { cancelable: false });
          }}
        />
        <TextField
          style={styles.barcodeInput}
          centered
          keyboardType='numeric'
          placeholder='Enter barcode here'
          hideUnderline
          value={barcode}
          onBlur={() => {
            setBarcodeValue(barcode);
          }}
          onChangeText={(value: string) => {
            setBarcode(value);
          }}
        />
      </Card>
      <Card style={{ ...styles.name, ...styles.card }}>
        <TextField multiline style={styles.input} hideUnderline placeholder='Shop name' />
      </Card>
      <Card style={styles.card}>
        <TextField multiline style={styles.textarea} hideUnderline placeholder='Describe your card' />
      </Card>
      <Card style={{ ...styles.country, ...styles.card }}>
        <Picker
          style={styles.picker}
          placeholder='Pick a country'
          useNativePicker
          hideUnderline
          value={countryPickerValue}
          onChange={(nativePickerValue: PickerItemValue) => setCountryPickerValue(nativePickerValue)}>
          {countries.map((country) => (
            <Picker.Item key={country.value} value={country.value} label={country.label} disabled={country.disabled} />
          ))}
        </Picker>
      </Card>
      <Card style={{ ...styles.checkboxWrap, ...styles.card }}>
        <Checkbox style={styles.checkbox} onValueChange={onSwitchValueChange} value={isCardShared} />
        <Text onPress={() => onSwitchValueChange(!isCardShared)}>Is this card shared?</Text>
      </Card>
      <Button onPress={onSubmitPress} label='Save' borderRadius={12} style={styles.submit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  barcodeContainer: {
    marginBottom: 10,
    marginTop: 10,
    paddingTop: 20,
    overflow: 'hidden',
  },
  imageContainer: {
    marginBottom: 10,
    marginTop: 10,
    overflow: 'hidden',
  },
  barcodeInput: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    fontSize: 30,
    height: 40,
  },
  card: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
  name: {
    height: 50,
  },
  country: {
    height: 50,
  },
  input: {
    padding: 10,
    fontSize: 16,
  },
  textarea: {
    padding: 10,
    fontSize: 16,
  },
  picker: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  checkboxWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  checkbox: {
    marginRight: 10,
  },
  submit: {
    marginBottom: 20,
  },
  image: {
    height: 300,
  },
});
