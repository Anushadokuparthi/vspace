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

const Budget = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.budgetView}>
      <View style={styles.frameView30}>
        <View style={[styles.frameView29, styles.mt8]}>
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
              <View style={styles.stepperView}>
                <Text style={styles.text1}>2</Text>
              </View>
            </View>
            <View style={[styles.frameView3, styles.ml29]}>
              <View style={styles.lineView1} />
            </View>
            <View style={[styles.frameView4, styles.ml29]}>
              <Pressable
                style={styles.stepperPressable1}
                onPress={() => navigation.navigate("Space")}
              >
                <Text style={styles.text2}>3</Text>
              </Pressable>
            </View>
          </View>
          <View style={[styles.frameView28, styles.mt14]}>
            <View style={styles.frameView24}>
              <View style={styles.frameView6}>
                <Image
                  style={styles.dashiconsarrowDown}
                  resizeMode="cover"
                  source={require("../assets/dashiconsarrowdown2.png")}
                />
                <Text style={[styles.selectBudgetText, styles.ml1]}>
                  Select Budget
                </Text>
              </View>
              <View style={[styles.frameView15, styles.mt11]}>
                <View style={styles.frameView10}>
                  <View style={styles.frameView7}>
                    <Image
                      style={styles.hutIcon}
                      resizeMode="cover"
                      source={require("../assets/hut.png")}
                    />
                  </View>
                  <View style={styles.frameView9}>
                    <View style={styles.frameView8}>
                      <Text style={styles.economicText}>Economic</Text>
                    </View>
                    <View style={[styles.chevronLeftView, styles.ml10]}>
                      <Image
                        style={styles.vectorIcon}
                        resizeMode="cover"
                        source={require("../assets/vector12.png")}
                      />
                    </View>
                  </View>
                </View>
                <View style={[styles.frameView14, styles.ml12]}>
                  <View style={styles.frameView11}>
                    <Image
                      style={styles.buildingIcon}
                      resizeMode="cover"
                      source={require("../assets/building.png")}
                    />
                  </View>
                  <View style={styles.frameView13}>
                    <View style={styles.frameView12}>
                      <Text style={styles.standardText}>Standard</Text>
                    </View>
                    <View style={[styles.chevronLeftView1, styles.ml10]}>
                      <Image
                        style={styles.vectorIcon1}
                        resizeMode="cover"
                        source={require("../assets/vector13.png")}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.frameView23, styles.mt11]}>
                <Pressable
                  style={styles.framePressable}
                  onPress={() => navigation.navigate("Space")}
                >
                  <View style={styles.frameView16}>
                    <Image
                      style={styles.downtownIcon}
                      resizeMode="cover"
                      source={require("../assets/downtown.png")}
                    />
                  </View>
                  <View style={styles.frameView18}>
                    <View style={styles.frameView17}>
                      <Text style={styles.premiumText}>Premium</Text>
                    </View>
                    <View style={[styles.chevronLeftView2, styles.ml10]}>
                      <Image
                        style={styles.vectorIcon2}
                        resizeMode="cover"
                        source={require("../assets/vector12.png")}
                      />
                    </View>
                  </View>
                </Pressable>
                <View style={[styles.frameView22, styles.ml12]}>
                  <View style={styles.frameView19}>
                    <Image
                      style={styles.cityBuildingsIcon}
                      resizeMode="cover"
                      source={require("../assets/city-buildings.png")}
                    />
                  </View>
                  <View style={styles.frameView21}>
                    <View style={styles.frameView20}>
                      <Text style={styles.luxuryText}>Luxury</Text>
                    </View>
                    <View style={[styles.chevronLeftView3, styles.ml10]}>
                      <Image
                        style={styles.vectorIcon3}
                        resizeMode="cover"
                        source={require("../assets/vector12.png")}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.frameView27, styles.mt5]}>
              <Pressable
                style={styles.framePressable1}
                onPress={() => navigation.navigate("Home")}
              >
                <View style={styles.backView}>
                  <Image
                    style={styles.vectorIcon4}
                    resizeMode="cover"
                    source={require("../assets/vector3.png")}
                  />
                </View>
                <View style={styles.frameView25}>
                  <Text style={styles.backText}>Back</Text>
                </View>
              </Pressable>
              <View style={[styles.frameView26, styles.ml5]}>
                <View style={styles.button3View}>
                  <Pressable
                    style={styles.buttonPressable}
                    onPress={() => navigation.navigate("Space")}
                  >
                    <Text style={styles.hoverMeText}>Next</Text>
                  </Pressable>
                  <View style={styles.rectangleView} />
                </View>
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
  ml10: {
    marginLeft: 10,
  },
  ml12: {
    marginLeft: 12,
  },
  mt11: {
    marginTop: 11,
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
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
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
  stepperView: {
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
    color: "#555",
    textAlign: "left",
  },
  stepperPressable1: {
    borderRadius: 50,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.15)",
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
  selectBudgetText: {
    position: "relative",
    fontSize: 14,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#fff",
    textAlign: "left",
    width: 105,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  frameView6: {
    backgroundColor: "#bc4a3c",
    borderStyle: "solid",
    borderColor: "rgba(188, 74, 60, 0.7)",
    borderWidth: 1,
    position: "relative",
    width: 318,
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
  hutIcon: {
    position: "relative",
    width: 50,
    height: 50,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView7: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  economicText: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Inter",
    color: "#333",
    textAlign: "left",
  },
  frameView8: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  vectorIcon: {
    position: "relative",
    width: 7.58,
    height: 10.83,
    flexShrink: 0,
    display: "none",
  },
  chevronLeftView: {
    flexDirection: "row",
    paddingHorizontal: 3,
    paddingVertical: 1,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    display: "none",
  },
  frameView9: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView10: {
    flex: 1,
    backgroundColor: "#fff",
    shadowColor: "rgba(188, 74, 60, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#f5f5f5",
    borderWidth: 1,
    position: "relative",
    height: 125,
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  buildingIcon: {
    position: "relative",
    width: 50,
    height: 50,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView11: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  standardText: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Inter",
    color: "#333",
    textAlign: "left",
  },
  frameView12: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  vectorIcon1: {
    position: "relative",
    width: 7.58,
    height: 10.83,
    flexShrink: 0,
    display: "none",
  },
  chevronLeftView1: {
    flexDirection: "row",
    paddingHorizontal: 3,
    paddingVertical: 1,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    display: "none",
  },
  frameView13: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView14: {
    flex: 1,
    backgroundColor: "#fff",
    shadowColor: "rgba(188, 74, 60, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#f5f5f5",
    borderWidth: 1,
    position: "relative",
    height: 125,
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView15: {
    width: 317,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  downtownIcon: {
    position: "relative",
    width: 50,
    height: 50,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView16: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  premiumText: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Inter",
    color: "#333",
    textAlign: "left",
  },
  frameView17: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  vectorIcon2: {
    position: "relative",
    width: 7.58,
    height: 10.83,
    flexShrink: 0,
    display: "none",
  },
  chevronLeftView2: {
    flexDirection: "row",
    paddingHorizontal: 3,
    paddingVertical: 1,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    display: "none",
  },
  frameView18: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  framePressable: {
    flex: 1,
    backgroundColor: "#fff",
    shadowColor: "rgba(188, 74, 60, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#f5f5f5",
    borderWidth: 1,
    position: "relative",
    height: 125,
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  cityBuildingsIcon: {
    position: "relative",
    width: 50,
    height: 50,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView19: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  luxuryText: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Inter",
    color: "#333",
    textAlign: "left",
  },
  frameView20: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  vectorIcon3: {
    position: "relative",
    width: 7.58,
    height: 10.83,
    flexShrink: 0,
    display: "none",
  },
  chevronLeftView3: {
    flexDirection: "row",
    paddingHorizontal: 3,
    paddingVertical: 1,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    display: "none",
  },
  frameView21: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView22: {
    flex: 1,
    backgroundColor: "#fff",
    shadowColor: "rgba(188, 74, 60, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#f5f5f5",
    borderWidth: 1,
    position: "relative",
    height: 125,
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView23: {
    width: 317,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView24: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  vectorIcon4: {
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
  frameView25: {
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  framePressable1: {
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
  buttonPressable: {
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
  button3View: {
    width: 96,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  frameView26: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameView27: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView28: {
    backgroundColor: "rgba(254, 241, 230, 0.35)",
    width: 357,
    flexDirection: "column",
    padding: 15,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView29: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView30: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  budgetView: {
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

export default Budget;
