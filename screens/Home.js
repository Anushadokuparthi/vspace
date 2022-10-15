import * as React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  ImageBackground,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeView}>
      <View style={styles.frameView42}>
        <View style={[styles.frameView41, styles.mt15]}>
          <ImageBackground
            style={styles.frameIcon}
            resizeMode="cover"
            source={require("../assets/frame151.png")}
          >
            <View style={styles.frameView}>
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require("../assets/group-16.png")}
              />
            </View>
            <View style={[styles.frameView1, styles.ml5]}>
              <Text style={styles.get360ViewOfYourDesired}>
                Get 360° view of your desired theme for your house by following
                3 simple steps
              </Text>
            </View>
          </ImageBackground>
          <View style={[styles.frameView40, styles.mt18]}>
            <View style={styles.frameView7}>
              <View style={styles.frameView2}>
                <View style={styles.stepperView}>
                  <Text style={styles.text}>1</Text>
                </View>
              </View>
              <View style={[styles.frameView3, styles.ml29]}>
                <View style={styles.lineView} />
              </View>
              <View style={[styles.frameView4, styles.ml29]}>
                <TouchableHighlight
                  style={styles.stepperTouchableHighlight}
                  underlayColor="#bc4a3c"
                  onPress={() => navigation.navigate("Budget")}
                >
                  <Text style={styles.text1}>2</Text>
                </TouchableHighlight>
              </View>
              <View style={[styles.frameView5, styles.ml29]}>
                <View style={styles.lineView1} />
              </View>
              <View style={[styles.frameView6, styles.ml29]}>
                <TouchableHighlight
                  style={styles.stepperTouchableHighlight1}
                  underlayColor="#bc4a3c"
                  onPress={() => navigation.navigate("Space")}
                >
                  <Text style={styles.text2}>3</Text>
                </TouchableHighlight>
              </View>
            </View>
            <View style={[styles.frameView39, styles.mt14]}>
              <View style={styles.frameView37}>
                <View style={styles.frameView8}>
                  <Image
                    style={styles.dashiconsarrowDown}
                    resizeMode="cover"
                    source={require("../assets/dashiconsarrowdown3.png")}
                  />
                  <Text style={[styles.selectCategoryText, styles.ml1]}>
                    Select Category
                  </Text>
                </View>
                <View style={[styles.frameView15, styles.mt11]}>
                  <Pressable
                    style={styles.livingroomPressable}
                    onPress={() => navigation.navigate("Budget")}
                  >
                    <View style={styles.frameView9}>
                      <Image
                        style={styles.tvOnConsole}
                        resizeMode="cover"
                        source={require("../assets/tv-on-console.png")}
                      />
                    </View>
                    <View style={styles.frameView11}>
                      <View style={styles.frameView10}>
                        <Text style={styles.livingRoomText}>Living Room</Text>
                      </View>
                      <View style={[styles.chevronLeftView, styles.ml10]}>
                        <Image
                          style={styles.vectorIcon}
                          resizeMode="cover"
                          source={require("../assets/vector23.png")}
                        />
                      </View>
                    </View>
                  </Pressable>
                  <View style={[styles.kitchenView, styles.ml12]}>
                    <View style={styles.frameView12}>
                      <Image
                        style={styles.kitchenRoomIcon}
                        resizeMode="cover"
                        source={require("../assets/kitchen-room.png")}
                      />
                    </View>
                    <View style={styles.frameView14}>
                      <View style={styles.frameView13}>
                        <Text style={styles.kitchenText}>Kitchen</Text>
                      </View>
                      <View style={[styles.chevronLeftView1, styles.ml10]}>
                        <Image
                          style={styles.vectorIcon1}
                          resizeMode="cover"
                          source={require("../assets/vector24.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.frameView22, styles.mt11]}>
                  <View style={styles.bedroomView}>
                    <View style={styles.frameView16}>
                      <Image
                        style={styles.bedroomInteriorIcon}
                        resizeMode="cover"
                        source={require("../assets/bedroom-interior.png")}
                      />
                    </View>
                    <View style={styles.frameView18}>
                      <View style={styles.frameView17}>
                        <Text style={styles.bedRoomText}>Bed Room</Text>
                      </View>
                      <View style={[styles.chevronLeftView2, styles.ml10]}>
                        <Image
                          style={styles.vectorIcon2}
                          resizeMode="cover"
                          source={require("../assets/vector23.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.bathroomView, styles.ml12]}>
                    <View style={styles.frameView19}>
                      <Image
                        style={styles.toiletRoomIcon}
                        resizeMode="cover"
                        source={require("../assets/toilet-room.png")}
                      />
                    </View>
                    <View style={styles.frameView21}>
                      <View style={styles.frameView20}>
                        <Text style={styles.bathRoomText}>Bath Room</Text>
                      </View>
                      <View style={[styles.chevronLeftView3, styles.ml10]}>
                        <Image
                          style={styles.vectorIcon3}
                          resizeMode="cover"
                          source={require("../assets/vector24.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.frameView29, styles.mt11]}>
                  <View style={styles.balconyView}>
                    <View style={styles.frameView23}>
                      <Image
                        style={styles.growingPlantIcon}
                        resizeMode="cover"
                        source={require("../assets/growing-plant.png")}
                      />
                    </View>
                    <View style={styles.frameView25}>
                      <View style={styles.frameView24}>
                        <Text style={styles.balconyText}>Balcony</Text>
                      </View>
                      <View style={[styles.chevronLeftView4, styles.ml10]}>
                        <Image
                          style={styles.vectorIcon4}
                          resizeMode="cover"
                          source={require("../assets/vector24.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.kidsroomView, styles.ml12]}>
                    <View style={styles.frameView26}>
                      <Image
                        style={styles.motherRoomIcon}
                        resizeMode="cover"
                        source={require("../assets/mother-room.png")}
                      />
                    </View>
                    <View style={styles.frameView28}>
                      <View style={styles.frameView27}>
                        <Text style={styles.kidsRoomText}>Kids Room</Text>
                      </View>
                      <View style={[styles.chevronLeftView5, styles.ml10]}>
                        <Image
                          style={styles.vectorIcon5}
                          resizeMode="cover"
                          source={require("../assets/vector23.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.frameView36, styles.mt11]}>
                  <View style={styles.poolareaView}>
                    <View style={styles.frameView30}>
                      <Image
                        style={styles.poolIcon}
                        resizeMode="cover"
                        source={require("../assets/pool.png")}
                      />
                    </View>
                    <View style={styles.frameView32}>
                      <View style={styles.frameView31}>
                        <Text style={styles.poolAreaText}>Pool Area</Text>
                      </View>
                      <View style={[styles.chevronLeftView6, styles.ml10]}>
                        <Image
                          style={styles.vectorIcon6}
                          resizeMode="cover"
                          source={require("../assets/vector24.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.officespaceView, styles.ml12]}>
                    <View style={styles.frameView33}>
                      <Image
                        style={styles.workingWithALaptop}
                        resizeMode="cover"
                        source={require("../assets/working-with-a-laptop.png")}
                      />
                    </View>
                    <View style={styles.frameView35}>
                      <View style={styles.frameView34}>
                        <Text style={styles.officeSpaceText}>Office Space</Text>
                      </View>
                      <View style={[styles.chevronLeftView7, styles.ml10]}>
                        <Image
                          style={styles.vectorIcon7}
                          resizeMode="cover"
                          source={require("../assets/vector24.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.frameView38, styles.mt5]}>
                <Pressable
                  style={styles.nextPressable}
                  onPress={() => navigation.navigate("Budget")}
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
  ml5: {
    marginLeft: 5,
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
  mt5: {
    marginTop: 5,
  },
  mt14: {
    marginTop: 14,
  },
  mt18: {
    marginTop: 18,
  },
  mt15: {
    marginTop: 15,
  },
  groupIcon: {
    position: "relative",
    width: 65,
    height: 59,
    flexShrink: 0,
  },
  frameView: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  get360ViewOfYourDesired: {
    position: "relative",
    fontSize: 14,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
    width: 256,
  },
  frameView1: {
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameIcon: {
    width: 357,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
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
  lineView: {
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
  text1: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  stepperTouchableHighlight: {
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
  lineView1: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#ccc",
    borderTopWidth: 1,
    width: 79,
    height: 1,
    flexShrink: 0,
  },
  frameView5: {
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
  stepperTouchableHighlight1: {
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
  frameView6: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView7: {
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
  selectCategoryText: {
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
  frameView8: {
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
  tvOnConsole: {
    position: "relative",
    width: 50,
    height: 50,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView9: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  livingRoomText: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Inter",
    color: "#333",
    textAlign: "left",
  },
  frameView10: {
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
  frameView11: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  livingroomPressable: {
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
  kitchenRoomIcon: {
    position: "relative",
    width: 50,
    height: 50,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView12: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  kitchenText: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Inter",
    color: "#333",
    textAlign: "left",
  },
  frameView13: {
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
  frameView14: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  kitchenView: {
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
  bedroomInteriorIcon: {
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
  bedRoomText: {
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
  bedroomView: {
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
  toiletRoomIcon: {
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
  bathRoomText: {
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
  bathroomView: {
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
  frameView22: {
    width: 317,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  growingPlantIcon: {
    position: "relative",
    width: 50,
    height: 50,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView23: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  balconyText: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Inter",
    color: "#333",
    textAlign: "left",
  },
  frameView24: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  vectorIcon4: {
    position: "relative",
    width: 7.58,
    height: 10.83,
    flexShrink: 0,
    display: "none",
  },
  chevronLeftView4: {
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
  frameView25: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  balconyView: {
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
  motherRoomIcon: {
    position: "relative",
    width: 50,
    height: 50,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView26: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  kidsRoomText: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Inter",
    color: "#333",
    textAlign: "left",
  },
  frameView27: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  vectorIcon5: {
    position: "relative",
    width: 7.58,
    height: 10.83,
    flexShrink: 0,
    display: "none",
  },
  chevronLeftView5: {
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
  frameView28: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  kidsroomView: {
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
  frameView29: {
    width: 317,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  poolIcon: {
    position: "relative",
    width: 50,
    height: 50,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView30: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  poolAreaText: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Inter",
    color: "#333",
    textAlign: "left",
  },
  frameView31: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  vectorIcon6: {
    position: "relative",
    width: 7.58,
    height: 10.83,
    flexShrink: 0,
    display: "none",
  },
  chevronLeftView6: {
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
  frameView32: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  poolareaView: {
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
  workingWithALaptop: {
    position: "relative",
    width: 50,
    height: 50,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView33: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  officeSpaceText: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Inter",
    color: "#333",
    textAlign: "left",
  },
  frameView34: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  vectorIcon7: {
    position: "relative",
    width: 7.58,
    height: 10.83,
    flexShrink: 0,
    display: "none",
  },
  chevronLeftView7: {
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
  frameView35: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  officespaceView: {
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
  frameView36: {
    width: 317,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView37: {
    flexDirection: "column",
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
  nextPressable: {
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
  frameView38: {
    width: 318,
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameView39: {
    backgroundColor: "rgba(254, 241, 230, 0.35)",
    width: 357,
    height: 712,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "column",
    padding: 15,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView40: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView41: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView42: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  homeView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default Home;
