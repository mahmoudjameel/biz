import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const WalletScreen = () => {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: "https://bizpoint.online/my-account-2/my-wallet/" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WalletScreen;
