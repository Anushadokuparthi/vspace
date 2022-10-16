import * as React from "react";
import { useState } from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const [rectangleTextInput, setRectangleTextInput] =
    useState("Anusha Dokuparthi");
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.registerPressable}
      onPress={() => navigation.navigate("Verify")}
    >
      <View style={styles.frameView12}>
        <View style={styles.frameView10}>
          <View style={styles.frameView}>
            <Text style={styles.registerText}>Register</Text>
          </View>
          <View style={[styles.frameView4, styles.mt12]}>
            <View style={styles.frameView1}>
              <Text style={styles.mobileNumber1}>
                <Text style={styles.mobileNumber}>{`Mobile Number `}</Text>
                <Text style={styles.text}>*</Text>
              </Text>
            </View>
            <View style={styles.frameView3}>
              <View style={styles.frameView2}>
                <View style={styles.groupView}>
                  <View style={styles.rectangleView} />
                  <Text style={styles.text1}>+91</Text>
                  <Image
                    style={styles.dashiconsarrowDownAlt2}
                    resizeMode="cover"
                    source={require("../assets/dashiconsarrowdownalt2.png")}
                  />
                </View>
              </View>
              <RNPTextInput
                style={styles.frameRNPTextInput}
                placeholder="9876543210"
                mode="flat"
              />
            </View>
          </View>
          <View style={[styles.frameView7, styles.mt12]}>
            <View style={styles.frameView5}>
              <Text style={styles.nameText1}>
                <Text style={styles.nameText}>{`Name `}</Text>
                <Text style={styles.text2}>*</Text>
              </Text>
            </View>
            <View style={styles.frameView6}>
              <RNPTextInput
                style={styles.rectangleRNPTextInput}
                mode="outlined"
                value={rectangleTextInput}
                onChangeText={setRectangleTextInput}
                theme={{ colors: { background: "rgba(252, 216, 187, 0.1)" } }}
              />
            </View>
          </View>
          <View style={[styles.frameView9, styles.mt12]}>
            <View style={styles.frameView8}>
              <Text style={styles.alreadyRegisteredText} numberOfLines={1}>
                <Text
                  style={styles.alreadyRegistered}
                >{`Already registered?  `}</Text>
                <Text style={styles.blankLineText}> </Text>
              </Text>
            </View>
            <Pressable
              style={[styles.framePressable, styles.ml26]}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.loginHereText}>Login here</Text>
            </Pressable>
          </View>
        </View>
        <View style={[styles.frameView11, styles.mt4]}>
          <View style={styles.button17Variant3View}>
            <View style={styles.rectangleView1} />
            <View style={styles.buttonView}>
              <Text style={styles.hoverMeText}>Submit</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.frameView14, styles.mt48]}>
        <View style={styles.groupView1}>
          <Image
            style={styles.rectangleIcon}
            resizeMode="cover"
            source={require("../assets/rectangle-56.png")}
          />
          <View style={styles.frameView13}>
            <Text style={styles.vSpaceText}>VSpace</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ml26: {
    marginLeft: 26,
  },
  mt12: {
    marginTop: 12,
  },
  mt4: {
    marginTop: 4,
  },
  mt48: {
    marginTop: 48,
  },
  registerText: {
    position: "relative",
    fontSize: 32,
    fontFamily: "Rubik",
    color: "#bc4a3c",
    textAlign: "left",
    width: 143.86,
    transform: [
      {
        rotate: "179.38deg",
      },
    ],
  },
  frameView: {
    width: 145.4,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  mobileNumber: {
    color: "#555",
  },
  text: {
    color: "rgba(0, 0, 0, 0.22)",
  },
  mobileNumber1: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Rubik",
    textAlign: "left",
  },
  frameView1: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(252, 216, 187, 0.15)",
    borderStyle: "solid",
    borderColor: "rgba(188, 74, 60, 0.54)",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    width: 76.5,
    height: 53,
  },
  text1: {
    position: "absolute",
    top: 17,
    left: 13.26,
    fontSize: 16,
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
    width: 27.54,
  },
  dashiconsarrowDownAlt2: {
    position: "absolute",
    top: 17,
    left: 47.94,
    width: 20.4,
    height: 20,
    overflow: "hidden",
  },
  groupView: {
    position: "relative",
    width: 76.5,
    height: 53,
    flexShrink: 0,
  },
  frameView2: {
    width: 76,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameRNPTextInput: {
    width: 259,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView3: {
    width: 336,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView4: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  nameText: {
    color: "#555",
  },
  text2: {
    color: "rgba(0, 0, 0, 0.22)",
  },
  nameText1: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Rubik",
    textAlign: "left",
  },
  frameView5: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleRNPTextInput: {
    position: "relative",
    borderStyle: "solid",
    width: 336,
    height: 53,
    flexShrink: 0,
  },
  frameView6: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView7: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  alreadyRegistered: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText: {
    margin: 0,
  },
  alreadyRegisteredText: {
    position: "relative",
    fontSize: 14,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#aaa",
    whiteSpace: "pre-wrap",
    textAlign: "left",
  },
  frameView8: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  loginHereText: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Rubik",
    color: "#bc4a3c",
    textAlign: "left",
  },
  framePressable: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView9: {
    width: 198,
    height: 17,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView10: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView1: {
    position: "absolute",
    top: -60,
    left: -22,
    borderRadius: 100,
    backgroundColor: "#bc4a3c",
    width: 125,
    height: 125,
    flexShrink: 0,
    zIndex: 0,
  },
  hoverMeText: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  buttonView: {
    borderStyle: "solid",
    borderColor: "#bc4a3c",
    borderWidth: 1.2,
    position: "relative",
    width: 75,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 18,
    paddingVertical: 11,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  button17Variant3View: {
    width: 92,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  frameView11: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    boxSizing: "border-box",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameView12: {
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 20,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rectangleIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 393,
    height: 437,
  },
  vSpaceText: {
    position: "relative",
    fontSize: 32,
    fontFamily: "Raleway",
    color: "#bc4a3c",
    textAlign: "left",
  },
  frameView13: {
    position: "absolute",
    top: 350,
    left: 236,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  groupView1: {
    position: "relative",
    width: 393,
    height: 437,
    flexShrink: 0,
  },
  frameView14: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  registerPressable: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 852,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default Register;
