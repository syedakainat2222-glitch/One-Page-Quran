import React from 'react';
import { Platform, View, StyleSheet, Text } from 'react-native';

// On the web, the bundler will provide a public URL to the asset.
const pdfAsset = require('../../assets/quran.pdf');

// This is the placeholder for your live website URL.
// We will replace this after you deploy to Vercel.
const LIVE_WEBSITE_URL = 'https://placeholder.url';

export default function QuranScreen() {
  if (Platform.OS === 'web') {
    // For the web deployment on Vercel, we'll use an iframe to show the PDF.
    // It is EXPECTED that this will be blocked by Chrome in the local preview.
    // It WILL work correctly when deployed to Vercel.
    return (
      <View style={{ flex: 1 }}>
        <iframe src={pdfAsset} style={{ width: '100%', height: '100%', border: 'none' }} title="Quran PDF" />
      </View>
    );
  }

  // For the native Android APK, we will load the live website.
  // This part will not be visible in the web preview.
  return (
    <View style={styles.container}>
        <Text>This view is for the native Android app and will show the live website.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
