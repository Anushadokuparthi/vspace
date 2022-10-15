import * as React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput as RNPTextInput } from "react-native-paper";

const Space = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.spaceView}>
      <View style={styles.frameView18}>
        <View style={[styles.frameView17, styles.mt18]}>
          <View style={styles.frameView5}>
            <View style={styles.frameView}>
              <Pressable
                style={styles.stepperPressable}
                onPress={() => navigation.navigate("Home")}
              >
                <Text style={styles.text}>1</Text>
              </Pressable>
            </View>
            <View style={[styles.frameView1, styles.ml29]}>
              <View style={styles.lineView} />
            </View>
            <View style={[styles.frameView2, styles.ml29]}>
              <Pressable
                style={styles.stepperPressable1}
                onPress={() => navigation.navigate("Budget")}
              >
                <Text style={styles.text1}>2</Text>
              </Pressable>
            </View>
            <View style={[styles.frameView3, styles.ml29]}>
              <View style={styles.lineView1} />
            </View>
            <View style={[styles.frameView4, styles.ml29]}>
              <Pressable style={styles.stepperPressable2}>
                <Text style={styles.text2}>3</Text>
              </Pressable>
            </View>
          </View>
          <View style={[styles.frameView16, styles.mt14]}>
            <View style={styles.frameView7}>
              <View style={styles.frameView6}>
                <Image
                  style={styles.dashiconsarrowDown}
                  resizeMode="cover"
                  source={require("../assets/dashiconsarrowdown.png")}
                />
                <Text style={[styles.selectMeasurementsText, styles.ml1]}>
                  Select measurements
                </Text>
              </View>
            </View>
            <View style={[styles.frameView12, styles.mt5]}>
              <View style={styles.frameView8}>
                <Text style={styles.enterWidthAndHeightInFt}>
                  Enter Width and Height (in ft)
                </Text>
              </View>
              <View style={styles.frameView11}>
                <View style={styles.frameView9}>
                  <RNPTextInput
                    style={styles.rectangleRNPTextInput}
                    placeholder="4"
                    mode="flat"
                    placeholderTextColor="#ccc"
                    activeUnderlineColor="#bc4a3c"
                    theme={{ colors: { background: "#fff" } }}
                  />
                </View>
                <View style={[styles.frameView10, styles.ml9]}>
                  <RNPTextInput
                    style={styles.rectangleRNPTextInput1}
                    placeholder="4"
                    mode="flat"
                    placeholderTextColor="#ccc"
                    activeUnderlineColor="#bc4a3c"
                    theme={{ colors: { background: "#fff" } }}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.frameView15, styles.mt5]}>
              <Pressable
                style={styles.framePressable}
                onPress={() => navigation.navigate("Budget")}
              >
                <View style={styles.backView}>
                  <Image
                    style={styles.vectorIcon}
                    resizeMode="cover"
                    source={require("../assets/vector3.png")}
                  />
                </View>
                <View style={styles.frameView13}>
                  <Text style={styles.backText}>Back</Text>
                </View>
              </Pressable>
              <View style={[styles.frameView14, styles.ml5]}>
                <Pressable
                  style={styles.button3Pressable}
                  onPress={() => navigation.navigate("List")}
                >
                  <View style={styles.buttonView}>
                    <Text style={styles.hoverMeText}>Next</Text>
                  </View>
                  <View style={styles.rectangleView} />
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
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
  ml29: {
    marginLeft: 29,
  },
  ml1: {
    marginLeft: 1,
  },
  ml9: {
    marginLeft: 9,
  },
  ml5: {
    marginLeft: 5,
  },
  mt5: {
    marginTop: 5,
  },
  mt14: {
    marginTop: 14,
  },
  mt18: {
    marginTop: 18,
  },
  text: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Rubik",
    color: "#fff",
    textAlign: "left",
  },
  stepperPressable: {
    borderRadius: 50,
    backgroundColor: "#bc4a3c",
    shadowColor: "rgba(188, 74, 60, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 30,
    height: 30,
    flexShrink: 0,
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  lineView: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#ccc",
    borderTopWidth: 1,
    width: 79,
    height: 1,
    flexShrink: 0,
  },
  frameView1: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Rubik",
    color: "#fff",
    textAlign: "left",
  },
  stepperPressable1: {
    borderRadius: 50,
    backgroundColor: "#bc4a3c",
    shadowColor: "rgba(188, 74, 60, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 30,
    height: 30,
    flexShrink: 0,
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView2: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  lineView1: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#ccc",
    borderTopWidth: 1,
    width: 79,
    height: 1,
    flexShrink: 0,
  },
  frameView3: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  text2: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Rubik",
    color: "#fff",
    textAlign: "left",
  },
  stepperPressable2: {
    borderRadius: 50,
    backgroundColor: "#bc4a3c",
    shadowColor: "rgba(188, 74, 60, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 30,
    height: 30,
    flexShrink: 0,
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView4: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView5: {
    width: 357,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  dashiconsarrowDown: {
    position: "relative",
    width: 15,
    height: 15,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  selectMeasurementsText: {
    position: "relative",
    fontSize: 14,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#fff",
    textAlign: "left",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  frameView6: {
    alignSelf: "stretch",
    backgroundColor: "#bc4a3c",
    borderStyle: "solid",
    borderColor: "rgba(188, 74, 60, 0.7)",
    borderWidth: 1,
    position: "relative",
    flexDirection: "row",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  frameView7: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  enterWidthAndHeightInFt: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView8: {
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleRNPTextInput: {
    position: "relative",
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(188, 74, 60, 0.54)",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    width: 143.5,
    height: 53,
    flexShrink: 0,
    alignSelf: "center",
  },
  frameView9: {
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleRNPTextInput1: {
    position: "relative",
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(188, 74, 60, 0.54)",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    width: 143.5,
    height: 53,
    flexShrink: 0,
    alignSelf: "center",
  },
  frameView10: {
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView11: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView12: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  vectorIcon: {
    position: "relative",
    width: 6.42,
    height: 11.08,
    flexShrink: 0,
  },
  backView: {
    alignSelf: "stretch",
    width: 27,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 4,
    paddingVertical: 1,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  backText: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Inter",
    color: "#555",
    textAlign: "left",
  },
  frameView13: {
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  framePressable: {
    flex: 1,
    height: 37,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
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
    flex: 1,
    borderStyle: "solid",
    borderColor: "#bc4a3c",
    borderWidth: 1.2,
    position: "relative",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 18,
    paddingVertical: 11,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
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
    width: 96,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView14: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameView15: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView16: {
    backgroundColor: "rgba(254, 241, 230, 0.35)",
    width: 357,
    flexDirection: "column",
    padding: 15,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView17: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView18: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  spaceView: {
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

export default Space;
