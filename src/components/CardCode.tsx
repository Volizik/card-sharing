import React, { useState } from 'react';
import { Card, TextField, Picker, Checkbox, Text, Button } from 'react-native-ui-lib';
import { ScrollView, StyleSheet } from 'react-native';
import { PickerItemValue } from 'react-native-ui-lib/typings';
import ImagePicker from 'react-native-image-picker';
import { Barcode } from './Barcode';

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
  const [isCardShared, setIsCardShared] = useState(false);
  const [countryPickerValue, setCountryPickerValue] = useState<PickerItemValue>();
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
      <Barcode editable />
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
  imageContainer: {
    marginBottom: 10,
    marginTop: 10,
    overflow: 'hidden',
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
