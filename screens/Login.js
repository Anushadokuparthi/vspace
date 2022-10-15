import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginView}>
      <View style={styles.frameView10}>
        <View style={styles.frameView8}>
          <View style={styles.frameView}>
            <Text style={styles.loginText}>Login</Text>
          </View>
          <View style={[styles.frameView2, styles.mt12]}>
            <View style={styles.frameView1}>
              <Text style={styles.mobileNumber1}>
                <Text style={styles.mobileNumber}>{`Mobile Number `}</Text>
                <Text style={styles.text}>*</Text>
              </Text>
            </View>
            <RNPTextInput
              style={styles.frameRNPTextInput}
              placeholder="+91 8907654321"
              mode="flat"
              placeholderTextColor="#999"
              underlineColor="rgba(188, 74, 60, 0.54)"
              activeUnderlineColor="#bc4a3c"
              theme={{ colors: { text: "#555", background: "#fffcf9" } }}
            />
          </View>
          <View style={[styles.frameView5, styles.mt12]}>
            <View style={styles.frameView3}>
              <Text style={styles.nameText1}>
                <Text style={styles.nameText}>{`Name `}</Text>
                <Text style={styles.text1}>*</Text>
              </Text>
            </View>
            <View style={styles.frameView4}>
              <View style={styles.rectangleView} />
            </View>
          </View>
          <View style={[styles.frameView7, styles.mt12]}>
            <View style={styles.frameView6}>
              <Text style={styles.notRegisteredText1} numberOfLines={1}>
                <Text style={styles.notRegisteredText}>Not registered?</Text>
                <Text style={styles.blankLineText}> </Text>
              </Text>
            </View>
            <Pressable
              style={[styles.framePressable, styles.ml10]}
              onPress={() => navigation.navigate("Register")}
            >
              <Pressable
                style={styles.createAccountPressable}
                onPress={() => navigation.navigate("Register")}
              >
                <Text style={styles.createAccountText}>Create account</Text>
              </Pressable>
            </Pressable>
          </View>
        </View>
        <View style={[styles.frameView9, styles.mt4]}>
          <Pressable
            style={styles.button17Variant3Pressable}
            onPress={() => navigation.navigate("Home")}
          >
            <View style={styles.rectangleView1} />
            <View style={styles.buttonView}>
              <Text style={styles.hoverMeText}>Submit</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={[styles.frameView12, styles.mt36]}>
        <View style={styles.groupView}>
          <Image
            style={styles.rectangleIcon}
            resizeMode="cover"
            source={require("../assets/rectangle-53.png")}
          />
          <View style={styles.frameView11}>
            <Text style={styles.vSpaceText}>VSpace</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml10: {
    marginLeft: 10,
  },
  mt12: {
    marginTop: 12,
  },
  mt4: {
    marginTop: 4,
  },
  mt36: {
    marginTop: 36,
  },
  loginText: {
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
  frameRNPTextInput: {
    width: 336,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  frameView2: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  nameText: {
    color: "#555",
  },
  text1: {
    color: "rgba(0, 0, 0, 0.22)",
  },
  nameText1: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Rubik",
    textAlign: "left",
  },
  frameView3: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "rgba(252, 216, 187, 0.1)",
    borderStyle: "solid",
    borderColor: "rgba(188, 74, 60, 0.54)",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    width: 336,
    height: 53,
    flexShrink: 0,
  },
  frameView4: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView5: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  notRegisteredText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText: {
    margin: 0,
  },
  notRegisteredText1: {
    position: "relative",
    fontSize: 14,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#aaa",
    textAlign: "left",
  },
  frameView6: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  createAccountText: {
    fontSize: 14,
    fontFamily: "Rubik",
    color: "#bc4a3c",
    textAlign: "left",
  },
  createAccountPressable: {
    position: "relative",
  },
  framePressable: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView7: {
    alignSelf: "stretch",
    height: 17,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView8: {
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
  button17Variant3Pressable: {
    width: 92,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  frameView9: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    boxSizing: "border-box",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameView10: {
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
    height: 545,
  },
  vSpaceText: {
    position: "relative",
    fontSize: 32,
    fontFamily: "Raleway",
    color: "#bc4a3c",
    textAlign: "left",
  },
  frameView11: {
    position: "absolute",
    top: 446.56,
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
    height: 545,
    flexShrink: 0,
  },
  frameView12: {
    height: 545,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  loginView: {
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

export default Login;
