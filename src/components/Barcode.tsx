import React, { FC, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import BarcodeComponent from 'react-native-barcode-builder';
import { Card, TextField, Text } from 'react-native-ui-lib';

export interface BarcodeProps {
  editable?: boolean;
  value?: string;
}

export const Barcode: FC<BarcodeProps> = ({ editable = false, value }) => {
  const DEFAULT_BARCODE = value || '123456789012';
  const [barcode, setBarcode] = useState('');
  const [barcodeValue, setBarcodeValue] = useState(DEFAULT_BARCODE);
  return (
    <Card style={styles.barcodeContainer}>
      <BarcodeComponent
        value={barcodeValue}
        format='EAN13'
        flat
        onError={(err) => {
          setBarcodeValue(DEFAULT_BARCODE);
          setBarcode('');
          Alert.alert(err.name, err.message, [{ text: 'OK' }], { cancelable: false });
        }}
      />
      {editable ? (
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
          onChangeText={(val: string) => {
            setBarcode(val);
          }}
        />
      ) : (
        <Text style={styles.barcodeText}>{barcodeValue}</Text>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  barcodeContainer: {
    marginBottom: 10,
    marginTop: 10,
    paddingTop: 20,
    overflow: 'hidden',
  },
  barcodeInput: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    fontSize: 30,
    height: 40,
  },
  barcodeText: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    fontSize: 30,
    height: 40,
    textAlign: 'center',
  },
});
