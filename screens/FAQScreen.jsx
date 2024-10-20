import React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from 'react-native-webview'; // Import WebView from react-native-webview

const FAQScreen = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://bizpoint.online/معلومات-الموقع/' }} // Replace with your actual privacy policy URL
        style={{ flex: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FAQScreen;
