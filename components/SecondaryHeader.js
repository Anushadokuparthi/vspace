import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const SecondaryHeader = ({
  pageTitle = "Premium Living Room",
  resultsFound = "10 results found",
}) => {
  return (
    <View style={styles.frameView4}>
      <View style={styles.frameView2}>
        <View style={styles.frameView}>
          <Text style={styles.pemiumLivingRoom}>{pageTitle}</Text>
        </View>
        <View style={styles.frameView1}>
          <View style={styles.chevronLeftView}>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.frameView3, styles.ml131]}>
        <Text style={styles.resultsFoundText}>{resultsFound}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml131: {
    marginLeft: 131,
  },
  pemiumLivingRoom: {
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
  resultsFoundText: {
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
    backgroundColor: "rgba(204, 204, 204, 0.1)",
    width: 393,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default SecondaryHeader;
