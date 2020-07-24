declare module 'react-native-barcode-builder' {
  import React from 'react';

  export type Format = 'CODE128' | 'EAN' | 'CODE39' | 'ITF' | 'MSI' | 'Pharmacode' | 'Codabar' | 'EAN13';

  export interface BarcodeProps {
    value: string;
    format: Format;
    text?: string;
    width?: number;
    height?: number;
    lineColor?: string;
    textColor?: string;
    background?: string;
    onError?: (error: Error) => void;
    flat: boolean;
  }

  class Barcode extends React.PureComponent<BarcodeProps, any> {}

  export default Barcode;
}
