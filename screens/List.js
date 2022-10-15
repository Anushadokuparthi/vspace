import * as React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const List = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.listView}>
      <View style={styles.frameView48}>
        <View style={styles.frameView47}>
          <View style={styles.frameView4}>
            <View style={styles.frameView2}>
              <View style={styles.frameView}>
                <Text style={styles.pemiumLivingRoom}>Pemium Living Room</Text>
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
              <Text style={styles.resultsFoundText}>6 results found</Text>
            </View>
          </View>
          <View style={[styles.frameView46, styles.mt14]}>
            <View style={styles.frameView24}>
              <Pressable
                style={styles.framePressable}
                onPress={() => navigation.navigate("Product")}
              >
                <View style={styles.productView}>
                  <View style={styles.frameView7}>
                    <View style={styles.groupView}>
                      <ImageBackground
                        style={styles.rectangleIcon}
                        resizeMode="cover"
                        source={require("../assets/rectangle-715.png")}
                      />
                      <View style={styles.frameView6}>
                        <View style={styles.frameView5}>
                          <Text style={styles.ftText}>4*4 ft</Text>
                        </View>
                        <View style={[styles.virtualRealityView, styles.ml118]}>
                          <Image
                            style={styles.vectorIcon1}
                            resizeMode="cover"
                            source={require("../assets/vector1.png")}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.frameView13, styles.mt10]}>
                    <View style={styles.frameView8}>
                      <Text style={styles.bigWallPaintingWithWindows}>
                        Big wall painting with windows
                      </Text>
                    </View>
                    <View style={[styles.frameView9, styles.mt5]}>
                      <View style={styles.groupView1}>
                        <Text style={styles.text}>-</Text>
                        <Text style={styles.text1}>$ 3500</Text>
                        <Text style={styles.discountText}>10% discount</Text>
                      </View>
                    </View>
                    <View style={[styles.frameView12, styles.mt5]}>
                      <View style={styles.frameView10}>
                        <Text style={styles.text2}>$ 3150</Text>
                      </View>
                      <View style={[styles.frameView11, styles.ml42]}>
                        <Text style={styles.buyNowText}>Buy Now</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Pressable>
              <View style={[styles.frameView23, styles.ml13]}>
                <View style={styles.productView1}>
                  <View style={styles.frameView16}>
                    <View style={styles.groupView2}>
                      <Image
                        style={styles.rectangleIcon1}
                        resizeMode="cover"
                        source={require("../assets/rectangle-715.png")}
                      />
                      <View style={styles.frameView15}>
                        <View style={styles.frameView14}>
                          <Text style={styles.ftText1}>4*4 ft</Text>
                        </View>
                        <View
                          style={[styles.virtualRealityView1, styles.ml118]}
                        >
                          <Image
                            style={styles.vectorIcon2}
                            resizeMode="cover"
                            source={require("../assets/vector1.png")}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.frameView22, styles.mt10]}>
                    <View style={styles.frameView17}>
                      <Text style={styles.bigWallPaintingWithWindows1}>
                        Big wall painting with windows
                      </Text>
                    </View>
                    <View style={[styles.frameView18, styles.mt5]}>
                      <View style={styles.groupView3}>
                        <Text style={styles.text3}>-</Text>
                        <Text style={styles.text4}>$ 3500</Text>
                        <Text style={styles.discountText1}>10% discount</Text>
                      </View>
                    </View>
                    <View style={[styles.frameView21, styles.mt5]}>
                      <View style={styles.frameView19}>
                        <Text style={styles.text5}>$ 3150</Text>
                      </View>
                      <View style={[styles.frameView20, styles.ml42]}>
                        <Text style={styles.buyNowText1}>Buy Now</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.frameView45, styles.mt14]}>
              <View style={styles.frameView34}>
                <View style={styles.productView2}>
                  <View style={styles.frameView27}>
                    <View style={styles.groupView4}>
                      <Image
                        style={styles.rectangleIcon2}
                        resizeMode="cover"
                        source={require("../assets/rectangle-715.png")}
                      />
                      <View style={styles.frameView26}>
                        <View style={styles.frameView25}>
                          <Text style={styles.ftText2}>4*4 ft</Text>
                        </View>
                        <View
                          style={[styles.virtualRealityView2, styles.ml118]}
                        >
                          <Image
                            style={styles.vectorIcon3}
                            resizeMode="cover"
                            source={require("../assets/vector1.png")}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.frameView33, styles.mt10]}>
                    <View style={styles.frameView28}>
                      <Text style={styles.bigWallPaintingWithWindows2}>
                        Big wall painting with windows
                      </Text>
                    </View>
                    <View style={[styles.frameView29, styles.mt5]}>
                      <View style={styles.groupView5}>
                        <Text style={styles.text6}>-</Text>
                        <Text style={styles.text7}>$ 3500</Text>
                        <Text style={styles.discountText2}>10% discount</Text>
                      </View>
                    </View>
                    <View style={[styles.frameView32, styles.mt5]}>
                      <View style={styles.frameView30}>
                        <Text style={styles.text8}>$ 3150</Text>
                      </View>
                      <View style={[styles.frameView31, styles.ml42]}>
                        <Text style={styles.buyNowText2}>Buy Now</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.frameView44, styles.ml13]}>
                <View style={styles.productView3}>
                  <View style={styles.frameView37}>
                    <View style={styles.groupView6}>
                      <Image
                        style={styles.rectangleIcon3}
                        resizeMode="cover"
                        source={require("../assets/rectangle-715.png")}
                      />
                      <View style={styles.frameView36}>
                        <View style={styles.frameView35}>
                          <Text style={styles.ftText3}>4*4 ft</Text>
                        </View>
                        <View
                          style={[styles.virtualRealityView3, styles.ml118]}
                        >
                          <Image
                            style={styles.vectorIcon4}
                            resizeMode="cover"
                            source={require("../assets/vector1.png")}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.frameView43, styles.mt10]}>
                    <View style={styles.frameView38}>
                      <Text style={styles.bigWallPaintingWithWindows3}>
                        Big wall painting with windows
                      </Text>
                    </View>
                    <View style={[styles.frameView39, styles.mt5]}>
                      <View style={styles.groupView7}>
                        <Text style={styles.text9}>-</Text>
                        <Text style={styles.text10}>$ 3500</Text>
                        <Text style={styles.discountText3}>10% discount</Text>
                      </View>
                    </View>
                    <View style={[styles.frameView42, styles.mt5]}>
                      <View style={styles.frameView40}>
                        <Text style={styles.text11}>$ 3150</Text>
                      </View>
                      <View style={[styles.frameView41, styles.ml42]}>
                        <Text style={styles.buyNowText3}>Buy Now</Text>
                      </View>
                    </View>
                  </View>
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
  ml131: {
    marginLeft: 131,
  },
  ml118: {
    marginLeft: 118,
  },
  ml42: {
    marginLeft: 42,
  },
  mt5: {
    marginTop: 5,
  },
  mt10: {
    marginTop: 10,
  },
  ml13: {
    marginLeft: 13,
  },
  mt14: {
    marginTop: 14,
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
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    transform: [
      {
        rotate: "180deg",
      },
    ],
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
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView4: {
    backgroundColor: "rgba(204, 204, 204, 0.1)",
    width: 393,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rectangleIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 175,
    height: 133,
  },
  ftText: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView5: {
    backgroundColor: "#fef1e6",
    shadowColor: "rgba(188, 74, 60, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingVertical: 3,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  vectorIcon1: {
    position: "relative",
    width: 12.88,
    height: 9.52,
    flexShrink: 0,
  },
  virtualRealityView: {
    shadowColor: "rgba(188, 74, 60, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    flexDirection: "column",
    paddingHorizontal: 1,
    paddingVertical: 2,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView6: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 175,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  groupView: {
    position: "relative",
    width: 175,
    height: 133,
    flexShrink: 0,
  },
  frameView7: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bigWallPaintingWithWindows: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView8: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    position: "absolute",
    top: 0,
    left: 35,
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#ccc",
    textAlign: "left",
  },
  text1: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 10,
    textDecoration: "line-through",
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#ccc",
    textAlign: "left",
  },
  discountText: {
    position: "absolute",
    top: 0,
    left: 46,
    fontSize: 10,
    textTransform: "lowercase",
    fontStyle: "italic",
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#88c88b",
    textAlign: "left",
  },
  groupView1: {
    position: "relative",
    width: 106,
    height: 12,
    flexShrink: 0,
  },
  frameView9: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text2: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView10: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 5,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  buyNowText: {
    position: "relative",
    fontSize: 10,
    fontFamily: "Rubik",
    color: "#bc4a3c",
    textAlign: "left",
  },
  frameView11: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameView12: {
    width: 157,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView13: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  productView: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#fef1e6",
    borderWidth: 1,
    position: "relative",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  framePressable: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleIcon1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 175,
    height: 133,
  },
  ftText1: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView14: {
    backgroundColor: "#fef1e6",
    shadowColor: "rgba(188, 74, 60, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingVertical: 3,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  vectorIcon2: {
    position: "relative",
    width: 12.88,
    height: 9.52,
    flexShrink: 0,
  },
  virtualRealityView1: {
    shadowColor: "rgba(188, 74, 60, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    flexDirection: "column",
    paddingHorizontal: 1,
    paddingVertical: 2,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView15: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 175,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  groupView2: {
    position: "relative",
    width: 175,
    height: 133,
    flexShrink: 0,
  },
  frameView16: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bigWallPaintingWithWindows1: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView17: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text3: {
    position: "absolute",
    top: 0,
    left: 35,
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#ccc",
    textAlign: "left",
  },
  text4: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 10,
    textDecoration: "line-through",
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#ccc",
    textAlign: "left",
  },
  discountText1: {
    position: "absolute",
    top: 0,
    left: 46,
    fontSize: 10,
    textTransform: "lowercase",
    fontStyle: "italic",
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#88c88b",
    textAlign: "left",
  },
  groupView3: {
    position: "relative",
    width: 106,
    height: 12,
    flexShrink: 0,
  },
  frameView18: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text5: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView19: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 5,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  buyNowText1: {
    position: "relative",
    fontSize: 10,
    fontFamily: "Rubik",
    color: "#bc4a3c",
    textAlign: "left",
  },
  frameView20: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameView21: {
    width: 157,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView22: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  productView1: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#fef1e6",
    borderWidth: 1,
    position: "relative",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView23: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView24: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleIcon2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 175,
    height: 133,
  },
  ftText2: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView25: {
    backgroundColor: "#fef1e6",
    shadowColor: "rgba(188, 74, 60, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingVertical: 3,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  vectorIcon3: {
    position: "relative",
    width: 12.88,
    height: 9.52,
    flexShrink: 0,
  },
  virtualRealityView2: {
    shadowColor: "rgba(188, 74, 60, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    flexDirection: "column",
    paddingHorizontal: 1,
    paddingVertical: 2,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView26: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 175,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  groupView4: {
    position: "relative",
    width: 175,
    height: 133,
    flexShrink: 0,
  },
  frameView27: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bigWallPaintingWithWindows2: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView28: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text6: {
    position: "absolute",
    top: 0,
    left: 35,
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#ccc",
    textAlign: "left",
  },
  text7: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 10,
    textDecoration: "line-through",
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#ccc",
    textAlign: "left",
  },
  discountText2: {
    position: "absolute",
    top: 0,
    left: 46,
    fontSize: 10,
    textTransform: "lowercase",
    fontStyle: "italic",
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#88c88b",
    textAlign: "left",
  },
  groupView5: {
    position: "relative",
    width: 106,
    height: 12,
    flexShrink: 0,
  },
  frameView29: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text8: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView30: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 5,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  buyNowText2: {
    position: "relative",
    fontSize: 10,
    fontFamily: "Rubik",
    color: "#bc4a3c",
    textAlign: "left",
  },
  frameView31: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameView32: {
    width: 157,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView33: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  productView2: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#fef1e6",
    borderWidth: 1,
    position: "relative",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView34: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleIcon3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 175,
    height: 133,
  },
  ftText3: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView35: {
    backgroundColor: "#fef1e6",
    shadowColor: "rgba(188, 74, 60, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingVertical: 3,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  vectorIcon4: {
    position: "relative",
    width: 12.88,
    height: 9.52,
    flexShrink: 0,
  },
  virtualRealityView3: {
    shadowColor: "rgba(188, 74, 60, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    flexDirection: "column",
    paddingHorizontal: 1,
    paddingVertical: 2,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView36: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 175,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  groupView6: {
    position: "relative",
    width: 175,
    height: 133,
    flexShrink: 0,
  },
  frameView37: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bigWallPaintingWithWindows3: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView38: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text9: {
    position: "absolute",
    top: 0,
    left: 35,
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#ccc",
    textAlign: "left",
  },
  text10: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 10,
    textDecoration: "line-through",
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#ccc",
    textAlign: "left",
  },
  discountText3: {
    position: "absolute",
    top: 0,
    left: 46,
    fontSize: 10,
    textTransform: "lowercase",
    fontStyle: "italic",
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#88c88b",
    textAlign: "left",
  },
  groupView7: {
    position: "relative",
    width: 106,
    height: 12,
    flexShrink: 0,
  },
  frameView39: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text11: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView40: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 5,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  buyNowText3: {
    position: "relative",
    fontSize: 10,
    fontFamily: "Rubik",
    color: "#bc4a3c",
    textAlign: "left",
  },
  frameView41: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameView42: {
    width: 157,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView43: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  productView3: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#fef1e6",
    borderWidth: 1,
    position: "relative",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView44: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView45: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView46: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView47: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView48: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  listView: {
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

export default List;
