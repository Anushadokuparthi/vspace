import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Diversity = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.diversityView}>
      <View style={styles.frameView9}>
        <View style={styles.groupView}>
          <Image
            style={styles.rectangleIcon}
            resizeMode="cover"
            source={require("../assets/rectangle-53.png")}
          />
          <View style={styles.frameView}>
            <Text style={styles.vSpaceText}>VSpace</Text>
          </View>
          <View style={styles.frameView1}>
            <Text style={styles.diversityText}>Diversity</Text>
          </View>
        </View>
        <View style={[styles.frameView8, styles.mt10]}>
          <View style={styles.frameView3}>
            <Pressable
              style={styles.framePressable}
              onPress={() => navigation.navigate("Dreambig")}
            >
              <Image
                style={styles.rectangleIcon1}
                resizeMode="cover"
                source={require("../assets/rectangle-705.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.framePressable1, styles.ml5]}
              onPress={() => navigation.navigate("Customize")}
            >
              <Image
                style={styles.rectangleIcon2}
                resizeMode="cover"
                source={require("../assets/rectangle-705.png")}
              />
            </Pressable>
            <View style={[styles.frameView2, styles.ml5]}>
              <Image
                style={styles.rectangleIcon3}
                resizeMode="cover"
                source={require("../assets/rectangle-703.png")}
              />
            </View>
          </View>
          <View style={[styles.frameView5, styles.mt23]}>
            <View style={styles.frameView4}>
              <Text style={styles.text}>“</Text>
              <Text style={[styles.vSpaceMatchesAllThreeDimen, styles.ml13]}>
                VSpace matches all three dimensions of comfort, luxury and trend
              </Text>
            </View>
          </View>
          <View style={[styles.frameView7, styles.mt23]}>
            <Pressable
              style={styles.button3Pressable}
              onPress={() => navigation.navigate("Register")}
            >
              <View style={styles.buttonView}>
                <Text style={styles.hoverMeText}>Next</Text>
              </View>
              <View style={styles.rectangleView} />
            </Pressable>
            <View style={[styles.frameView6, styles.mt10]}>
              <Text style={styles.skipNowText}>Skip Now</Text>
              <Image
                style={[styles.arrowIcon, styles.ml8]}
                resizeMode="cover"
                source={require("../assets/arrow-1.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml5: {
    marginLeft: 5,
  },
  ml13: {
    marginLeft: 13,
  },
  ml8: {
    marginLeft: 8,
  },
  mt10: {
    marginTop: 10,
  },
  mt23: {
    marginTop: 23,
  },
  rectangleIcon: {
    position: "absolute",
    top: 0,
    left: 1,
    width: 392,
    height: 583,
  },
  vSpaceText: {
    position: "relative",
    fontSize: 32,
    fontFamily: "Raleway",
    color: "#bc4a3c",
    textAlign: "left",
  },
  frameView: {
    position: "absolute",
    top: 29,
    left: 25,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  diversityText: {
    position: "relative",
    fontSize: 32,
    fontFamily: "Rubik",
    color: "#bc4a3c",
    textAlign: "left",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 20,
    transform: [
      {
        rotate: "0.62deg",
      },
    ],
  },
  frameView1: {
    position: "absolute",
    top: 492,
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: 393.41,
    height: 91.33,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  groupView: {
    position: "relative",
    width: 393.41,
    height: 583.33,
    flexShrink: 0,
  },
  rectangleIcon1: {
    position: "relative",
    width: 10,
    height: 4,
    flexShrink: 0,
  },
  framePressable: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleIcon2: {
    position: "relative",
    width: 10,
    height: 4,
    flexShrink: 0,
  },
  framePressable1: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleIcon3: {
    position: "relative",
    width: 20,
    height: 4,
    flexShrink: 0,
  },
  frameView2: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView3: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text: {
    position: "relative",
    fontSize: 64,
    fontFamily: "Raleway",
    color: "rgba(188, 74, 60, 0.54)",
    textAlign: "left",
  },
  vSpaceMatchesAllThreeDimen: {
    position: "relative",
    fontSize: 20,
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
    width: 291,
  },
  frameView4: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView5: {
    height: 107,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  hoverMeText: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#bc4a3c",
    textAlign: "left",
  },
  buttonView: {
    borderStyle: "solid",
    borderColor: "#bc4a3c",
    borderWidth: 1.2,
    position: "relative",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 18,
    paddingVertical: 11,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    zIndex: 0,
  },
  rectangleView: {
    position: "absolute",
    top: 30,
    left: -22,
    borderRadius: 100,
    backgroundColor: "#bc4a3c",
    width: 25,
    height: 25,
    flexShrink: 0,
    zIndex: 1,
  },
  button3Pressable: {
    borderStyle: "solid",
    borderColor: "#bc4a3c",
    borderWidth: 1,
    position: "relative",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  skipNowText: {
    position: "relative",
    fontSize: 16,
    fontFamily: "Raleway",
    color: "#333",
    textAlign: "left",
  },
  arrowIcon: {
    position: "relative",
    width: 23,
    height: 0,
    flexShrink: 0,
  },
  frameView6: {
    backgroundColor: "#fef1e6",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  frameView7: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 10,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  frameView8: {
    height: 220,
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 19,
    paddingBottom: 48,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView9: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  diversityView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 852,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default Diversity;
