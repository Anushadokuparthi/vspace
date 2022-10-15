import * as React from "react";
import {
  View,
  SafeAreaView,
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";

const Header1 = ({ style }) => {
  return (
    <SafeAreaView style={[styles.headerSafeAreaView, style]}>
      <View style={styles.view}>
        <View style={styles.frameView}>
          <Text style={styles.vSpaceText}>VSpace</Text>
        </View>
        <Pressable style={[styles.framePressable, styles.ml166]}>
          <View style={styles.rectangleView} />
          <Image
            style={[styles.rectangleIcon, styles.mt8]}
            resizeMode="cover"
            source={require("../assets/rectangle-2.png")}
          />
          <View style={[styles.rectangleView1, styles.mt8]} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mt8: {
    marginTop: 8,
  },
  ml166: {
    marginLeft: 166,
  },
  headerSafeAreaView: {
    backgroundColor: "#fef1e6",
  },
  vSpaceText: {
    position: "relative",
    fontSize: 32,
    fontFamily: "Raleway",
    color: "#bc4a3c",
    textAlign: "left",
  },
  frameView: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    width: 137,
    flexShrink: 0,
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "#555",
    width: 21.33,
    height: 1.5,
    flexShrink: 0,
  },
  rectangleIcon: {
    position: "relative",
    width: 21.33,
    height: 1.5,
    flexShrink: 0,
  },
  rectangleView1: {
    position: "relative",
    backgroundColor: "#555",
    width: 21.33,
    height: 1.5,
    flexShrink: 0,
  },
  framePressable: {
    flexDirection: "column",
    paddingHorizontal: 25,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  view: {
    position: "relative",
    backgroundColor: "#fef1e6",
    width: 393,
    height: 70,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default Header1;
