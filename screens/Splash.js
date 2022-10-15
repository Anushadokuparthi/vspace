import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

const Splash = () => {
  return (
    <View style={styles.splashView}>
      <View style={styles.frameView1}>
        <View style={styles.frameView}>
          <Text style={styles.vSpaceText}>VSpace</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vSpaceText: {
    position: "relative",
    fontSize: 48,
    fontFamily: "Raleway",
    color: "#bc4a3c",
    textAlign: "left",
    transform: [
      {
        rotate: "179.38deg",
      },
    ],
  },
  frameView: {
    backgroundColor: "#fef1e6",
    width: 229,
    height: 101,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  frameView1: {
    width: 391,
    height: 852,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  splashView: {
    position: "relative",
    backgroundColor: "#bc4a3c",
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Splash;
