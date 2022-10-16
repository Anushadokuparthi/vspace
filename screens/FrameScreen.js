import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const FrameScreen = () => {
  return (
    <View style={styles.frameView4}>
      <View style={styles.frameView2}>
        <View style={styles.frameView}>
          <Text style={styles.orderDetailsText}>Order Details</Text>
        </View>
        <View style={styles.frameView1}>
          <View style={styles.chevronLeftView}>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector14.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.frameView3, styles.ml131]}>
        <Text style={styles.o1234Text}>#O1234</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml131: {
    marginLeft: 131,
  },
  orderDetailsText: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView: {
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  vectorIcon: {
    position: "relative",
    width: 7.58,
    height: 10.83,
    flexShrink: 0,
  },
  chevronLeftView: {
    flexDirection: "row",
    paddingHorizontal: 3,
    paddingVertical: 1,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView1: {
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView2: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  o1234Text: {
    position: "relative",
    fontSize: 10,
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView3: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameView4: {
    position: "relative",
    backgroundColor: "rgba(204, 204, 204, 0.1)",
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default FrameScreen;
