import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,  // Import Modal
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../variables/color";
import { useNavigation } from "@react-navigation/native";
import { routes } from "../navigation/routes";
import { WebView } from 'react-native-webview';  // Import WebView

const headerLogoURL = require("../assets/logo_header.png");

const TabScreenHeader = ({
  right,
  onRightClick,
  style,
  left,
  onLeftClick,
  rightIcon,
  sideBar,
}) => {
  const navigation = useNavigation();
  const [showWebView, setShowWebView] = useState(false);  // State to control WebView visibility

  return (
    <View style={[styles.container, style]}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate(routes.homeScreen)}
      >
        <Image
          resizeMode="contain"
          source={headerLogoURL}
          style={{ height: 40, width: 160, resizeMode: "contain" }}
        />
      </TouchableWithoutFeedback>
      {right && (
        <TouchableOpacity style={styles.headerRight} onPress={onRightClick}>
          <FontAwesome name={rightIcon} size={20} color={COLORS.white} />
        </TouchableOpacity>
      )}
      {left && !sideBar && (
        <TouchableOpacity style={styles.headerLeft} onPress={onLeftClick}>
          <MaterialIcons name="arrow-back" size={24} color={COLORS.white} />
        </TouchableOpacity>
      )}
      {sideBar && (
        <TouchableOpacity
          style={styles.headerLeft}
          onPress={() => navigation.openDrawer()}
        >
          <MaterialIcons name="menu" size={24} color={COLORS.white} />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={styles.walletIcon}
        onPress={() => setShowWebView(true)}  // Show WebView in Modal
      >
        <MaterialIcons name="wallet" size={24} color={COLORS.white} />
      </TouchableOpacity>
      
      <Modal
        visible={showWebView}
        animationType="slide"
        onRequestClose={() => setShowWebView(false)}
      >
        <View style={styles.webViewContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setShowWebView(false)}
          >
            <MaterialIcons name="close" size={24} color={COLORS.white} />
          </TouchableOpacity>
          <WebView source={{ uri: 'https://bizpoint.online/my-account-2/my-wallet/' }} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  headerLeft: {
    position: "absolute",
    left: "2%",
  },
  headerRight: {
    position: "absolute",
    right: "6%",
  },
  walletIcon: {
    position: "absolute",
    right: "2%",
  },
  webViewContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
});

export default TabScreenHeader;
