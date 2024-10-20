
import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const TnCScreen = () => {
  const injectedJavaScript = `
    const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const topMargin = Math.round(viewportHeight * 0.5);
    document.body.style.marginTop = '-' + topMargin + 'px';
  `;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.webContainer}>
        <WebView
          source={{ uri: 'https://bizpoint.online/الشروط-والاحكام' }}
          injectedJavaScript={injectedJavaScript}
          allowsZoom={false} // تعطيل التكبير/التصغير
          overScrollMode="never" // تعطيل تحريك الصفحة يمينًا ويسارًا

        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webContainer: {
    flex: 1,
  },
});

export default TnCScreen;