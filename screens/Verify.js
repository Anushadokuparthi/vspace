import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Verify = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.verifyView}>
      <View style={styles.frameView11}>
        <View style={styles.frameView}>
          <Text style={styles.verifyOTPText}>Verify OTP</Text>
        </View>
        <View style={[styles.frameView7, styles.mt15]}>
          <View style={styles.frameView1}>
            <Text style={styles.enterOTPText}>Enter OTP</Text>
          </View>
          <View style={styles.frameView6}>
            <View style={styles.frameView2}>
              <RNPTextInput
                style={styles.rectangleRNPTextInput}
                mode="flat"
                theme={{ colors: { background: "rgba(252, 216, 187, 0.15)" } }}
              />
            </View>
            <View style={styles.frameView3}>
              <RNPTextInput
                style={styles.rectangleRNPTextInput1}
                mode="flat"
                theme={{ colors: { background: "rgba(252, 216, 187, 0.15)" } }}
              />
            </View>
            <View style={styles.frameView4}>
              <RNPTextInput
                style={styles.rectangleRNPTextInput2}
                mode="flat"
                theme={{ colors: { background: "rgba(252, 216, 187, 0.15)" } }}
              />
            </View>
            <View style={styles.frameView5}>
              <RNPTextInput
                style={styles.rectangleRNPTextInput3}
                mode="flat"
                theme={{ colors: { background: "rgba(252, 216, 187, 0.15)" } }}
              />
            </View>
          </View>
        </View>
        <View style={[styles.frameView10, styles.mt15]}>
          <View style={styles.frameView8}>
            <Pressable style={styles.resendOTPPressable} onPress={() => {}}>
              <Text style={styles.resendOTPText}>Resend OTP</Text>
            </Pressable>
          </View>
          <View style={[styles.frameView9, styles.ml124]}>
            <Pressable
              style={styles.button17Variant3Pressable}
              onPress={() => navigation.navigate("Home")}
            >
              <View style={styles.rectangleView} />
              <View style={styles.buttonView}>
                <Text style={styles.hoverMeText}>Submit</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={[styles.frameView13, styles.mt59]}>
        <View style={styles.groupView}>
          <Image
            style={styles.rectangleIcon}
            resizeMode="cover"
            source={require("../assets/rectangle-55.png")}
          />
          <View style={styles.frameView12}>
            <Text style={styles.vSpaceText}>VSpace</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml124: {
    marginLeft: 124,
  },
  mt15: {
    marginTop: 15,
  },
  mt59: {
    marginTop: 59,
  },
  verifyOTPText: {
    position: "relative",
    fontSize: 32,
    fontFamily: "Rubik",
    color: "#bc4a3c",
    textAlign: "left",
  },
  frameView: {
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  enterOTPText: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView1: {
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleRNPTextInput: {
    position: "relative",
    backgroundColor: "rgba(252, 216, 187, 0.15)",
    borderStyle: "solid",
    borderColor: "rgba(188, 74, 60, 0.54)",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    width: 75,
    height: 53,
    flexShrink: 0,
  },
  frameView2: {
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleRNPTextInput1: {
    position: "relative",
    backgroundColor: "rgba(252, 216, 187, 0.15)",
    borderStyle: "solid",
    borderColor: "rgba(188, 74, 60, 0.54)",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    width: 75,
    height: 53,
    flexShrink: 0,
  },
  frameView3: {
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleRNPTextInput2: {
    position: "relative",
    backgroundColor: "rgba(252, 216, 187, 0.15)",
    borderStyle: "solid",
    borderColor: "rgba(188, 74, 60, 0.54)",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    width: 75,
    height: 53,
    flexShrink: 0,
  },
  frameView4: {
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleRNPTextInput3: {
    position: "relative",
    backgroundColor: "rgba(252, 216, 187, 0.15)",
    borderStyle: "solid",
    borderColor: "rgba(188, 74, 60, 0.54)",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    width: 75,
    height: 53,
    flexShrink: 0,
  },
  frameView5: {
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView6: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView7: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  resendOTPText: {
    fontSize: 14,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  resendOTPPressable: {
    position: "relative",
  },
  frameView8: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  rectangleView: {
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
  button17Variant3Pressable: {
    width: 92,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  frameView9: {
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameView10: {
    width: 360,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameView11: {
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 20,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 393,
    height: 502,
  },
  vSpaceText: {
    position: "relative",
    fontSize: 32,
    fontFamily: "Raleway",
    color: "#bc4a3c",
    textAlign: "left",
  },
  frameView12: {
    position: "absolute",
    top: 415,
    left: 236,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  groupView: {
    position: "relative",
    width: 393,
    height: 502,
    flexShrink: 0,
  },
  frameView13: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  verifyView: {
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

export default Verify;
