import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

// On the web, the bundler will provide a public URL to the asset.
const pdfAsset = require('../../assets/quran.pdf');

export default function QuranScreen() {
  if (Platform.OS === 'web') {
    // For the web deployment on Vercel, we'll use an iframe to show the PDF.
    return (
      <View style={{ flex: 1 }}>
        <iframe src={pdfAsset} style={{ width: '100%', height: '100%', border: 'none' }} title="Quran PDF" />
      </View>
    );
  } else {
    // On mobile, we'll use react-native-webview to show the PDF.
    return (
      <WebView
        originWhitelist={['*']}
        source={{ uri: pdfAsset }}
        style={{ flex: 1 }}
      />
    );
  }
}
